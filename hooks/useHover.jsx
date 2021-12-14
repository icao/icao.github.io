import { useState, useEffect, useRef } from 'react'

export default function useHover() {
  const refElement = useRef(null)
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

  useEffect(() => {
    const node = refElement.current

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter)
        node.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    return undefined
  }, [refElement.current])
  return [refElement, isHover]
}
