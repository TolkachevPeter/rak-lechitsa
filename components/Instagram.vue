<template>
  <section class="instagram">
    <div class="two-columns">
      <div class="two-columns__text">
        <h2 class="two-columns__name">Инстаграм</h2>
        <p class="two-columns__main-text">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="two-columns__photo">
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)"
        ></div>
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1495653797063-114787b77b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)"
        ></div>
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1578496781379-7dcfb995293d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)"
        ></div>
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2640&q=80)"
        ></div>
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1581595220975-119360b1c63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)"
        ></div>
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1581056771392-8a90ddb76831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)"
        ></div>
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2054&q=80)"
        ></div>
        <div
          class="place-card__image"
          style="background-image: url(https://images.unsplash.com/photo-1581056771188-021d4a0f8ec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.instagram {
  padding-top: 100px;
  margin: 0px auto 0;
  max-width: 1320px;
  width: 100%;
}

.two-columns {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto;
}
.two-columns__text {
  margin-left: 23px;
  max-width: 630px;
}
.two-columns__name {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 112%;
  text-decoration-line: underline;
  color: #000000;
}
.two-columns__main-text {
  margin-top: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 122%;
  color: #666666;
}
.two-columns__photo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 110px;
}

.place-card__image {
  height: 195px;
  background-size: cover;
  background-position: center;
  position: relative;
  /* margin-right: 30px; */
  margin-bottom: 30px;
}

.place-card__image::after {
  content: '';
  display: block;
  width: 195px;
  height: 195px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
