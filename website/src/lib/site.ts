export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.GITHUB_PAGES === 'true'
    ? 'https://hacrex.github.io/Revia'
    : 'https://reviarecovery.com');

export const siteName = 'NIRVAN';
export const siteTagline = 'Move Forward. Live Better.';
