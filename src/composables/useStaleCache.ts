export function useStaleCache(ttl: number) {
  const cache = new Map<string, number>()

  function isStale(key: string) {
    const lastFetch = cache.get(key)
    if (!lastFetch) return true
    return Date.now() - lastFetch > ttl
  }

  function markFresh(key: string) {
    cache.set(key, Date.now())
  }

  function invalidate(key: string) {
    cache.delete(key)
  }

  return {
    isStale,
    markFresh,
    invalidate
  }
}