const supabaseHost = (() => {
  try {
    return process.env.NEXT_PUBLIC_SUPABASE_URL
      ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
      : null;
  } catch {
    return null;
  }
})();

export function canOptimizeImage(src: string): boolean {
  if (src.startsWith("/") && !src.startsWith("//")) {
    return true;
  }

  try {
    const url = new URL(src);
    if (url.protocol !== "https:") return false;
    if (url.hostname === "images.unsplash.com") return true;

    return (
      url.hostname === supabaseHost &&
      url.pathname.startsWith("/storage/v1/object/public/")
    );
  } catch {
    return false;
  }
}
