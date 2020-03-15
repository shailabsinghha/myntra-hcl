<template>
    <div class="list_tile">
        <slot name="icon" :icon="listTileSlot.listTileInfo.icon"></slot>
        <slot name="text"></slot>

    </div>
</template>

<script>
    export default {
        props:{
          listTileSlot:Object
        },
        name: "list_tile"
    }
</script>

<style scoped>
    .list_tile{
        display: inline-block;
    }

</style>