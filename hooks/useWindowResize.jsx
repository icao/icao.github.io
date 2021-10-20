import { useState, useEffect } from 'react'

export function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {

    window.addEventListener('resize', getWindowSize)
    return () => {
      window.removeEventListener('resize', getWindowSize)
    }
  })

  function getWindowSize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return [width, height]
}