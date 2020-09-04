<template>
  <article class="header__article">
    <h1 class="header__article--title">{{ description[slideIndex].title }}</h1>
    <div class="header__article--description" v-html="description[slideIndex].text"></div>
    <!-- <span class="link-detailed--description">подробнее</span> -->

    <ul class="information__list" v-if="description.links">
      <li class="information__list--page" v-for="link in description.links" :key="link.to">
        <a :href="link.to">{{ link.text }}</a>
      </li>
    </ul>

    <div v-if="description.length>0" class="header__slider">
      <div class="header__dots">
        <div class="header__dot" @click="activeSlide(index)" :class="`${index===slideIndex?'active':''}`"
             v-for="(dot,index) in description.length" :key="index"></div>
      </div>
      <div class="header__arrows">
        <img src="@/assets/images/left-arrow.svg" alt=""
             @click="slideIndex===0 ? slideIndex=description.length-1: slideIndex--">
        <img src="@/assets/images/left-arrow.svg" alt=""
             @click="slideIndex===description.length-1?slideIndex=0: slideIndex++ ">
        <!--                <div><img src="@/assets/images/right-arrow.png" alt=""></div>-->
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    description: {
      type: Array,
      default: [{
        title: 'hi',
        text: 'hm'
      }]
      // title: String,
      // text: String,
      // links: Array,
      // slider: Array
    },
  },
  mounted() {
    console.log(this.description[this.slideIndex])
  },
  data: () => ({
    slideIndex: 0
  }),
  methods: {
    activeSlide(index) {
      console.log(index)
      this.slideIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
.header__article {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 445px;
  height: 445px;
  box-sizing: border-box;
  background-color: #0059bd;
  font-size: 16px;

  &--title {
    margin: 3rem auto 0 auto;
    width: 80%;
    min-height: 100px;
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    line-height: 40px;
    font-weight: 400;
    color: #FFFFFF;
  }

  &--description {
    margin: 0 auto;
    width: 80%;
    min-height: 152px;
    padding-bottom: 52px;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    color: #FFFFFF;
  }
}

.link-detailed--description {
  padding-left: 23px;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #FFFFFF;
}

.information__list {
  height: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &--page {
    padding-right: 20px;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 30px;
    font-weight: 300;
    color: #FFFFFF
  }
}

.header__slider {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  height: 70px;
  width: 100%;
  display: flex;
}

.header__dots {
  padding: 0 22px;
  width: 55%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #aaaaaa;

  &.active {
    background-color: #0059bd;
  }
}

.header__arrows {
  width: 35%;
  display: flex;

  img:last-child {
    transform: rotate(180deg)
  }
}
</style>