<template>
    <div>

        <div class="_footer_start">
            <slot name="onlineShopping" :item="footerSlot.onlineShopping"></slot>
            <slot name="links" :item="footerSlot.links"></slot>
            <slot name="appOnMobile" :item="footerSlot.appOnMobile"></slot>
            <slot name="someAdvertisement" :item="footerSlot.someAdvertisement"></slot>

        </div>

        <slot name="_footer_mid" :item="footerSlot._footer_mid" class="_footer_mid"></slot>
        <slot name="_footer_end" :item="footerSlot._footer_end" class="_footer_end"></slot>

    </div>
</template>

<script>

    export default {
        props:{
            footerSlot:Object
        },
        name: "footer_myntra"
    }
</script>

<style scoped>
    ._footer_start{
        margin:20px;
        display: inline-flex;
        width: 100%;
        height: 60%;
    }
    ._footer_mid{
        display: inline-flex;
        margin:20px;
        height: 30%;
    }
    ._footer_end{
        margin:20px;
        display: inline-flex;

        height: 10%;
    }
</style>