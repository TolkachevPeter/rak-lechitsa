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
        <arr class="video__pagination" />
      </div>
      <div class="video__column">
        <div class="video__iframe">
          <play />
        </div>
        <span class="video__channel"
          >Все видео вы можете найте на нашем
          <a href="" class="video__channel video__channel-link"
            >YouTube канале</a
          >.</span
        >
      </div>
    </div>
  </section>
</template>

<script>
import Navarr from './ui/Nav-arr';
import PlayButton from './ui/Play-button';

export default {
  components: {
    arr: Navarr,
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
  max-width: 1320px;
  margin: 0 auto;
}

.video__pagination {
  margin-top: 150px;
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

.video__channel-link {
}
</style>
