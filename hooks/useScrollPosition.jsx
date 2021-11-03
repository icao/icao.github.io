import { useState, useEffect } from 'react'

const isWindow = typeof window !== 'undefined'
function getScrollPosition() {
  return isWindow
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 }
}

export function useScrollPosition() {
  const [position, setPosition] = useState(getScrollPosition())

  function handleScroll() {
    setPosition(getScrollPosition())
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}

export function useScrollPositionX() {
  const { x } = useScrollPosition()
  return x
}

export function useScrollPositionY() {
  const { y } = useScrollPosition()
  return y
}
