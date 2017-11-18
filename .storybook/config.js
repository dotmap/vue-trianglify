import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import your custom components.
const Trianglify = require('../src/Trianglify.js')

// Register custom components.
Vue.component('trianglify', Trianglify)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories')
}

configure(loadStories, module)