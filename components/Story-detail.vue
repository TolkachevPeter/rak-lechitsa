<template>
  <div>
    <section class="story__headings" :currentStory="currentStory">
      <div class="story__img-container">
        <img
          class="story__img"
          @click="test"
          :src="currentStory['photo_url']"
          :alt="currentStory['name']"
        />
      </div>
      <div class="story__data">
        <h1 class="story__title">
          <span class="story__author">{{ currentStory['name'] }}:</span>
          {{ currentStory['story_text'] }}
        </h1>
        <div class="story__headings-footer">
          <p class="story__share" @click="$emit('click')">Поделитесь ↗</p>
          <span class="story__date">{{ currentStory['story__date'] }}</span>
        </div>
      </div>
    </section>
    <main class="story__content">
      <div
        class="story__material"
        v-html="currentStory['story__textdetail']"
      ></div>
      <p class="story__share-social" @click="$emit('click')">
        Поделитесь этой статьей в своих социальных сетях ↗
      </p>
    </main>
  </div>
</template>

<script>
export default {
  props: ['currentStory'],
  methods: {
    test() {
      console.log(this.currentStory);
    },
  },
};
</script>

<style scoped>
.story__material /deep/ .plain-text {
  padding-bottom: 35px;
}
.story__material /deep/ .plain-text:last-child {
  padding-bottom: 0;
}

.story__material /deep/ .plain-text_bold {
  font-weight: 600;
}

.story__headings {
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.story__img-container {
  min-width: 44%;
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

.story__data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 60px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 30px 0;
}
.story__title {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
  color: #000;
}
.story__author {
  font-weight: 500;
}
.story__headings-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.story__share {
  text-decoration: none;
  color: #121212;
  cursor: pointer;
}
.story__date {
  text-align: right;
}
.story__content {
  margin: 130px auto;
  max-width: 59%;
}
.story__material {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000;
}
.story__share-social {
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #121212;
  text-decoration: none;
  min-height: 82px;
  margin: 60px auto;
  cursor: pointer;
}
.stories__container {
  margin-top: 160px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  padding-left: 0;
}
.stories__item {
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
.story-element__photo {
  width: 100%;
  max-height: 300px;
  cursor: pointer;
}
.story__name {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-top: 20px;
  color: #000;
}
.story__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-top: 14px;
  color: #666;
}
.share-button {
  margin: 70px auto 100px;
}

@media (max-width: 1280px) {
  /* .story__img {
    height: 518px;
  } */
  .stories__container {
    row-gap: 60px;
  }
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }
  .story__material {
    font-size: 20px;
    line-height: 28px;
  }
  .story__content {
    margin: 120px auto;
    max-width: 61%;
  }

  /* .story-element__photo {
    max-height: 265px;
  } */
}
@media (max-width: 1024px) {
  /* .story__img {
    height: 407px;
  } */
  .story__title {
    font-size: 30px;
    line-height: 38px;
  }
  .story__headings-footer {
    font-size: 16px;
  }
  .story__content {
    margin: 90px auto;
    max-width: 69%;
  }
  .story__share-social {
    margin: 46px auto;
  }
  .stories__container {
    row-gap: 46px;
    column-gap: 30px;
  }

  /* .story-element__photo {
    max-height: 208px;
  } */
  .story__name {
    font-size: 22px;
  }
  .story__text {
    font-size: 13px;
    line-height: 16px;
  }
}
@media (max-width: 768px) {
  .story__headings {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    flex-direction: column;
    min-height: 673px;
    position: relative;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .story__img-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 420px;
    width: 100%;
    max-width: 420px;
  }
  .story__data {
    border-top: none;
    border-bottom: none;
    padding: 0;
    margin-left: 0;
  }
  .story__title {
    text-align: center;
    padding-bottom: 60px;

    font-size: 30px;
    line-height: 38px;
  }
  .story__material {
    font-size: 18px;
    line-height: 27px;
  }
  .story__content {
    max-width: 100%;
    margin: 100px auto;
  }
  .story__headings-footer {
    margin-top: 540px;
  }

  .stories__container {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 60px;
  }
  /* .story-element__photo {
    max-height: 216px;
  } */
  .story__name {
    font-size: 18px;
    line-height: 22px;
  }
  .stories__item:last-child {
    display: none;
  }
}
@media (max-width: 320px) {
  .story__headings {
    min-height: 470px;
  }
  .story__title {
    font-size: 18px;
    line-height: 21px;
  }
  .story__img {
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    height: 290px;
    width: 100%;
  }
  .story__headings-footer {
    margin-top: 350px;
    font-size: 13px;
    line-height: 16px;
  }
  .story__content {
    margin: 40px auto;
  }
  .story__material {
    font-size: 13px;
    line-height: 16px;
  }
  .story__share-social {
    font-size: 13px;
    line-height: 16px;
    padding: 0 40px;
  }
  .stories__container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  /* .story-element__photo {
    max-height: 290px;
  } */
  .stories__item {
    max-width: 100%;
    margin-bottom: 30px;
  }
  .share-button {
    margin-top: 40px;
  }

  .story__img-container {
    width: 100%;
    max-width: 290px;
    /* position: relative; */
  }
}
</style>
