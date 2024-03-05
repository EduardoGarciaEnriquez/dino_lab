import { useState, useEffect } from 'react'

function useScreenWidth() {
  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Call handleResize immediately to set initial size
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect runs only on mount and unmount

  return { width }
}

export { useScreenWidth }
