import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

const MAX_BODY_BYTES = 16_384;

async function readJsonBody(request: Request): Promise<unknown> {
  const reader = request.body?.getReader();

  if (!reader) {
    throw new SyntaxError("Missing request body");
  }

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    totalBytes += value.byteLength;
    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel().catch(() => undefined);
      throw new RangeError("Request body is too large");
    }

    chunks.push(value);
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return JSON.parse(new TextDecoder().decode(bytes));
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { success: false, message: "Request body is too large." },
        { status: 413 },
      );
    }

    const body = await readJsonBody(request);

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 },
      );
    }

    const payload = body as Record<string, unknown>;

    const name =
      typeof payload.name === "string"
        ? payload.name.trim()
        : "";

    const email =
      typeof payload.email === "string"
        ? payload.email.trim()
        : "";

    const phone =
      typeof payload.phone === "string" &&
      payload.phone.trim()
        ? payload.phone.trim()
        : null;

    const subject =
      typeof payload.subject === "string" &&
      payload.subject.trim()
        ? payload.subject.trim()
        : null;

    const message =
      typeof payload.message === "string"
        ? payload.message.trim()
        : "";

    if (
      name.length > 120 ||
      email.length > 254 ||
      (phone?.length ?? 0) > 40 ||
      (subject?.length ?? 0) > 200 ||
      message.length > 5_000
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "A valid email address is required.",
        },
        { status: 400 },
      );
    }

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required.",
        },
        { status: 400 }
      );
    }

    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof RangeError) {
      return NextResponse.json(
        { success: false, message: "Request body is too large." },
        { status: 413 },
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request body." },
        { status: 400 },
      );
    }

    const errorCode =
      error && typeof error === "object" && "code" in error
        ? String(error.code)
        : "UNKNOWN";
    console.error("Contact form error. Error code:", errorCode);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
