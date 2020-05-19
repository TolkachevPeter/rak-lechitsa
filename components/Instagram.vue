<template>
  <section class="instagram">
    <div class="instagram__two-columns">
      <div class="instagram__text-column">
        <nuxt-link :to="mainInstLink" class="link">
          <h2 class="instagram__title">Инстаграм</h2>
        </nuxt-link>
        <p class="instagram__main-text">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="instagram__photo-column">
        <div
          class="instagram__item"
          v-for="photo in instagramData"
          :key="photo.inst_id"
        >
          <nuxt-link :to="photo.inst_post_url">
            <div class="instagram__img-container">
              <img
                v-bind:src="photo.inst_url"
                v-bind:alt="photo.inst_alt"
                class="instagram__img"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['instagramData', 'mainInstLink'],
};
</script>

<style scoped>
.link {
  text-decoration: none;
  display: flex;
}
.instagram__img-container {
  width: 100%;
  position: relative;
}
.instagram__img-container:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.instagram__img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instagram {
  font-family: 'Inter';
  font-style: normal;
  line-height: 22px;
  margin: 0 auto;
  /* max-width: 1320px; */
  width: 100%;
}
.instagram__two-columns {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 340px 1fr;
  grid-column-gap: 110px;

  max-width: 100%;
  /* margin: 100px auto; */
}
.instagram__text-column {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  /* margin-left: 23px; */
  max-width: 630px;
}
.instagram__title {
  display: flex;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  align-self: flex-start;
  /* text-decoration-line: underline; */
  border-bottom: 3px solid currentColor;
  color: #000;
}
.instagram__main-text {
  display: flex;
  margin-top: 32px;
  font-size: 16px;
  line-height: 20px;
  color: #666666;
}
.instagram__photo-column {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.instagram__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding-left: 0;
}
.instagram__card {
  width: 100%;
  height: 100%;
  max-height: 171px;
  max-width: 171px;
  background-color: #613a93;
  color: #ffffff;
  object-fit: cover;
}

@media screen and (max-width: 1280px) {
  .instagram__photo-column {
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-column-gap: 27px;
    grid-row-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__title {
    font-size: 24px;
    line-height: 28px;
  }
  .instagram__main-text {
    font-size: 13px;
  }

  .instagram__two-columns {
    grid-column-gap: 60px;
  }

  .instagram__photo-column {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .instagram__photo-column {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .instagram__two-columns {
    grid-template-columns: 1fr;
  }

  .instagram__title {
    align-self: center;

    line-height: 28px;
    border-bottom: 2px solid currentColor;
  }
  .instagram__main-text {
    align-self: center;
    max-width: 380px;
    margin-top: 26px;
    padding-bottom: 60px;
  }
}

@media screen and (max-width: 320px) {
  .instagram__photo-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  .instagram__title {
    font-size: 18px;
    text-align: left;
    line-height: 21px;
    border-bottom: 2px solid currentColor;
  }
  .instagram__main-text {
    width: 290px;
    margin-top: 16px;
    padding-bottom: 40px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
