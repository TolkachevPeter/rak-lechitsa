<template>
  <section class="video">
    <div class="video__mobile">
      <div class="video__mobile-aux">
        <h2 class="video__title">{{ title }}</h2>
        <p class="video__subtitle">{{ subtitle }}</p>
      </div>
      <div class="arr__container arr__container_left">
        <div class="arrow-button">
          <div class="arrow arrow_left arrow_disabled"></div>
        </div>
        <div class="arrow-button">
          <div class="arrow arrow_right arrow_enabled"></div>
        </div>
      </div>
    </div>

    <div class="video__mobile">
      <div class="arr__container arr__container_right">
        <div class="arrow-button">
          <div class="arrow arrow_left arrow_disabled"></div>
        </div>
        <div class="arrow-button">
          <div class="arrow arrow_right arrow_enabled"></div>
        </div>
      </div>

      <div class="video__iframe-container">
        <div class="video__iframe">
          <!-- <play /> -->
        </div>
      </div>
      <!-- <p>Какой-то другой текст будет здесь</p> -->

      <p class="video__channel">
        Все видео вы можете найте на нашем
        <a
          href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          class="video__channel-link"
          target="_blank"
          >YouTube канале</a
        >.
      </p>
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
.video__mobile-aux {
  display: flex;
  flex-direction: column;
}
.video__mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* position: relative; */

  justify-content: space-between;
}

.arrow-button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fbfbfb;
}

.video {
  display: grid;
  width: 100%;
  grid-template-columns: 28% 65%;
  column-gap: 7%;
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
  padding-bottom: 40px;
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
  /* background: #fbfbfb; */
}
.arrow_enabled {
  border-top: 1px solid #000000;
  border-left: 1px solid #000000;
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
  color: #666666;
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

  .go-left,
  .go-right {
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

  .go-left,
  .go-right {
    bottom: 80px;
  }
}
@media (max-width: 768px) {
  .arr__container.arr__container_left {
    display: none;
    position: static;
    width: 80px;
    /* background: cornflowerblue; */
    padding-bottom: 45px;
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
    row-gap: 60px;
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
  }
  .video__for-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 60px auto;
  }

  .video__mobile {
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
    display: flex;
    justify-content: center;
    /* max-height: 300px; */
  }

  .video__iframe {
    width: 100%;
    padding-bottom: 56.25%;
    /* min-height: 300px; */
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
    row-gap: 40px;
  }

  .video__title {
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }

  .video__iframe-container {
    width: 100%;
    /* max-width: 580px;
    max-height: 300px; */
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
