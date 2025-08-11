import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.kaylashaarkunst.de/' },
    { url: 'https://www.kaylashaarkunst.de/services' },
    { url: 'https://www.kaylashaarkunst.de/about' },
    { url: 'https://www.kaylashaarkunst.de/contact' },
    { url: 'https://www.kaylashaarkunst.de/appointments' },
    { url: 'https://www.kaylashaarkunst.de/impressum' },
  ]
}
