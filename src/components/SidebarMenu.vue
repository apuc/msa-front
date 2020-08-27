<template>        
    <aside class="sidebar">
        <ul class="chapters-list">            
            <SidebarMenuItem v-for="sidebarMenuItem in menu" :key="sidebarMenuItem.href" 
                :href="sidebarMenuItem.href"
                :text="sidebarMenuItem.text"
            />
        </ul>
    </aside>
</template>

<script>
import SidebarMenuItem from "@/components/SidebarMenuItem";
export default {
    name: 'SidebarMenu',
    components: {
        SidebarMenuItem
    },
    props: {
        menu: Array
    }
}
</script>

<style scoped>
.sidebar{
    max-width: 250px;
    padding-top: 129px;
    padding-bottom: 69px;
    border-right: 1px solid #E8E8E8;
}
</style>