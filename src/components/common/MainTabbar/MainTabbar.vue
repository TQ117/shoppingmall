<template>
    <div class="tabbar flex">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .tabbar {
        height: 49px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f6f6f6;
        box-shadow: 0px -2px 1px rgba(66, 39, 39, 0.1);
        z-index: 999;
    }

    
</style>