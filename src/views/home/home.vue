<template>
    <div>
        <Navbar class="homenavbar">
            <div class="title" slot="center">QQ购物街</div>
        </Navbar>
        <Tabcontrol  ref="tabControl1" class="tabitem tabfixed" :titles="['流行','新款','精选']" 
        @clicktab1="clicktab"
        v-show="isFixed"
        ></Tabcontrol>
        <scroll class="content" ref="scroll" :pull-up-load="true"  :probe-type="3" 
        @pulling-up="loadmore"
        @getScroll="contentscroll">
            <Swiper @swiperImageLoad="swiperImageLoad" style="margin-top: 44px;" :banners="banners"></Swiper>
            <Homerec style="margin-top: 10px;" :recommends="recommends"></Homerec>
            <Feature></Feature>
            <Tabcontrol ref="tabControl2" class="tabitem" :titles="['流行','新款','精选']" @clicktab1="clicktab"></Tabcontrol>
            <Goods class="con" :goods="showType"></Goods>
        </scroll>
        <Backtop @click.native="backtop" v-show="isShow"></Backtop>
        
    </div>
</template>

<script>
    import Navbar from '../../components/common/navbar/Navbar.vue'
    import Swiper from './Homeccpn/swiper.vue'
    import Homerec from './Homeccpn/Homerec.vue'
    import Feature from './Homeccpn/Feature.vue'
    import Tabcontrol from './Homeccpn/Tabcontrol.vue'
    import Goods from '../../components/content/goods/goods.vue'
    import scroll from '../../components/common/scroll/Scroll.vue'
    import Backtop from '../../components/content/backTop/Backtop.vue'
    // import {debounce} from '../../common/utils.js'
    import {
        getHomeMultidata,
        getHomeGoods
    } from '../../network/homereq.js'

    export default {  
        components: {
            Navbar,
            Swiper,
            Homerec,
            Feature,
            Tabcontrol,
            Goods,
            scroll,
            Backtop
        },
        data() {
            return {
                isFixed:false,
                tabOffsetTop:0,
                isShow: false,
                currentType: 'pop',
                banners: [],
                recommends: [],
                
                goods: {
                    pop: {
                        page: 0,
                        list: []
                    },
                    new: {
                        page: 0,
                        list: []
                    },
                    sell: {
                        page: 0,
                        list: []
                    }
                }
            }
        },
        created() {
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')

            
        },
        methods: {
            swiperImageLoad(){
                console.log(this.tabOffsetTop)
                console.log(this.$refs.tabControl.$el.offsetTop)
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
            },
            //事件防抖
            
            loadmore(){
                console.log(123)
                // this.getHomeGoods(this.currentType)
            },
            contentscroll(position) {
                // console.log((-position.y) > 1000)
                // if(position.y<-1000){
                //     this.isShow=true
                // }
                // else{
                //     this.isShow=false
                // }

                //判断BackTop是否显示
                this.isShow = (-position.y) > 1000
                //2.决定tabbar是否吸顶(position:fixed)
                this.isFixed = (-position.y)>this.tabOffsetTop
            },
            backtop() {
                console.log('回到顶部')
                this.$refs.scroll.scrollto(0, 0)
            },
            clicktab(index) {
                // console.log(index)
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break;
                    case 1:
                        this.currentType = 'new'
                        break;
                    case 2:
                        this.currentType = 'sell'
                        break;
                }
                this.$refs.tabControl1.currentType = index
                this.$refs.tabControl2.currentType = index
            },
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                })
            },
            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    console.log(res.data.data.list)
                    this.goods[type].list.push(...res.data.data.list)
                    this.goods[type].page +=1

                    //完成上拉加载更多
                    this.$refs.scroll.finishpullup()
                })
            }
        },
        computed: {
            showType() {
                return this.goods[this.currentType].list
            }
        },
        mounted() {
            //图片加载完成的监听事件
            // const refresh = debounce(this.$refs.scroll.refresh,50)
            // this.$bus.$on('ietmImageLoad',()=>{
                // refresh()
            // })

            //2.获取tabControl的offsetTop
            //所有的组件都有一个属性$el:用于获取组件中的元素
            
        },
    }
</script>

<style scoped>
    .homenavbar {
        height: 44px;
        line-height: 44px;
        background-color: var(--color-tint);
       
    }

    .title {
        color: white;
        text-align: center;
        font-size: 18px;
    }

    .tabitem {
        padding: 15px 0;
        background-color: white;
    }

    .content {
        height: calc(100vh - 93px);
        /* margin-top: 44px; */
        /* height: 650px; */
        overflow: hidden;
    }
    /* .fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 44px;
    } */

    .tabfixed{
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
    }
</style>