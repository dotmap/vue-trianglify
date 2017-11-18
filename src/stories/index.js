import { storiesOf } from '@storybook/vue'

const Trianglify = require('./../Trianglify.js')

storiesOf('trianglify', module)
  .add('Default Configuration', () => ({
    components: { Trianglify },
    template: '<trianglify/>'
  }))
