import { useState, useEffect } from 'react'

export default function useWindowResize() {
  const [width, setWidth] = useState(undefined)
  const [height, setHeight] = useState(undefined)

  function getWindowSize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', getWindowSize)
    return () => {
      window.removeEventListener('resize', getWindowSize)
    }
  }, [])

  return [width, height]
}
