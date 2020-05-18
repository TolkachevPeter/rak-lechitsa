<template>
  <div class="story">
    <a class="story__img-container"
      ><img
        class="story__img"
        v-bind:src="storyData.photo_url"
        v-bind:alt="storyData.photo_alt"
    /></a>
    <h4 class="story__name">{{ storyData.name }}</h4>
    <p class="story__text">{{ storyData.story_text }}</p>
  </div>
</template>

<script>
export default {
  props: ['storyData'],
};
</script>

<style scoped>
.story {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  /* padding-bottom: 70px; */
}

.story__img-container {
  width: 100%;
  position: relative;
}
.story__img-container:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.story__img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.story__name {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
  margin-top: 20px;
}

.story__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  margin-top: 14px;
}

@media (max-width: 1280px) {
  .story {
    max-width: 265px;
    /* padding-bottom: 60px; */
  }

  .stories__title {
    max-width: 413px;
    font-size: 28px;
    line-height: 32px;
  }
  .stories__list {
    margin-top: 60px;
  }
}
@media (max-width: 1024px) {
  .story {
    max-width: 208px;
    /* padding-bottom: 46px; */
  }

  .story__name {
    font-size: 18px;
    line-height: 22px;
    margin-top: 16px;
  }

  .story__text {
    font-size: 13px;
    line-height: 16px;
    margin-top: 16px;
  }
}
@media (max-width: 768px) {
  .story {
    max-width: 216px;
    /* padding-bottom: 40px; */
  }

  .story__name {
    font-size: 18px;
    line-height: 22px;
    margin-top: 16px;
  }

  .story__text {
    font-size: 13px;
    line-height: 16px;
    margin-top: 16px;
  }
}
@media (max-width: 425px) {
  .story {
    max-width: 100%;
    /* padding-bottom: 0; */
  }
}
</style>
