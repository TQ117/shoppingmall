<template>
    <div class="homenavbar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
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
    .homenavbar{
        display: flex;
       
        
    }
    .left, .right{
        width: 60px;
    }
    .center{
        flex: 1;        
    }

</style>