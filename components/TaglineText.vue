<template>
  <div :class="['tagline', extraClass]">
    <p class="tagline__text">
      <span v-html="text"></span>
    </p>
    <p class="tagline__hashtag">
      <span v-html="hashtext"></span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    hashtext: String,
    extraClass: String,
  },
};
</script>

<style scoped>
.tagline2rows {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 129px;
}

.tagline {
  min-height: 86px;
  background: #613a93;
  border: 1px solid #000;
  box-sizing: border-box;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}
.tagline__hashtag {
  /* display: flex; */
  padding: 0;
  margin: 0;
  font-weight: 800;
  font-size: 40px;
  line-height: 46px;
  padding-left: 7px;
}

.tagline__text {
  /* display: flex; */
  padding: 0;
  margin: 0;
}

@media (max-width: 1280px) {
  .tagline {
    font-size: 28px;
    line-height: 46px;
  }
}
@media (max-width: 1024px) {
  .tagline {
    min-height: 80px;
    font-size: 24px;
    line-height: 40px;
  }

  .tagline__hashtag {
    font-weight: 800;
    font-size: 34px;
    line-height: 40px;
  }
  .tagline2rows {
    display: flex;
    flex-direction: column;
    justify-items: center;
    height: 117px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 22px;
    line-height: 36px;
    height: 100px;
  }

  .tagline__hashtag {
    font-size: 32px;
    line-height: 36px;
  }
  .tagline2rows {
    display: flex;
    flex-direction: column;
    justify-items: center;
    height: 100px;
  }
}

@media (max-width: 600px) {
  .tagline {
    /* display: block; */
    flex-direction: column;
    justify-items: center;
    font-size: 16px;
    line-height: 18px;
    height: 80px;
    text-align: center;
  }
  .tagline__text {
    width: 100%;
    /* padding-top: 18px; */
  }

  .tagline__hashtag {
    font-size: 22px;
    line-height: 24px;
    width: 100%;
    padding: 0;
  }
}
</style>
