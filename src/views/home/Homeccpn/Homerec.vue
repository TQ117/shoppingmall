<template>
    <div class="flex">
        <div class="flex1" style="text-align: center;" v-for="(item,i) in recommends" :key="i">
            <a :href="item.link">
                <img style="width: 70px;height: 70px;" :src="item.image" alt="" srcset="">
                <div class="title">{{item.title}}</div>
            </a>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            recommends: Array
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .title {
        margin-top: 15px;
    }

    .line {
        border: solid 3px #eee;
        margin-top: 15px;
    }
</style>