# vue3-perfect-scrollbar
Vue.js minimalistic but powerful wrapper for perfect scrollbar

# Why I Created it ? 
Because I ❤️ to use [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar) in my projects (🙌 [utatti](https://github.com/utatti)). But also because the current solutions on github are outdated or overcomplicated.

# Why would you use it ? 

Because you want to load [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar#) to your Vue project in an easy way. But also because this plugin is updated, tested and build by rollup. So you will not find any unnecessary 💩 code in this repo. I hope 🙏.

If you have any reasonable PR you are welcome 🤘

# Install
## npm

```sh
npm install vue3-perfect-scrollbar
```

## yarn 

```sh
yarn add vue3-perfect-scrollbar
```

# How to use 

## Global Registration

```js
import { createApp } from 'vue'
import App from './App.vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App)
app.use(PerfectScrollbar)
app.mount('#app')

```

So then you can use this plugin in each component as

```html
<perfect-scrollbar>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</perfect-scrollbar>
```

This plugin will generate a container with ".ps" class name, you need to customize the height of the container

```css
/* example */
.ps {
  height: 400px;
}
```

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wn7q7o9ww7)

### Global options

Install method takes additional parameters:

```js
app.use(PerfectScrollbar, {
  watchOptions: true,
  options: {
    suppressScrollX: true
  }
})
```

#### `name {String}`
Name of your global component.

**Default**: `PerfectScrollbar`

#### `tag {String}`
Tag which will be render as perfect scrollbar container

**Default**: `div`

#### `watchOptions {Boolean}`
Set true if you want to update perfect-scrollbar on options change

**Default**: `false`

#### `options {Object}`: [Options](https://perfectscrollbar.com/options.html)
perfect-scrollbar options.

**Default**: `{}`

## Local Registration

```html
<template>
    <div>
        <perfect-scrollbar>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </perfect-scrollbar>
    </div>
</template>
<script>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
export default {
    components: {
        PerfectScrollbar
    }
}
</script>
<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css"/>
```

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/32o7m59xzm)

# Props 


#### `tag {String}`
Tag which will be render as perfect scrollbar container

**Default**: `div`

#### `watchOptions {Boolean}`
Set true if you want to update perfect-scrollbar on options change

**Default**: `false`

#### `options {Object}`: [Options](https://perfectscrollbar.com/options.html)
perfect-scrollbar options.

# Events

You can use Vue.js way to listen on the all perfect-scrollbar events. List of events you can find [here](https://github.com/mdbootstrap/perfect-scrollbar#events)

Simple example:
```vue
<template>
  <div id="app">
    <perfect-scrollbar @ps-scroll-y="onScroll" ref="scrollbar">
      <div>your content here</div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  methods: {
    onScroll(event) {
      console.log(this.$refs.scrollbar.ps, event);
    }
  }
};
</script>
```
[![Edit Vue Perfect Scrollbar Event Listening](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-perfect-scrollbar-event-listening-e5eil?fontsize=14&hidenavigation=1&theme=dark)

# DEMO

[https://mercs600.github.io/vue3-perfect-scrollbar/](https://mercs600.github.io/vue3-perfect-scrollbar/). You can also fork example from [codesandbox](https://codesandbox.io/embed/32o7m59xzm)

# Cookbook

## Custom scrollbar behavior with router.

One of simple solution to setup custom scrollbar to top when your route is changed. 

1. Add perfect scrollbar as wrapper for router-view and add simple ref
```html
<perfect-scrollbar ref="scroll">
  <router-view></router-view>
</perfect-scrollbar>
```

2. Add watch on $route to setup scroll container to 0, when route is changed. 

```js
watch: {
  $route() {
    this.$refs.scroll.$el.scrollTop = 0;
  }
}
```

[![Edit vue3-perfect-scrollbar with router](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-routing-example-jbokc?fontsize=14&hidenavigation=1&theme=dark)
