# vue-trianglify
A Vue component for generating awesome polygonal art. It uses the Trianglify library, which you can check out [here](https://github.com/qrohlf/trianglify).

## Usage

First, install the package:

```sh
npm install vue-trianglify
# or
yarn add vue-trianglify
```

Currently, the package only supports usage as an imported component, so you don't want to use it in multiple places if you're bundling.

```html
<template>
  <div>
    <trianglify/>
  </div>
</template>

<script>
import {Trianglify} from 'vue-trianglify'

export default {
  components: {
    Trianglify
  }
}
</script>
```

Note the destructured import. If you don't do this, Vue will tell you that the `trianglify` component is missing a template or render function.

## Documentation
Props documentation to come.

## Caveats
I don't know how to use the canvas output option with a Vue component, so I'm going to wait on implementing that. If you know how to add it, by all means, please do.
