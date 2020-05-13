<template>
  <section class="stories">
    <h2 class="stories__header">Истории неизлечимых привычек</h2>
    <div class="stories stories-list">
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </div>
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Познер</span>
        <span class="story-element__text"
          >Я боюсь акул — и, в отличии от рака, это не лечится.</span
        >
      </div>
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Александр Тарханов</span>
        <span class="story-element__text"
          >Я не могу победить свою пунктуальность в отличии от рака.</span
        >
      </div>
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </div>
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </div>
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Познер</span>
        <span class="story-element__text"
          >Я боюсь акул — и, в отличии от рака, это не лечится.</span
        >
      </div>
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Александр Тарханов</span>
        <span class="story-element__text"
          >Я не могу победить свою пунктуальность в отличии от рака.</span
        >
      </div>
      <div class="story-element">
        <img class="story-element__photo" src alt="Фото человека с историей" />
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text"
          >Я всегда читаю книги с конца, - и это не лечится, в отличие от
          рака.</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: [
        {
          story_id: 1,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 2,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          story_id: 3,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Александр Тарханов',
          story_text:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          story_id: 4,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 5,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          story_id: 6,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Александр Тарханов',
          story_text:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          story_id: 7,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 8,
          photo: '',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stories {
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  max-width: 1320px;
  padding-top: 100px;
}

.story-element {
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
  /* margin: 0 40px 0 0; */
  margin: 0;
}

.story-element__photo {
  width: 300px;
  height: 300px;
  background-color: #ededed;
  margin-bottom: 20px;
}

.stories__header {
  max-width: 413px;
  /* max-height: 72px; */
  color: #000000;
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 70px;
  padding: 0;
}

.stories-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0;
  /* padding: 0 20px 0 0px; */
  padding: 0;
}

.story-element__name {
  /* font-family: Inter; */
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
  /* font-family: Inter; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}
</style>
