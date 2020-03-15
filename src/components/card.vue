<template>
    <div>
            <slot name="image" :imageUrl="cardSlot.imageUrl"></slot>
            <slot name="product_name" :product_name="cardSlot.name"></slot>
            <slot name="description" :description="cardSlot.description"></slot>
            <slot name="size" :size="cardSlot.size"></slot>
            <slot name="mrp" :mrp="cardSlot.mrp"></slot>


    </div>
</template>

<script>
    export default {
        name: "card",
        props:{
            cardSlot:{
                type:Object
            }
        }
    }
</script>