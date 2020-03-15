<template>
    <div >
        <slot name="logo" :item="headerSlot.headerInfo.logo"></slot>
        <slot  name="left_items" :items="headerSlot.headerInfo.left_items" ></slot>
        <slot name="search_bar" :item="headerSlot.headerInfo.search_bar"></slot>
        <slot name="right_items" :items="headerSlot.headerInfo.right_items"></slot>
    </div>
</template>

<script>

    export default {
        props: {
            headerSlot:{
                type:Object,
                required:true
            }
        },
        name: "header_myntra"
    }
</script>

<style scoped>

</style>