<template>
  <div class="slider" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide"> -->
      <div class="swiper-slide" v-for="(video, index) in videos" :key="index">
        <videoiframe :url="video.url" />
      </div>
      <!-- </div> -->
    </div>
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import VideoIframe from '@/components/VideoIframe';
export default {
  components: {
    videoiframe: VideoIframe,
  },
  props: ['videos'],
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper);
    this.mySwiper.slideTo(3, 1000, false);
  },

  //   computed: {
  //   onSlideChange() {
  // this.mySwiper.on('slideChange', function() {
  //   console.log('slide changed');
  // });
  // console.log('slide changed');
  //   },
  //   },

  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',

          nextEl: '.arrow-button_next',
          prevEl: '.arrow-button_prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  width: 100% !important;
}
</style>
