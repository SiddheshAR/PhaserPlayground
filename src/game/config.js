import Phaser from 'phaser'
import { WorldScene } from './scenes/WorldScene'

export const config = {
  type: Phaser.AUTO,       // WebGL if available, else Canvas
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',   // Arcade physics is perfect for top-down RPGs
    arcade: { debug: false }
  },
  scene: [WorldScene],
}