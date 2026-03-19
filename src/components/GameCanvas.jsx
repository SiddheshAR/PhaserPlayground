import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { config } from '../game/config'

export function GameCanvas() {
  const containerRef = useRef(null)

  useEffect(() => {
    const game = new Phaser.Game({
      ...config,
      parent: containerRef.current  // Mount into our div
    })
    return () => game.destroy(true)  // Cleanup on unmount
  }, [])

  return <div ref={containerRef} />
}