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

// const initialCards = [
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
//   },
//   {
//     link:
//       'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg',
//   },
// ];

// const placeList = document.querySelector('.two-columns__photo');

// // Функции
// //Функция добавления карточки
// function addCard(placeUrl) {
//   // Переменные для функции

//   //сначала создаем контенер для карточки
//   const newCardContainer = document.createElement('div');
//   newCardContainer.className = 'place-card';
//   placeList.append(newCardContainer);

//   // задаем ссылку для карточки
//   const linkElement = document.createElement('div');
//   linkElement.className = 'place-card__image';
//   linkElement.setAttribute('style', `background-image: url(${placeUrl})`); //тут может быть ошибка
//   newCardContainer.append(linkElement); //тут тоже
// }

// // вызов функции для добавление карточек.
// for (let i = 0; i < initialCards.length; i++) {
//   addCard(initialCards[i].link);
// }
</script>

<style scoped>
.instagram {
  padding-top: 100px;
  margin: 0px auto 0;
  background: #fbfbfb;
}

.two-columns {
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
}
.two-columns__text {
  max-width: 340px;
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
  margin-left: 110px;
}

.place-card__image {
  height: 170px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  margin: 30px;
}

.place-card__image::after {
  content: '';
  display: block;
  width: 170px;
  height: 170px;
  background-color: rgba(0, 0, 0, 0.3);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
