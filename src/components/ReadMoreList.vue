<template>
    <ul class="additionally-list">
        <ReadMoreItem v-for="item in list" :key="item.link" />
    </ul>
</template>

<script>
import ReadMoreItem from "@/components/ReadMoreItem";
export default {
    name: 'ReadMoreList',
    components: {
        ReadMoreItem
    },
    props: {
        list: Array
    },
}
</script>