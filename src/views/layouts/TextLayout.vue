<template>
  <div class="layout">
    <Header />
    <div class="layout__content">
        <slot name="nav"></slot>
        <slot name="menu"></slot>
        <router-view></router-view>
        <slot name="slider"></slot>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'TextLayout',
  components: {
    Header, Footer
  }
}
</script>
