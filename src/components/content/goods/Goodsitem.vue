<template>
    <div class="goods">
        <a :href="goodsitem.link">
            <img :src="goodsitem.show.img" alt="">
        </a>
        <p class="desc">{{goodsitem.title}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            goodsitem: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        border-radius: 5px;
    }

    .goods {       
        /* padding: 0 20px; */
        width: 42vw;
    }

    .desc {
        width: 42vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
    }
</style>