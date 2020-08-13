<template>
  <div class="layout">
    <Nav v-if="nav" :nav="nav" />
    <SidebarMenu v-if="menu" :menu="menu" />
    <Slider v-if="slider" :slider="slider" />
    <ReadMore v-if="readMore" :readMore="readMore" />
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import Slider from '@/components/Slider.vue'
import ReadMore from '@/components/ReadMore.vue'

export default {
  name: 'TextLayout',
  components: {
    Nav, SidebarMenu, Slider, ReadMore
  },
  props: {
    nav: Array,
    menu: Array,
    slider: Array,
    readMore: Array
  }
}
</script>
