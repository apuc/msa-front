<template>        
    <aside class="sidebar">
        <ul class="chapters-list">            
            <SidebarMenuItem v-for="sidebarMenuItem in menu" :key="`${sidebarMenuItem.id}_${sidebarMenuItem.slug}`" 
                :id="sidebarMenuItem.id"
                :slug="sidebarMenuItem.slug"
                :name="sidebarMenuItem.name"
                :active="sidebarMenuItem.active"
                @setActive="setActive(sidebarMenuItem.id)"
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
    },
    methods: {
        setActive(id) {
            this.menu.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        active: true
                    }
                }

                return item;
            })
        }
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