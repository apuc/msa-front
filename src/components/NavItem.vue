<template>
    <li class="review-navigation__page" :class="active?'active':''">
        <a class="review-navigation__link" :href="link">{{text}}</a>
    </li>
</template>

<script>
export default {
    name: "NavItem",
    props: {
        link: String,
        text: String,
        active: Boolean
    }
}
</script>

<style lang="scss" scoped>

.review-navigation{
    &__page{
        padding: 18px 10px;
        list-style: none;
        text-decoration: none;

        &.active{
            padding-bottom: 5px;
            border-bottom: 1px solid #7B7B7B;
        }
        
        &:hover{
            padding-bottom: 5px;
            border-bottom: 1px solid #7B7B7B;
            cursor: pointer;
        }
    }
    &__link{
        font: 17px/28px 'Roboto';
        font-size: medium;
        font-weight: 400;
        color: black;
        text-decoration: none;
    }
}

</style>