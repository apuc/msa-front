<template>
  <div class="Example">
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
  name: 'Example',
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
            text:'Industry 4.0',
            link: '/',
        }],
        menu: [{
            text: 'Гибкое производство',
            link: '/',
        },{
            text: 'Система единичного заказа',
            link: '/',
        }, {
            text: 'Удалённое управление',
            link: '/',
        },{
            text: 'Смена поставщика',
            link: '/',
        }],
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
