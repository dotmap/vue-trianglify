const Trianglify = require('trianglify')

module.exports = {
  name: 'trianglify',
  render (h) {
    const output = (ptn, type) => {
      switch (type) {
        case 'png':
          return h('img', {
            attrs: {
              id: 'trianglify',
              src: this.pattern.png()
            }
          })
        case 'canvas':
          throw new Error('Canvas output is not supported yet. Please try svg or png output instead')
        default:
          return h('div', { domProps: {innerHTML: `${ptn.svg().outerHTML}`} })
      }
    }
    return output(this.pattern, this.type)
  },
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
  }
}
