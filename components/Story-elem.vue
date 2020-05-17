<template>
  <section class="stories">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <ul class="stories__list">
      <li class="story" v-for="story in stories" :key="story.id">
        <a class="story__img-container"
          ><img
            class="story__img"
            v-bind:src="story.photo_url"
            v-bind:alt="story.photo_alt"
        /></a>
        <h4 class="story__name">{{ story.name }}</h4>
        <p class="story__text">{{ story.story_text }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: [
        {
          story_id: 1,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 2,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          story_id: 3,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Александр Тарханов',
          story_text:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          story_id: 4,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 5,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          story_id: 6,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Александр Тарханов',
          story_text:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          story_id: 7,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 8,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
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
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
}

.stories__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 60px;
  padding-left: 0;
  margin-top: 70px;
}

.story {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding-bottom: 70px;
}

/* .story__img {
  width: 100%;
  height: 300px;
} */

.story__img-container {
  width: 100%;
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

.stories__title {
  max-width: 413px;
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.story__name {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
  margin-top: 20px;
}

.story__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  margin-top: 14px;
}
@media (max-width: 1280px) {
  .story {
    max-width: 265px;
    padding-bottom: 60px;
  }
  .stories {
    padding-top: 90px;
  }
  .stories__title {
    max-width: 413px;
    font-size: 28px;
    line-height: 32px;
  }
  .stories__list {
    margin-top: 60px;
  }

  /* .story__img {
    height: 265px;
  } */
}
@media (max-width: 1024px) {
  .story {
    max-width: 208px;
    padding-bottom: 46px;
  }
  .stories {
    padding-top: 80px;
  }
  .stories__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
  .stories__list {
    margin-top: 60px;
  }

  /* .story__img {
    height: 208px;
  } */
  .story__name {
    font-size: 18px;
    line-height: 22px;
    margin-top: 16px;
  }

  .story__text {
    font-size: 13px;
    line-height: 16px;
    margin-top: 16px;
  }
}
@media (max-width: 768px) {
  .story {
    max-width: 216px;
    padding-bottom: 40px;
  }

  .stories__title {
    max-width: 55%;
    margin: 0 auto;
    text-align: center;
  }
  .stories__list {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 60px;
  }

  /* .story__img {
    height: 208px;
  } */
  .story__name {
    font-size: 18px;
    line-height: 22px;
    margin-top: 16px;
  }

  .story__text {
    font-size: 13px;
    line-height: 16px;
    margin-top: 16px;
  }
}
@media (max-width: 425px) {
  .story {
    max-width: 100%;
    padding-bottom: 30px;
  }

  .stories__title {
    max-width: 100%;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .stories__list {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  /* .story__img {
    height: 290px;
  } */
}
</style>
