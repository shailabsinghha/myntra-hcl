<template>
    <div>
            <slot name="productListing" :products="productSlotProp.products"></slot>
    </div>
</template>

<script>
    import Card from "../components/card";
    export default {
        name: "product_grid",
        components: {Card},
        props:{
            productSlotProp: Object
        }
    }
</script>

<style scoped>

</style>