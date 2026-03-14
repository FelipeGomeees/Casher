import { expect, describe, it, vi, beforeEach } from "vitest";
import { useStaleCache } from "./useStaleCache";

describe('useStaleCache', () => {

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
  })

  it('returns true when cache was never set', () => {
    const cache = useStaleCache(1000)

    expect(cache.isStale('users')).toBe(true)
  })

  it('returns false after markFresh', () => {
    const cache = useStaleCache(1000)

    cache.markFresh('users')

    expect(cache.isStale('users')).toBe(false)
  })

  it('returns true after invalidate', () => {
    const cache = useStaleCache(1000)

    cache.markFresh('users')
    cache.invalidate('users')

    expect(cache.isStale('users')).toBe(true)
  })

  it('returns true when ttl expires', () => {
    const cache = useStaleCache(1000)

    cache.markFresh('users')

    vi.advanceTimersByTime(2000)

    expect(cache.isStale('users')).toBe(true)
  })

})
