<template>
  <section class="video">
    <div class="video-container">
      <div class="video__column">
        <h2 class="video__title">
          {{ title }}
        </h2>
        <p class="video__subtitle">
          {{ subtitle }}
        </p>
        <!-- <arr class="video__pagination" /> -->
        <div class="video__pagination">
          <div class="arr__container">
            <div class="arrow arrow_left arrow_disabled"></div>
          </div>
          <div class="arr__container">
            <div class="arrow arrow_right arrow_enabled"></div>
          </div>
        </div>
      </div>
      <div class="video__column video__for-mobile">
        <div class="arr__container arr__mobile arr_mobile_left">
          <div class="arrow arrow_left arrow_disabled"></div>
        </div>
        <div class="video__iframe">
          <play />
        </div>
        <div class="arr__container arr__mobile arr_mobile_rigth">
          <div class="arrow arrow_right arrow_enabled"></div>
        </div>
        <span class="video__channel"
          >Все видео вы можете найте на нашем
          <a
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            class="video__channel video__channel-link"
            target="_blank"
            >YouTube канале</a
          >.</span
        >
      </div>
    </div>
  </section>
</template>

<script>
// import Navarr from './ui/Nav-arr';
import PlayButton from './ui/Play-button';

export default {
  components: {
    // arr: Navarr,
    play: PlayButton,
  },
  data() {
    return {
      title: 'Истории людей, победивших рак, но не свои привычки',
      subtitle: `Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.`,
      iframeFilm: `<iframe class="video__iframe-item" src="https://www.youtube.com/embed/coOppM34GtI"
       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    };
  },
};
</script>

<style scoped>
.video {
  display: flex;
  width: 100%;
}

.video-container {
  display: grid;
  grid-template-columns: 1fr calc(65% - 40px);
  column-gap: 40px;
  padding-top: 100px;
  padding-bottom: 74px;
  width: 100%;
  position: relative;
}

.video__pagination {
  position: absolute;
  left: 0;
  bottom: 100px;
  display: flex;
  flex-direction: row;
}
/* .arr {
  display: flex;
  flex-direction: row;
} */
.arr__container {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  cursor: pointer;
}
.arr__container:hover {
  background: #f4f4f4;
}

.arr__mobile {
  display: none;
}

.arrow {
  width: 11.5px;
  height: 11.5px;
}

.arrow_left {
  transform: rotate(-45deg);
}
.arrow_right {
  transform: rotate(135deg);
}
.arrow_disabled {
  border-top: 1px solid #bfbfbf;
  border-left: 1px solid #bfbfbf;
}
.arrow_enabled {
  border-top: 1px solid #000000;
  border-left: 1px solid #000000;
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
  color: #666666;
  margin-top: 32px;
}
.video__column {
  display: flex;
  flex-direction: column;
}
.video__iframe {
  min-height: 450px;
  position: relative;
  background-image: url('../static/Pozner_1920_1080.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video__channel {
  font-family: Inter;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  margin-top: 10px;
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
  .video-container {
    padding-top: 90px;
    padding-bottom: 64px;
  }
  .video__pagination {
    bottom: 90px;
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
  .video-container {
    padding-top: 80px;
    padding-bottom: 54px;
    grid-template-columns: 1fr calc(65% - 30px);
    column-gap: 30px;
  }
  .video__pagination {
    bottom: 80px;
  }
}
@media (max-width: 768px) {
  .video-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 44px;
  }
  .video__pagination {
    display: none;
  }
  .video__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 380px;
  }
  .video__subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-top: 26px;
    max-width: 380px;
  }
  .video__for-mobile {
    /* display: grid;
    grid-template-columns: 1fr 84% 1fr;
    column-gap: 14px;
    align-items: center; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    margin-top: 60px;
  }
  .video__iframe {
    width: 84%;
    margin: 0 auto;
  }
  .arr__mobile {
    display: flex;
  }
  .arr_mobile_left {
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 2;
  }
  .arr_mobile_rigth {
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 2;
  }

  .video__channel {
    display: none;
  }
}
@media (max-width: 420px) {
  .video__iframe {
    width: 100%;
    min-height: 150px;
  }
  .arr__mobile {
    background-color: transparent;
  }
}
</style>
