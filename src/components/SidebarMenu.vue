<template>               
    <aside class="sidebar">
        <ul class="chapters-list">            
            <SidebarMenuItem v-for="sidebarMenuItem in sidebarMenu" :key="sidebarMenuItem.href" 
                :href="sidebarMenuItem.href"
                :text="sidebarMenuItem.text"
            />
        </ul>
    </aside>
</template>

<script>
import SidebarMenuItem from "@/components/SidebarMenuItem";
export default {
    components: {
        SidebarMenuItem
    }
}
</script>

<style scoped lang="scss">

</style>