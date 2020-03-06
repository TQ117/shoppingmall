<template>
    <div class="goods">
        <Goodsitem v-for="(item,index) in goods" :goodsitem="item" :key="index"></Goodsitem>
    </div>
</template>

<script>
    import Goodsitem from './Goodsitem.vue'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Goodsitem
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        /* width: 100vw; */
    }

</style>