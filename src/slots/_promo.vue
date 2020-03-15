<template>
    <div>
        <slot name="promo" :text="promoSlot.promoSlot"></slot>
    </div>
</template>

<script>
    export default {
        props:{
            promoSlot:Object
        },
        name: "promo"
    }
</script>

<style scoped>

</style>