import Phaser from 'phaser'

import GameScene from './scenes/Game'

/* eslint-disable no-new */
new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  scaleMode: 0,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [GameScene]
})
