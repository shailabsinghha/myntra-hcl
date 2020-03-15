<template>
    <div>
        <slot name="banner" :text="bannerSlot.bannerInfo.value"></slot>
    </div>
</template>

<script>
    export default {
        props:{
          bannerSlot:Object
        },
        name: "banner"
    }
</script>

<style scoped>

</style>