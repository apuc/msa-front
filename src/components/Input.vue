<template>
  <div class="input-container">
    <span class="label">{{label}}</span>
    <input type="text" :value="value" @change="input" required="">
<!--    <label style="color: red;">{{ label }}<span class="required">{{ required }}</span></label>-->
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      default: 'default'
    },
    required:{
      type: String,
      default: '',
    },
  },
  data:()=>({
    value: '',
  }),
  methods: {
    input(e) {
      // this.$v.value.$touch()
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.label{
  font-family:'Montserrat','Montserrat-Medium', sans-serif;
  line-height: 24px;
}
.input-container label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: black;
  pointer-event: none;
  transition: all 0.5s ease;
}
.input-container{
  margin-bottom: 44px;
  min-width:200px;
  max-width: 650px;
}
.input-container input {
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding:0;
  font-size: 16px;
  color: white;
  font-family: Montserrat,sans-serif;
  height: 36px;
}
.input-container input:focus{
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  }
.input-container input:focus ~ label,
.input-container input:valid ~ label{
  top: 0;
  font-size: 12px;
  color: red;
  }
</style>