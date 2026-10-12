import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    const phone =
      typeof body.phone === "string" &&
      body.phone.trim()
        ? body.phone.trim()
        : null;

    const subject =
      typeof body.subject === "string" &&
      body.subject.trim()
        ? body.subject.trim()
        : null;

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

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

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required.",
        },
        { status: 400 }
      );
    }

    const contactMessage =
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
        contactMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Contact form error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send your message.",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contactMessages =
      await prisma.contactMessage.findMany({
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          subject: true,
          message: true,
          createdAt: true,
          updatedAt: true,
        },
      });

    return NextResponse.json({
      success: true,
      contactMessages,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch contact messages.",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}