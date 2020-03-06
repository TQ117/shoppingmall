<template>
    <div class="wrapper" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }

        },
        data() {
            return {
                scroll: ""
            }
        },
        methods: {
            scrollto(x, y, time = 500) {
                this.scroll && this.scroll.scrollTo(x, y, time)
            },
            refresh(){
                this.scroll && this.scroll.refresh()
            },
            finishpullup(){
                this.scroll && this.scroll.finishpullup()
            }
        },
        mounted() {
            //1.创建scroll对象
            this.scroll = new BScroll(this.$refs.scroll, {
                click: true, //不添加此项，scroll内的所有点击事件都不会触发
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            //2.监听滚的位置
            if (this.probeType === 2 || this.probeType === 3) {
                this.scroll.on('scroll', (position) => {
                    // console.log(position)
                    this.$emit('getScroll', position)
                })
            }
            //3.监听scroll滚动到底部
            if (this.pullUpLoad) {
                this.scroll.on('pullingUp', () => {
                    console.log('监听滚到底部')
                    this.$emit('pullingUp')
                })
            }

        },
    }
</script>

<style scoped>

</style>