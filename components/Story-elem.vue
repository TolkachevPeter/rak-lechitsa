<template>
  <section class="stories">
    <h2 class="stories__header">Истории неизлечимых привычек</h2>
    <ul class="stories stories-list">
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </li>
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Познер</span>
        <span class="story-element__text"
          >Я боюсь акул — и, в отличии от рака, это не лечится.</span
        >
      </li>
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Александр Тарханов</span>
        <span class="story-element__text"
          >Я не могу победить свою пунктуальность в отличии от рака.</span
        >
      </li>
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </li>
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </li>
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Познер</span>
        <span class="story-element__text"
          >Я боюсь акул — и, в отличии от рака, это не лечится.</span
        >
      </li>
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Александр Тарханов</span>
        <span class="story-element__text"
          >Я не могу победить свою пунктуальность в отличии от рака.</span
        >
      </li>
      <li class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.stories {
  margin: 0;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  max-width: 1440px;
}

.story-element {
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
  margin: 0 40px 0 0;
}

.story-element__photo {
  width: 300px;
  height: 300px;
  background-color: #ededed;
  margin-bottom: 20px;
}

.stories__header {
  max-width: 413px;
  max-height: 72px;
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 70px;
  padding: 0 60px;
}

.stories-list {
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0 20px 0 60px;
}

.story-element__name {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 14px;
}

.story-element__text {
  width: 250px;
  height: 36px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}
</style>
