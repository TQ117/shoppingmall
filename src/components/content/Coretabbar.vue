<template>
    <div>
        <Main-tabbar>
            <Tabbar-item path="/home">
                <img slot="item-icon" src="@/assets/img/tabbar/index1.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/index.png" alt="">
                <div slot="item-text">首页</div>
            </Tabbar-item>
            <Tabbar-item path="/category">
                <img slot="item-icon" src="@/assets/img/tabbar/type1.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/type.png" alt="">
                <div slot="item-text">分类</div>
            </Tabbar-item>
            <Tabbar-item path="/car">
                <img slot="item-icon" src="@/assets/img/tabbar/car1.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/car.png" alt="">
                <div slot="item-text">购物车</div>
            </Tabbar-item>
            <Tabbar-item path="/profile">
                <img slot="item-icon" src="@/assets/img/tabbar/mine1.png" alt="">
                <img slot="item-icon-active" src="@/assets/img/tabbar/mine.png" alt="">
                <div slot="item-text">我的</div>
            </Tabbar-item>
        </Main-tabbar>
    </div>
</template>

<script>
    import MainTabbar from '../common/MainTabbar/MainTabbar.vue'
    import TabbarItem from '../content/TabbarItem.vue'
    export default {
        components: {
            MainTabbar,
            TabbarItem
        }
    }
</script>

<style scoped>

</style>