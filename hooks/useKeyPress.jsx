import { useState, useEffect } from 'react'

export default function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState('')
  const [isKeyPressed, setIsKeyPressed] = useState(false)

  function handleKeyDown({ key }) {
    if (targetKey === key) {
      setIsKeyPressed(true)
      setKeyPressed(key)
    }
  }

  function handleKeyUp({ key }) {
    if (targetKey === key) {
      setIsKeyPressed(false)
      setKeyPressed(key)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])
  return { keyPressed, isKeyPressed }
}
