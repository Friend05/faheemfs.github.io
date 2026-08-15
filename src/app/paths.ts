export function withBase(path: string) {
  if (!path || path.startsWith('#') || /^(?:[a-z]+:)?\/\//i.test(path)) {
    return path
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
