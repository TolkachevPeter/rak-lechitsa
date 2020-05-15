<template>
  <section class="stories">
    <div class="container">
      <h1 class="stories__title">Истории неизлечимых привычек</h1>
      <form class="stories__search">
        <input type="text" class="stories__input" />
        <form-btn class="stories__button">Поиск</form-btn>
      </form>
      <ul class="stories__container">
        <li class="stories__item" v-for="story in stories" :key="story.id">
          <img
            class="story-element__photo"
            v-bind:src="story.photo_url"
            v-bind:alt="story.photo_alt"
          />
          <h2 class="story__name">{{ story.name }}</h2>
          <p class="story__text">{{ story.story_text }}</p>
        </li>
      </ul>

      <div class="stories__nav-container">
        <ul class="stories__nav">
          <li
            class="stories__nav-item"
            :class="{ nav_item_active: item.active }"
            v-for="item in pages"
            :key="item.number"
          >
            {{ item.number }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'form-btn': Button,
  },
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
        {
          story_id: 9,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 10,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          story_id: 11,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Александр Тарханов',
          story_text:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          story_id: 12,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 13,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          story_id: 14,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Александр Тарханов',
          story_text:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          story_id: 15,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Тен',
          story_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          story_id: 16,
          photo_url:
            'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          photo_alt: 'Фото человека с историей',
          name: 'Владимир Познер',
          story_text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
      ],
      pages: [
        {
          number: '1',
          active: true,
        },
        {
          number: '2',
          active: false,
        },
        {
          number: '3',
          active: false,
        },
        {
          number: '4',
          active: false,
        },
        {
          number: '5',
          active: false,
        },
        {
          number: '6',
          active: false,
        },
        {
          number: '7',
          active: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1320px;
}
.stories {
  padding-top: 100px;
  padding-bottom: 100px;
}

.stories__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  max-width: 413px;
}
.stories__search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
  height: 52px;
}
.stories__input {
  width: 81%;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  margin-right: 20px;
  padding-left: 15px;
}
.stories__button {
}
.stories__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 70px;
  padding-left: 0;
  margin-top: 70px;
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
  color: #000000;
}
.story__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-top: 14px;
  color: #666666;
}
.stories__nav-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.stories__nav {
  display: inline-block;
  margin: 140px auto 0;
  list-style-type: none;
}
.stories__nav-item {
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  display: inline-block;
  padding-top: 20px;
  padding-left: 25px;
  margin-right: 10px;
  color: #000000;
  transition: 0.3s;
}
.stories__nav-item:hover {
  background: #f4f4f4;
}
.nav_item_active {
  background: #f4f4f4;
}
@media (max-width: 1440px) {
  .container {
    max-width: 92%;
  }
}
@media (max-width: 1280px) {
  .stories {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .stories__title {
    font-size: 28px;
    line-height: 32px;
  }
  .stories__container {
    row-gap: 60px;
  }
  .stories__search {
    height: 48px;
  }
  .story-element__photo {
    max-height: 265px;
  }
}
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
  .stories {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .stories__container {
    row-gap: 46px;
    column-gap: 30px;
  }
  .stories__title {
    font-size: 24px;
    line-height: 28px;
  }
  .stories__search {
    height: 46px;
  }
  .story-element__photo {
    max-height: 208px;
  }
  .story__name {
    font-size: 22px;
  }
  .story__text {
    font-size: 13px;
    line-height: 16px;
  }

  .stories__nav-item {
    width: 50px;
    height: 50px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    padding-top: 18px;
    padding-left: 22px;
  }
}
@media (max-width: 768px) {
}
@media (max-width: 320px) {
}
</style>
