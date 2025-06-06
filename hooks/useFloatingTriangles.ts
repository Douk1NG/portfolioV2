import { useState, useEffect } from 'react'

interface Triangle {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  opacity: number
}

export const useFloatingTriangles = (count: number = 8) => {
  const [triangles, setTriangles] = useState<Triangle[]>([])

  useEffect(() => {
    // Initialize triangles with random positions and properties
    const initialTriangles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * (120 - 80) + 80, // between 80 and 120 (larger triangles)
      rotation: Math.random() * 360,
      speed: Math.random() * (0.3 - 0.1) + 0.1, // between 0.1 and 0.3 (slower movement)
      opacity: Math.random() * (0.08 - 0.03) + 0.03 // between 0.03 and 0.08 (more subtle)
    }))

    setTriangles(initialTriangles)

    // Animation loop
    let animationFrameId: number
    let lastTime = 0

    const animate = (currentTime: number) => {
      if (lastTime === 0) {
        lastTime = currentTime
      }
      const deltaTime = currentTime - lastTime

      setTriangles(prevTriangles =>
        prevTriangles.map(triangle => ({
          ...triangle,
          y: ((triangle.y - triangle.speed * deltaTime * 0.01) + 100) % 100,
          rotation: (triangle.rotation + triangle.speed * deltaTime * 0.01) % 360 // slower rotation
        }))
      )

      lastTime = currentTime
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [count])

  return triangles
} 