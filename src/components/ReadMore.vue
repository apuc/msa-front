<template>
    <section class="additionally container">
        <h4 class="content-interpretation__definition stages">Читайте дальше</h4>
        <ReadMoreList v-for="(list,index) in readMore" :key="index" :list="list" />
    </section>
</template>

<script>
import ReadMoreList from "@/components/ReadMoreList";
export default {
    name: 'ReadMore',
    components: {
        ReadMoreList
    },
    props: {
        readMore: Array
    },
}
</script>

<style lang="scss" scoped>
.additionally{
    padding-top: 75px;
    display: flex;
    
    &-list{
        padding-top: 3px;
        margin-left: 24px;
    }
}
</style>