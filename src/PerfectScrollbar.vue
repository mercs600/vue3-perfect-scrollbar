<template>
  <component :is="tag" ref="scrollbar" class="ps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'
import type {
  PerfectScrollbarEmits,
  PerfectScrollbarEmitsKeys,
} from './perfect-scrollbar'

const props = withDefaults(
  defineProps<{
    tag?: string
    options?: PerfectScrollbar.Options
  }>(),
  {
    tag: 'div',
    options: () => ({}),
  },
)

const emit = defineEmits<PerfectScrollbarEmits>()
const scrollbar = ref<HTMLElement | null>(null)
const ps: Ref<null | PerfectScrollbar> = ref(null)

watch(
  () => props.options,
  () => {
    destroyInstance()
    createInstance()
  },
  { deep: true },
)

onMounted(() => {
  if (scrollbar.value) {
    createInstance()
  }
})

onBeforeUnmount(() => {
  destroyInstance()
})

function createInstance() {
  if (scrollbar.value) {
    ps.value = new PerfectScrollbar(scrollbar.value, props.options)
    toggleListeners()
  }
}

function destroyInstance() {
  if (ps.value) {
    toggleListeners(false)
    ps.value.destroy()
    ps.value = null
  }
}

const eventListeners: Record<
  PerfectScrollbarEmitsKeys,
  (event: Event) => void
> = {
  scroll: createEventListener('scroll'),
  'ps-scroll-y': createEventListener('ps-scroll-y'),
  'ps-scroll-x': createEventListener('ps-scroll-x'),
  'ps-scroll-up': createEventListener('ps-scroll-up'),
  'ps-scroll-down': createEventListener('ps-scroll-down'),
  'ps-scroll-left': createEventListener('ps-scroll-left'),
  'ps-scroll-right': createEventListener('ps-scroll-right'),
  'ps-y-reach-start': createEventListener('ps-y-reach-start'),
  'ps-y-reach-end': createEventListener('ps-y-reach-end'),
  'ps-x-reach-start': createEventListener('ps-x-reach-start'),
  'ps-x-reach-end': createEventListener('ps-x-reach-end'),
}

function createEventListener(eventName: PerfectScrollbarEmitsKeys) {
  return function (event: Event) {
    emit(eventName as any, event)
  }
}

function toggleListeners(addListeners: boolean = true) {
  if (!ps.value?.element) {
    return
  }

  Object.entries(eventListeners).forEach(([eventName, listener]) => {
    if (addListeners) {
      ps.value?.element.addEventListener(eventName, listener)
    } else {
      ps.value?.element.removeEventListener(eventName, listener)
    }
  })
}

defineExpose({
  ps,
})
</script>
<style>
@import 'perfect-scrollbar/css/perfect-scrollbar.css';

.ps {
  position: relative;
}
</style>
