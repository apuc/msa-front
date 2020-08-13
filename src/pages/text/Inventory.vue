<template>
  <div class="Inventory">
    <TextLayout 
        :nav="nav"
        :menu="menu"
        :slider="slider"
    />
  </div>
</template>

<script>

import TextLayout from '@/views/layouts/TextLayout.vue'

export default {
  name: 'Inventory',
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
            text: 'Что должно быть достигнуто?',
            link: '/',
        },{
            text: 'На какие вопросы нужно ответить?',
            link: '/',
        }, {
            text: 'Контрольный список',
            link: '/',
        },],
        slider: [{
          image: '',
          text: 'Почему я должен оцифровывать компанию?',
          link: '/'
        },{
          image: '',
          text: 'Как мне создать план по цифровизации?',
          link: '/'
        },{
          image: '',
          text: 'Какие цифровые инструменты полезны?',
          link: '/'
        },],
    }
  }
}
</script>
