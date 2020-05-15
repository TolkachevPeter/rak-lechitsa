<template>
  <section class="instagram">
    <div class="instagram__two-columns">
      <div class="instagram__text-column">
        <h2 class="instagram__name">Инстаграм</h2>
        <p class="instagram__main-text">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="instagram__photo-column">
        <ul class="instagram__list">
          <li
            class="instagram__item"
            v-for="photo in instagram"
            :key="photo.inst_id"
          >
            <a href="" class="instagram__link" target="_blank">
              <img
                v-bind:src="photo.inst_url"
                v-bind:alt="photo.inst_alt"
                class="instagram__card"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      instagram: [
        {
          inst_id: 1,
          inst_url:
            'https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
          inst_alt: 'Фото из инстаграма',
        },
        {
          inst_id: 2,
          inst_url:
            'https://images.unsplash.com/photo-1495653797063-114787b77b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
          inst_alt: 'Фото из инстаграма',
        },
        {
          inst_id: 3,
          inst_url:
            'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
          inst_alt: 'Фото из инстаграма',
        },
        {
          inst_id: 4,
          inst_url:
            'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2640&q=80',
          inst_alt: 'Фото из инстаграма',
        },
        {
          inst_id: 5,
          inst_url:
            'https://images.unsplash.com/photo-1581595220975-119360b1c63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
          inst_alt: 'Фото из инстаграма',
        },
        {
          inst_id: 6,
          inst_url:
            'https://images.unsplash.com/photo-1581056771392-8a90ddb76831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
          inst_alt: 'Фото из инстаграма',
        },
        {
          inst_id: 7,
          inst_url:
            'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2054&q=80',
          inst_alt: 'Фото из инстаграма',
        },
        {
          inst_id: 8,
          inst_url:
            'https://images.unsplash.com/photo-1581056771188-021d4a0f8ec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
          inst_alt: 'Фото из инстаграма',
        },
      ],
    };
  },
};
</script>

<style scoped>
.instagram {
  padding-top: 100px;
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
}
.instagram__two-columns {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto;
}
.instagram__text-column {
  margin-left: 23px;
  max-width: 630px;
}
.instagram__name {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 112%;
  text-decoration-line: underline;
  color: #000000;
}
.instagram__main-text {
  margin-top: 32px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 122%;
  color: #666666;
}
.instagram__photo-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 110px;
}

.instagram__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 195px);
  grid-template-rows: repeat(2, 195px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-bottom: 100px;
}
.instagram__card {
  width: 100%;
  height: 100%;
}
</style>
