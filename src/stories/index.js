import { storiesOf } from '@storybook/vue'

import Trianglify from './../Trianglify.vue'

storiesOf('trianglify', module)
  .add('Default Configuration', () => ({
    components: { Trianglify },
    template: '<trianglify/>'
  }))
