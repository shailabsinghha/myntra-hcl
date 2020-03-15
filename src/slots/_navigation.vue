<template>
    <div>
        <slot name="headerInfo" :text="navigationSlot.navigationInfo.category"></slot>
        <slot name="navigationInfo" :text="navigationSlot.navigationInfo.url"></slot>
    </div>
</template>

<script>
    export default {
        props:{
          navigationSlot:Object
        },
        name: "_navigation"
    }
</script>

<style scoped>

</style>