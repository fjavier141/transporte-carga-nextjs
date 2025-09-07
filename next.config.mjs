/** @type {import("next").NextConfig} */
const isPages = !!process.env.GITHUB_PAGES
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH // sin slash inicial
const basePath = basePathEnv ? `/${basePathEnv}` : ""

const nextConfig = {
  experimental: { typedRoutes: true },
  output: "export",               // ← export estático
  images: { unoptimized: true },  // ← necesario en export
  basePath: isPages ? basePath : undefined,
  assetPrefix: isPages ? `${basePath}/` : undefined,
}

export default nextConfig