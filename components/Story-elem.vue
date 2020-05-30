<template>
  <section class="stories-comp">
    <div class="stories-comp__list">
      <one-story
        v-for="(story, index) in stories"
        :key="index"
        :storyData="story"
      />
    </div>
  </section>
</template>

<script>
import Story from '@/components/Story';

export default {
  components: {
    'one-story': Story,
  },
  props: ['stories'],
  methods: {
    // goToDetail(id) {
    // console.log(id);
    // this.$router.push(`/stories/${id}`);
    // },
    // test(value) {
    //   console.log('Выводим value =', value);
    // },
  },
};
</script>

<style scoped>
.stories-comp {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.stories-comp__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 70px;
  padding-left: 0;

  padding-bottom: 70px;
}

@media (max-width: 1280px) {
  .stories__list {
    row-gap: 60px;

    padding-bottom: 60px;
  }
}
@media (max-width: 1024px) {
  .stories-comp {
  }

  .stories-comp__list {
    row-gap: 46px;

    padding-bottom: 46px;
  }
}
@media (max-width: 768px) {
  .stories-comp__list {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;

    padding-bottom: 40px;
  }
}
@media (max-width: 425px) {
  .stories-comp__list {
    display: flex;
    flex-direction: column;

    padding-bottom: 0;
  }
}
</style>
