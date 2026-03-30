import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    const id = hash.replace('#', '')

    const scrollToTarget = () => {
      const element = document.getElementById(id)

      if (!element) {
        return false
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return true
    }

    if (scrollToTarget()) {
      return
    }

    const timeoutId = window.setTimeout(scrollToTarget, 150)

    return () => window.clearTimeout(timeoutId)
  }, [hash, pathname])

  return null
}
