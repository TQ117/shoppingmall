<template>
    <div @click="itemclick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="itemColor">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                // isActive: true
               
            }
        },
        methods: {
            itemclick() {
                // console.log("itemclick")
                this.$router.push(this.path)
                // console.log(this.$route.path.indexOf())
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1    //哪个路由活跃，$route就指的是哪个路由
            },
            itemColor() {
                return this.isActive ? {
                    color: this.activeColor
                } : {}
            }
        },
    }
</script>

<style scoped>
    .tabbar div {
        flex: 1;
        text-align: center;
        margin-top: 3px;
        font-size: 12px;
    }

    img {
        width: 22px;
    }
</style>