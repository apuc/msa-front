<template>
  <div class="layout">
    <Nav v-if="getTopPageMenu" :nav="getTopPageMenu" />
    <div class="contentWrapper">
      <SidebarMenu v-if="getLeftPageMenu" :menu="getLeftPageMenu" />
      <div v-if="content" class="article container">
          <div v-for="(item,index) in content" :is="item.component" :value="item.value" :key="`${index}_${item.component}`" />
          <template v-for="(e,i) in contentRendered"><div v-html="e.content"></div><h1 v-html="e.title"></h1></template>
      </div>
    </div>
    <Slider v-if="slider" :slider="slider" />
    <ReadMore v-if="readMore" :readMore="readMore" />
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import Slider from '@/components/Slider.vue';
import ReadMore from '@/components/ReadMore.vue';
import ContentTitle from '@/components/Content/Title.vue';
import ContentParagraph from '@/components/Content/Paragraph.vue';
import ContentList from '@/components/Content/List.vue';
import ContentSubtitle from '@/components/Content/Subtitle.vue';
import ContentImage from '@/components/Content/Image.vue';

import axios from '@/api';
import { mapGetters } from 'vuex'

export default {
  name: 'TextLayout',
  components: {
    Nav, SidebarMenu, Slider, ReadMore, ContentTitle, ContentParagraph, ContentList,
    ContentSubtitle, ContentImage
  },
  props: {
    nav: Array,
    menu: Array,
    slider: Array,
    readMore: Array,
    content: Array,
  },

  async mounted() {
    this.$store.dispatch('getLeftPageMenu', this.$router.currentRoute.name)
      .then(data => {
        return data;
      });
    this.$store.dispatch('getTopPageMenu', this.$router.currentRoute.name)
      .then(data => {
        return data;
      });
    // const result = (await axios.get(`${process.env.VUE_APP_LOCAL_URL}/wp-json/wp/v2/msa_slider/`)).data
    // result.forEach(e=>{
    //   this.contentRendered.push({
    //     content : result[0].content.rendered,
    //     title: result[0].title.rendered
    //   })
    // })
  },
  data: () => ({
    contentRendered: [],
  }),
  computed: {
    ...mapGetters([
      'getContent',
      'getTopPageMenu',
      'getLeftPageMenu',
    ])
  }
}
</script>

<style scoped>
.article {
  margin: 30px auto;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
}
.contentWrapper {
  display: flex
}
</style>