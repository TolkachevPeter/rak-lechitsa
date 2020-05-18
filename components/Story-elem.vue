<template>
  <section class="stories-comp">
    <h2
      class="stories-comp__title"
      :class="{ 'stories-comp__title_isActive': showTitle }"
    >
      Истории неизлечимых привычек
    </h2>
    <div class="stories-comp__list">
      <one-story v-for="story in stories" :key="story.id" :storyData="story" />
    </div>
  </section>
</template>

<script>
import Story from '~/components/Story';

export default {
  components: {
    'one-story': Story,
  },
  props: ['stories', 'showTitle'],
};
</script>

<style scoped>
.stories-comp {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  /* padding-top: 100px; */
}

.stories-comp__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 70px;
  padding-left: 0;
  margin-top: 70px;
  padding-bottom: 70px;
}

.stories-comp__title {
  display: none;
  max-width: 413px;
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.stories-comp__title_isActive {
  display: block;
}

@media (max-width: 1280px) {
  .stories__list {
    row-gap: 60px;
    margin-top: 60px;
    padding-bottom: 60px;
  }

  .stories-comp {
    padding-top: 90px;
  }
  .stories-comp__title {
    max-width: 413px;
    font-size: 28px;
    line-height: 32px;
  }
}
@media (max-width: 1024px) {
  .stories-comp {
    padding-top: 80px;
  }
  .stories-comp__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }

  .stories-comp__list {
    row-gap: 46px;
    margin-top: 60px;
    padding-bottom: 46px;
  }
}
@media (max-width: 768px) {
  .stories-comp__title {
    max-width: 55%;
    margin: 0 auto;
    text-align: center;
  }
  .stories-comp__list {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 60px;
    padding-bottom: 40px;
  }
}
@media (max-width: 425px) {
  .stories-comp__title {
    max-width: 100%;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .stories-comp__list {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    padding-bottom: 0;
  }
}
</style>
