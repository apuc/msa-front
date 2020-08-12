<template>
    <nav class="review-menu">
        <div class="container">
            <ul class="review-navigation">
                <NavItem v-for="navItem in nav" :key="navItem.link" 
                    :link="navItem.link"
                    :text="navItem.text"
                    :active="navItem.active"
                />
            </ul>
        </div>
    </nav>
</template>

<script>
import NavItem from "@/components/NavItem";
export default {
    components: {
        NavItem
    }
}
</script>

<style scoped lang="scss">

</style>