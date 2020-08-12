<template>
    <section class="questions" id="section-1">
        <div class="container involucre-list">
            <SliderItem v-for="sliderItem in slider" :key="sliderItem.text" 
                :image="sliderItem.image"
                :text="sliderItem.text"
            />            
        </div>
    </section>
</template>