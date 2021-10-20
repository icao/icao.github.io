import { useState, useEffect } from 'react'

export function useWindowResize() {
  const [width, setWidth] = useState(undefined)
  const [height, setHeight] = useState(undefined)

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