<template>
  <div class="BuildNewBusinessModels">
    <TextLayout 
        :nav="nav"
        :menu="menu"
        :content="content"
        :slider="slider"
    />
  </div>
</template>

<script>

import TextLayout from '@/views/layouts/TextLayout.vue'

export default {
  name: 'BuildNewBusinessModels',
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
            text: 'Цифровая бизнес-модель',
            link: '/',
        },{
            text: 'Примеры новых бизнес-моделей',
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
        content: [{
          component: 'ContentTitle',
          value: 'Как я могу построить новые бизнес-модели?'
        },{
          component: 'ContentParagraph',
          value: 'Цифровые технологии могут способствовать увеличению продаж несколькими способами. Они не только открывают новые каналы продаж : вы также можете использовать их для оптимизации обслуживания своих клиентов. Это включает в себя внешнюю презентацию с профессиональным веб-сайтом , который вы можете рекламировать через онлайн-общение . Но это также включает в себя улучшение процессов компании , которые могут сократить сроки поставки и облегчить работы по техническому обслуживанию. Цифровая обработка предложений и заказов, а также обработка электронных счетов также могут способствовать увеличению продаж.'
        },{
          component: 'ContentParagraph',
          value: 'Цифровые технологии могут способствовать увеличению продаж несколькими способами. Они не только открывают новые каналы продаж : вы также можете использовать их для оптимизации обслуживания своих клиентов. Это включает в себя внешнюю презентацию с профессиональным веб-сайтом , который вы можете рекламировать через онлайн-общение . Но это также включает в себя улучшение процессов компании , которые могут сократить сроки поставки и облегчить работы по техническому обслуживанию. Цифровая обработка предложений и заказов, а также обработка электронных счетов также могут способствовать увеличению продаж.'
        },{
          component: 'ContentList',
          items: [{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },]
        },{
          component: 'ContentSubtitle',
          value: 'Примеры новых бизнес-моделей'
        },{
          component: 'ContentParagraph',
          value: 'Цифровые технологии могут способствовать увеличению продаж несколькими способами. Они не только открывают новые каналы продаж : вы также можете использовать их для оптимизации обслуживания своих клиентов. Это включает в себя внешнюю презентацию с профессиональным веб-сайтом , который вы можете рекламировать через онлайн-общение . Но это также включает в себя улучшение процессов компании , которые могут сократить сроки поставки и облегчить работы по техническому обслуживанию. Цифровая обработка предложений и заказов, а также обработка электронных счетов также могут способствовать увеличению продаж.'
        },{
          component: 'ContentList',
          items: [{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },{
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
          },]
        },]
    }
  }
}
</script>
