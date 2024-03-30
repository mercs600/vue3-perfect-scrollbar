# vue3-perfect-scrollbar
A minimalistic yet powerful Vue.js wrapper for [Perfect Scrollbar](https://perfectscrollbar.com/).

## 🔍 Considerations Before Using Custom Scrollbars
Before implementing custom scrollbars, consider their potential impact on user experience. Native scrollbar styling, as supported by browsers like Chromeoor Firefox often provides a good balance of customization without sacrificing usability. Check out [Chrome's documentation on scrollbar styling](https://chat.openai.com/#:~:text=Chrome%27s%20documentation%20on%20scrollbar%20styling) to see if it meets your needs. If your project requires precise design alignment that native options can't provide, then vue3-perfect-scrollbar is a solid choice.

## 📦 Installation

### Using `npm`

```sh
npm install vue3-perfect-scrollbar
```

### Using `yarn`

```sh
yarn add vue3-perfect-scrollbar
```

### Using `pnpm`
```sh
pnpm add vue3-perfect-scrollbar
```

## 🔌 How to Use 

### Global Registration
🚀 [Run on StackBlitz](https://stackblitz.com/edit/vitejs-vite-xpb5dl?file=src%2FApp.vue)

Integrate vue3-perfect-scrollbar globally in your main application file:

```js
import { createApp } from 'vue';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
import App from './App.vue';

createApp(App).use(PerfectScrollbarPlugin).mount('#app');
```

Now, you can leverage the plugin in any component:

```html
<PerfectScrollbar>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <p> ... and much more content </p>
</PerfectScrollbar>
```

Customize the container height as needed:

```css
/* example */
.ps {
  height: 400px; /* or max-height: 400px; */
}
```

### Global Options

The install method accepts additional parameters:

```js
app.use(PerfectScrollbarPlugin, {
    componentName: 'Scrollbar'
});
```

#### `componentName {String}`
The name of your global component.

**Default**: `PerfectScrollbar`

### Local Registration
🚀 [Run on StackBlitz](hhttps://stackblitz.com/edit/vitejs-vite-uszgyc?file=src%2FApp.vue)

For local registration, import and declare the component within your Vue component file:

```html
<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
</script>

<template>
  <PerfectScrollbar>
    <p>content</p>
  </PerfectScrollbar>
</template>

<style>
@import 'vue3-perfect-scrollbar/style.css';

.ps {
  max-height: 100px; /* or height: 100px; */
}
</style>
```

## ⚙️ Props 

Customize the Perfect Scrollbar with the following props:

```ts
tag?: string;
options?: PerfectScrollbar.Options;
```

#### `tag? {String}`
The tag that will be rendered as the Perfect Scrollbar container.

**Default**: `div`

#### `options? {PerfectScrollbar.Options}`: [Options](https://perfectscrollbar.com/options.html)
Options for the Perfect Scrollbar library.

[Explore Perfect Scrollbar options for further customization.](https://perfectscrollbar.com/options.html)
```ts
handlers?: string[];
maxScrollbarLength?: number;
minScrollbarLength?: number;
scrollingThreshold?: number;
scrollXMarginOffset?: number;
scrollYMarginOffset?: number;
suppressScrollX?: boolean;
suppressScrollY?: boolean;
swipeEasing?: boolean;
useBothWheelAxes?: boolean;
wheelPropagation?: boolean;
wheelSpeed?: number;
```

## 🔄 Events
You can listen to all Perfect Scrollbar events.

🚀 [Run on StackBlitz](https://stackblitz.com/edit/vitejs-vite-p6a2i7?embed=1&file=src%2FApp.vue)

Listen to all Perfect [Scrollbar events](https://perfectscrollbar.com/events.html). For a comprehensive list of events, visit Perfect Scrollbar events.
## Example
```html
<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

function onScrollEvent(event) {
  console.log(event);
}
</script>

<template>
  <PerfectScrollbar @ps-scroll-y="onScrollEvent">
    <p>content</p>
  </PerfectScrollbar>
</template>
```

### List of Event Keys

```ts
'scroll',
'ps-scroll-y',
'ps-scroll-x',
'ps-scroll-up',
'ps-scroll-down',
'ps-scroll-left',
'ps-scroll-right',
'ps-y-reach-start',
'ps-y-reach-end',
'ps-x-reach-start',
'ps-x-reach-end'
```

## 🧩 Access to PerfectScrollbar Instance.

To gain direct access to the Perfect Scrollbar instance and leverage its API within your Vue component, you can use the ref attribute.

🚀 [Run on StackBlitz](https://stackblitz.com/edit/vitejs-vite-mhnwda?file=src%2FApp.vue)

```html
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import type { PerfectScrollbarExpose } from 'vue3-perfect-scrollbar';
const scrollbarApi = ref<PerfectScrollbarExpose | null>(null);

onMounted(() => {
  if (scrollbarApi.value) {
    console.log(scrollbarApi.value.ps?.settings);
  }
})
</script>
<template>
  <PerfectScrollbar ref="scrollbarApi">
    <p>content</p>
  </PerfectScrollbar>
</template>
```

## 🔌 Use with Nuxt
🚀 [Run on StackBlitz](https://stackblitz.com/edit/nuxt-starter-7bgunj?file=app.vue)

Add to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['vue3-perfect-scrollbar/nuxt']
});
```


## 🆘 Bug Reporting
Found a bug? Here's where to report it:

+ If it's about the vue3-perfect-scrollbar wrapper (like how it works with Vue, or issues with props and events), please report these bugs on our vue3-perfect-scrollbar GitHub repo. 

+ If the bug is with the Perfect Scrollbar itself (like problems with how it scrolls or looks), you should report it to the official Perfect Scrollbar repo. Remember, vue3-perfect-scrollbar is just a wrapper to make Perfect Scrollbar work with Vue. It doesn't change how Perfect Scrollbar works. So, if there's something wrong with the scrollbar behavior, the Perfect Scrollbar team needs to know.
