<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="banners.length>0">
    <!-- slides -->
    <swiper-slide v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt class="banner" @load="imgLoad" />
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    banners: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          //设置轮播图自动轮播
          delay: 2000,
          disableOnInteraction: false
        },
        isLoad: false
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true
      }
    }
  }
};
</script>

<style scoped>
.banner {
  width: 100vw;
  height: 200px;
}
</style>