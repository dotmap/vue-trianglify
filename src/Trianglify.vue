<template>
  <div id="trianglify"></div>
</template>

<script>
import Trianglify from 'trianglify'

export default {
  name: 'trianglify',
  props: [
    'type',
    'width',
    'height',
    'cellSize',
    'variance',
    'seed',
    'xColors',
    'yColors',
    'colorSpace',
    'colorFunction',
    'strokeWidth',
    'points'
  ],
  data () {
    return {
      pattern: Trianglify({
        width: this.width || 600,
        height: this.height || 400,
        cell_size: this.cellSize || 75,
        variance: this.variance || 0.75,
        seed: this.seed || null,
        x_colors: this.xColors || 'random',
        y_colors: this.yColors || 'match_x',
        color_space: this.colorSpace || null,
        stroke_width: this.strokeWidth || 1.51,
        points: this.points || null
      })
    }
  },
  mounted () {
    const output = (ptn, type) => {
      switch (type) {
        case 'png':
          const png = document.createElement('img')
          png.src = ptn.png()
          return png
        case 'canvas':
          return ptn.canvas()
        default:
          return ptn.svg()
      }
    }
    document.getElementById('trianglify').appendChild(output(this.pattern, this.type))
  }
}
</script>
