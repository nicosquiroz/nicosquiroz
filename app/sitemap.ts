export const baseUrl = 'https://nicosquiroz.com'

export default async function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]
}
