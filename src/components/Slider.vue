<template>
    <section class="questions">
        <div class="container involucre-list">
            <SliderItem v-for="sliderItem in slider" :key="sliderItem.text" 
                :image="sliderItem.image"
                :text="sliderItem.text"
                :link="sliderItem.link"
            />            
        </div>
    </section>
</template>

<script>
import SliderItem from '@/components/SliderItem';
export default {
    name: "Slider",
    components: {
        SliderItem,
    },
    props: {
        slider: Array,
    }
}
</script>

<style lang="scss" scoped>
.involucre-list{
    display: flex;
    flex-wrap: wrap;
}
</style>