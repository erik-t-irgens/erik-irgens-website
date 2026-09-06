import { useEffect, useState } from 'react'

const OWNER = 'erik-t-irgens'
const TTL_MS = 60 * 60 * 1000 // cache GitHub responses for an hour per browser

function readCache(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const { t, v } = JSON.parse(raw)
    return Date.now() - t < TTL_MS ? v : null
  } catch {
    return null
  }
}

function writeCache(key, v) {
  try {
    localStorage.setItem(key, JSON.stringify({ t: Date.now(), v }))
  } catch {
    /* storage unavailable; ignore */
  }
}

// Returns the static fallback immediately, then upgrades to live GitHub data
// (description, languages, last push) when the unauthenticated API allows it.
export function useGitHubRepo(name, fallback) {
  const [data, setData] = useState(() => ({ ...fallback, live: false }))

  useEffect(() => {
    let cancelled = false
    const key = `gh:${OWNER}/${name}`
    const cached = readCache(key)
    if (cached) {
      setData({ ...fallback, ...cached, live: true })
      return undefined
    }
    const base = `https://api.github.com/repos/${OWNER}/${name}`
    Promise.all([fetch(base), fetch(`${base}/languages`)])
      .then(async ([repoRes, langRes]) => {
        if (!repoRes.ok || !langRes.ok) throw new Error(`${repoRes.status}/${langRes.status}`)
        const repo = await repoRes.json()
        const langs = await langRes.json()
        const v = {
          description: repo.description || fallback.description,
          url: repo.html_url,
          pushedAt: repo.pushed_at,
          languages: Object.entries(langs),
        }
        writeCache(key, v)
        if (!cancelled) setData({ ...fallback, ...v, live: true })
      })
      .catch(() => {
        /* rate-limited or offline: keep the fallback */
      })
    return () => {
      cancelled = true
    }
    // `fallback` is static module data; only the repo name matters here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return data
}
