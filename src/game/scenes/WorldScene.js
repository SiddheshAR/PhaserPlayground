export class WorldScene extends Phaser.Scene {
  constructor() {
    super({ key: 'WorldScene' })
  }

  preload() {
    // Load all assets before the scene starts
    this.load.image('tiles', '/assets/tileset.png')
    this.load.spritesheet('player', '/assets/player.png', {
      frameWidth: 32, frameHeight: 48
    })
  }

  create() {
    // Called once when the scene starts — build your world here
    this.add.text(100, 100, 'Pallet Town', {
      fontSize: '20px', color: '#ffffff'
    })
  }

  update() {
    // Called every frame (~60fps) — handle movement, AI, collisions
  }
}