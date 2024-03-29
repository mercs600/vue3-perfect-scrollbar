<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PerfectScrollbarExpose } from '../src/perfect-scrollbar'
const scrollbarApi = ref<PerfectScrollbarExpose | null>(null)

onMounted(() => {
  if (scrollbarApi.value) {
    console.log(scrollbarApi.value.ps)
  }
})
</script>

<template>
  <PerfectScrollbar ref="scrollbarApi">
    <p>
      Laboris minim irure laboris in anim in. Elit consectetur irure ad enim
      velit ullamco sunt nulla enim non nulla qui. Do labore tempor velit culpa
      exercitation esse incididunt aliqua ex culpa eiusmod aute. Occaecat
      commodo ut deserunt aliqua dolore Lorem elit consectetur aliquip pariatur.
      Proident est aliqua amet occaecat ut occaecat anim culpa tempor.
    </p>
    <p>
      Laboris minim irure laboris in anim in. Elit consectetur irure ad enim
      velit ullamco sunt nulla enim non nulla qui. Do labore tempor velit culpa
      exercitation esse incididunt aliqua ex culpa eiusmod aute. Occaecat
      commodo ut deserunt aliqua dolore Lorem elit consectetur aliquip pariatur.
      Proident est aliqua amet occaecat ut occaecat anim culpa tempor.
    </p>
    <p>
      Laboris minim irure laboris in anim in. Elit consectetur irure ad enim
      velit ullamco sunt nulla enim non nulla qui. Do labore tempor velit culpa
      exercitation esse incididunt aliqua ex culpa eiusmod aute. Occaecat
      commodo ut deserunt aliqua dolore Lorem elit consectetur aliquip pariatur.
      Proident est aliqua amet occaecat ut occaecat anim culpa tempor.
    </p>
  </PerfectScrollbar>
</template>

<style>
.ps {
  max-height: 100px;
}
</style>
