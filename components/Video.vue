<template>
  <section class="video">
    <div class="video__column">
      <div class="video__column-aux">
        <h2 class="video__title">{{ dataObj.title }}</h2>
        <div class="video__subtitle" v-html="dataObj.text"></div>
      </div>
      <div class="arr__container arr__container_left">
        <div class="arrow-button arrow-button_next">
          <div class="arrow arrow_left"></div>
        </div>
        <div class="arrow-button arrow-button_prev">
          <div class="arrow arrow_right"></div>
        </div>
      </div>
    </div>

    <div class="video__column">
      <div class="arr__container arr__container_right">
        <div class="arrow-button arrow-button_next">
          <div class="arrow arrow_left" @click="arrowClick"></div>
        </div>
        <div class="arrow-button arrow-button_prev">
          <div class="arrow arrow_right" @click="arrowClick"></div>
        </div>
      </div>

      <div class="video__iframe-container">
        <slider :videos="videos" />
      </div>
    </div>
    <p></p>
    <p class="video__channel">
      {{ dataObj.note }}
      <a
        href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
        class="video__channel-link"
        target="_blank"
        >YouTube канале</a
      >.
    </p>
  </section>
</template>

<script>
import Slider from '@/components/Slider';

export default {
  props: {
    dataObj: {},
    videos: {},
  },
  components: {
    slider: Slider,
  },
  data() {
    return {};
  },
  methods: {
    arrowClick() {
      console.log('Кликнули по кнопке');
    },
  },
};
</script>

<style scoped>
.video__column-aux {
  display: flex;
  flex-direction: column;
}
.video__column {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.arrow-button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* background: #fbfbfb; */
}

.video {
  display: grid;
  width: 100%;
  grid-template-columns: 28% 65%;
  grid-template-rows: 1fr auto;
  column-gap: 7%;
  /* max-height: 470px; */
}

.arr__container {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: blueviolet; */
  cursor: pointer;
  top: 144px;
  position: absolute;
  z-index: 3;
}

.arr__container_left {
  display: flex;
  position: static;
  width: 80px;
  /* background: cornflowerblue; */
  /* padding-bottom: 40px; */
}

.arr__container_right {
  display: none;
  /* position: static; */
  /* width: 80px; */
  /* background: cornflowerblue; */
  /* padding-bottom: 45px; */
}

.arrow {
  width: 11.5px;
  height: 11.5px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
}
.arrow_left {
  transform: rotate(-45deg);
  z-index: 4;
}
.arrow_right {
  transform: rotate(135deg);
  z-index: 4;
}
.arrow_disabled {
  border-top: 1px solid #bfbfbf;
  border-left: 1px solid #bfbfbf;
  /* background: #fbfbfb; */
}
.arrow_enabled {
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  /* background: #fbfbfb; */
}
.video__title {
  font-family: Inter;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.video__subtitle {
  font-family: Inter;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  margin-top: 32px;
}
/* .video__column {
  display: flex;
  flex-direction: column;
} */
.video__iframe {
  /* min-height: 450px; */
  background-image: url('../static/Pozner_1920_1080.jpg');
  background-size: cover;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  align-items: center;
  object-fit: cover;
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
}
.video__channel {
  font-size: 12px;
  line-height: 16px;
  color: #666;
  margin-top: 10px;
}

.video__iframe-container {
  /* max-height: 450px; */
  /* z-index: 4; */
}

@media (max-width: 1280px) {
  .video__title {
    font-size: 28px;
    line-height: 32px;
  }
  .video__subtitle {
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
  }

  .go-left,
  .go-right {
    bottom: 90px;
  }

  .video__iframe-container {
    /* max-height: 400px; */
  }
}
@media (max-width: 1024px) {
  .video__title {
    font-size: 24px;
    line-height: 28px;
  }
  .video__subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-top: 20px;
  }

  .go-left,
  .go-right {
    bottom: 80px;
  }

  .video__iframe-container {
    /* max-height: 314px; */
  }
}
@media (max-width: 768px) {
  .arr__container.arr__container_left {
    display: none;
    position: static;
    width: 80px;
    /* background: cornflowerblue; */
    /* padding-bottom: 45px; */
  }

  .arr__container.arr__container_right {
    display: flex;
    /* position: static; */
    /* width: 80px; */
    /* background: cornflowerblue; */
    /* padding-bottom: 45px; */
  }

  .video {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-row-gap: 0;
  }

  .arr__container {
    /* width: 40px; */
    width: 98%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .video__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 380px;
    text-align: center;
  }
  .video__subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-top: 26px;
    max-width: 380px;
    padding-bottom: 60px;
  }
  .video__for-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 60px auto;
  }

  .video__column {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    /* justify-content: flex-start; */
  }

  .video__iframe-container {
    width: 100%;
    max-width: 580px;
    /* display: block; */
    /* max-width: 580px; */
    /* display: flex; */
    /* justify-content: center; */
    /* height: 300px; */
    /* max-height: 300px; */
    /* max-height: 300px; */
  }

  .video__iframe {
    width: 100%;
    padding-bottom: 56.25%;
  }
  .go-left {
    bottom: 270px;
  }
  .go-right {
    left: calc(100% - 40px);
    bottom: 270px;
  }
  .video__channel {
    width: 100%;
    max-width: 580px;
    text-align: left;
    margin: 0 auto;
    margin-top: 10px;
  }
  .video__for-mobile {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0;
  }
}

@media (max-width: 710px) {
  .arrow-button {
    background: none;
  }
  .arr__container {
    top: 120px;
  }
  .video__subtitle {
    padding-bottom: 40px;
  }
}

@media (max-width: 510px) {
  .arr__container {
    top: 90px;
  }
}

@media (max-width: 320px) {
  .arr__container {
    top: 60px;
  }

  .video {
    grid-row-gap: 0;
  }

  .video__title {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }

  .video__iframe-container {
    width: 100%;
    /* max-width: 580px;*/
    /* max-height: 290px; */
  }

  .video__iframe {
    width: 100%;
    padding-bottom: 56.25%;
    /* min-height: 300px; */
  }

  .video__for-mobile {
    width: 100%;
    margin: 40px auto;
  }
  .go-left {
    bottom: 145px;
    background-color: transparent;
  }
  .go-right {
    left: calc(100% - 40px);
    bottom: 145px;
    background-color: transparent;
  }
  .video__channel {
    display: none;
  }

  .video__for-mobile {
    margin-bottom: 0;
  }
}
</style>
