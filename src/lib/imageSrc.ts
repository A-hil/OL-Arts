export function getImageSrc(image: string, width = 400, height = 300) {
  const value = image.trim()
  if (/^(https?:\/\/|blob:|data:image\/|\/)/i.test(value)) return value

  const params = new URLSearchParams({
    w: String(width),
    h: String(height),
    fit: 'crop',
    auto: 'format',
  })

  return `https://images.unsplash.com/${value}?${params.toString()}`
}
