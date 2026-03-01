import { ref } from 'vue'

export function useStaleCache(ttl: number) {
  const lastFetch = ref<number | null>(null)

  function isStale() {
    if (!lastFetch.value) return true
    return Date.now() - lastFetch.value > ttl
  }

  function markFresh() {
    lastFetch.value = Date.now()
  }

  function invalidate() {
    lastFetch.value = null
  }

  return {
    isStale,
    markFresh,
    invalidate
  }
}