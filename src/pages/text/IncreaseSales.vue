<template>
  <div class="IncreaseSales">
    <TextLayout 
        :nav="nav"
        :menu="menu"
        :slider="slider"
        :content="content"
    />
  </div>
</template>

<script>

import TextLayout from '@/views/layouts/TextLayout.vue'

export default {
  name: 'IncreaseSales',
  components: {
    TextLayout
  },
  data() {
    return {
        nav: [{
            text:'Главная',
            link: '/',
        },{
            text:'Вопросы бизнеса', 
            link: '/',
        },{
            text:'Почему я должен оцифровывать компанию?',
            link: '/',
        }],
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
        content: [{
          component: 'ContentTitle',
          value: 'Как я могу увеличить продажи'
        },{
          component: 'ContentParagraph',
          value: {
            text: 'Цифровые технологии могут способствовать увеличению продаж несколькими способами. Они не только открывают новые каналы продаж : вы также можете использовать их для оптимизации обслуживания своих клиентов. Это включает в себя внешнюю презентацию с профессиональным веб-сайтом , который вы можете рекламировать через онлайн-общение . Но это также включает в себя улучшение процессов компании , которые могут сократить сроки поставки и облегчить работы по техническому обслуживанию. Цифровая обработка предложений и заказов, а также обработка электронных счетов также могут способствовать увеличению продаж.'
          }
        },]
    }
  }
}
</script>
