import React, { useState, useEffect } from 'react'

const ScrollProgress = (): JSX.Element => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0)

  const updateScrollPercentage = (): void => {
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = window.scrollY
    const percentage = (scrolled / scrollHeight) * 100
    setScrollPercentage(percentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPercentage)

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage)
    }
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-[999] h-1 rounded-full bg-indigo-500"
      style={{ width: `${scrollPercentage}%` }}
    />
  )
}

export default ScrollProgress
