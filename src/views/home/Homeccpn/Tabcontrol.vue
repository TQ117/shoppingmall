<template>
    <div class="flex tac">
        <div @click="clickItem(index)" :class='{active:index===currentIndex}' class="flex1 " v-for="(item,index) in titles" :key="index">
            <span class="itemtitle" @click="clicktab(index)">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            titles: Array,
            default: {
                return: []
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            clickItem(index){
                this.currentIndex = index
            },
            clicktab(index){
                // console.log(index)
                this.$emit('clicktab1',index)
            }
        },
    }
</script>

<style scoped>
    .active{
        color: var(--color-height-text);
        
       
    }
    .active span{
        border-bottom: solid 2px var(--color-height-text);
        padding: 0 5px 9px;
    }

</style>