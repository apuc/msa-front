<template>
  <div class="CPS">
    <TextLayout 
        :nav="nav"
        :menu="menu"
        :readMore="readMore"
    />
  </div>
</template>

<script>

import TextLayout from '@/views/layouts/TextLayout.vue'

export default {
  name: 'CPS',
  components: {
    TextLayout
  },
  data() {
    return {
        nav: [{
            text:'Главная',
            link: '/',
        },{
            text:'Обзор', 
            link: '/',
        },{
            text:'CPS',
            link: '/',
        }],
        menu: [{
            text: 'Введение',
            link: '/',
        },{
            text: 'Элементы стратегии CPS',
            link: '/',
        }, {
            text: 'Путь в индустрию 4.0',
            link: '/',
        },],
        readMore: [
          [
            {text: 'Реализация и потенциал', link: '/'},
            {text: 'I4 часть сетевого мира', link: '/'},
            {text: 'CPS', link: '/'},
          ],[
            {text: 'Smart factory', link: '/'},
            {text: 'Примеры внедрения', link: '/'},
          ]
        ],
    }
  }
}
</script>
