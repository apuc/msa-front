<template>
  <div class="menu__container">
    <div class="container__inner">
      <img class="menu__image" src="@/assets/images/form-bg.png"/>
      <div>
        <div class="menu__form">
          <my-input label="Ваше Имя" v-model.trim="name"/>
          <my-input label="Ваше email или номер телефона" v-model="emailOrNumber"/>
          <my-input label="Компания которую вы представляете" v-model.trim="company"/>
          <my-input label="Чем занимается ваша компания" v-model.trim="companyBusiness"/>
          <div>
            {{question}}
            <p style="margin-bottom: 12px;">Ваш вопрос</p>
          <textarea name="" id="" cols="30" rows="10" v-model="question"></textarea>
          </div>
          <p><span>*</span>Поля обязательные для заполнения</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormMenu",
  components: {
    'my-input': () => import('@/components/Input.vue'),
  },
  data: () => ({
    name: '',
    emailOrNumber: '',
    company: '',
    companyBusiness: '',
    question: '',
  })
}
</script>

<style scoped lang="scss">
textarea{
  resize: none;
  width: 100%;
  max-width: 650px;
  outline: none;
  margin-bottom: 35px;
}
.menu {
  &__container {
    color: white;
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    top: 50vh;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 50px 50px;
    font-family: Montserrat,sans-serif !important;
  }

  &__image {
    object-fit: cover;
    height: 100vh;
    width: auto;
    max-width: 746px;
    width: 50%;
    //z-index: 3;
  }

  &__form {
    max-width: 652px;
    //width: 50%;
  }
}

.container__inner {
  display: flex;
}
</style>