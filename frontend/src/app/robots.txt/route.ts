export const dynamic = "force-dynamic"; // Garante que a página será gerada dinamicamente

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://iqfinancials.com.br"; // Substitua pelo seu domínio

  const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: ${siteUrl}/sitemap.xml
  `;

  return new Response(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
