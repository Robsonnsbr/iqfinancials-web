export async function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
  `;

  return new Response(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
