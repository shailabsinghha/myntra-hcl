<template>
    <div>
        <slot name="brand" :items="sideFilterSlot.brand"/>
        <slot name="price" :items="sideFilterSlot.price"/>
        <slot name="color" :items="sideFilterSlot.color"/>
        <slot name="discountRange" :items="sideFilterSlot.discountRange"/>
    </div>
</template>

<script>
    export default {
        name: "side_filter",
        props:{
            sideFilterSlot: Object
        },
    }
</script>

<style scoped>

</style>