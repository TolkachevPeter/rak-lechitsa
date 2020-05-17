<template>
  <container>
    <section class="story__headings">
      <img class="story__img" :src="story_url" :alt="story__author" />
      <div class="story__data">
        <h1 class="story__title">
          <span class="story__author">{{ story__author }}: </span
          >{{ story__intro }}
        </h1>
        <div class="story__headings-footer">
          <a href="" class="story__share">Поделитесь ↗</a>
          <span class="story__date">{{ story__date }}</span>
        </div>
      </div>
    </section>
    <main class="story__content">
      <p class="story__material">{{ story__text }}</p>
      <a href="" class="story__share-social"
        >Поделитесь этой статьей в своих социальных сетях ↗</a
      >
    </main>

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
    <share-button class="share-button">Больше статей</share-button>
  </container>
</template>

<script>
import LinkButton from '@/components/ui/Link-button';
import Container from '@/components/Container';

export default {
  components: {
    'share-button': LinkButton,
    container: Container,
  },
  data() {
    return {
      story__text: `Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.

У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны особо — я сам чувствую, опаздываю куда-то или нет, отстаю
от нужного графика или опережаю. Вот такие встроенные внутренние часы! Будильник мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в армии, за 45 секунд.  «В футболе если команда опоздала на 15 минут, ей засчитывается поражение».

Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю, что могу попасть по дороге в пробку, то не еду на машине.
В аэропорт приезжаю задолго до начала регистрации. Лучше подожду
и кофе попью, чем опоздаю!

Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница — нет. Ну, я какое-то время подождал
ее и ушел. Потом она спрашивала: «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15 минут, ей засчитывается поражение». Экзамен мне все-таки поставили! Сейчас если кто-то
из футболистов моей команды опаздывает — начинаю злиться, могу
и прикрикнуть потом. А если кто-то опоздал на тренировку перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда: «Значит, точно проиграем». Такая болезненная пунктуальность уже
не лечится. В отличие от рака.

«Сейчас если кто-то из футболистов моей команды опаздывает — начинаю злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда: «Значит, точно проиграем». Такая болезненная пунктуальность уже не лечится».`,
      story__date: `20 апреля 2018`,
      story__author: `Александр Тарханов`,
      story__intro: `«Я не могу победить свою пунктуальность в отличии от рака»`,
      story_url:
        'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
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
      ],
    };
  },
};
</script>

<style scoped>
.story__headings {
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.story__img {
  min-width: 44%;
  height: 580px;
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
  color: #000000;
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
  color: #000000;
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
.share-button {
  margin: 70px auto 100px;
}

@media (max-width: 1280px) {
  .story__img {
    height: 518px;
  }
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

  .story-element__photo {
    max-height: 265px;
  }
}
@media (max-width: 1024px) {
  .story__img {
    height: 407px;
  }
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

  .story__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 420px;
    width: 420px;
  }
  .story__data {
    border-top: none;
    border-bottom: none;
    padding: 0;
    margin-left: 0;
  }
  .story__title {
    text-align: center;
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
  .story-element__photo {
    max-height: 216px;
  }
  .story__name {
    font-size: 18px;
    line-height: 22px;
  }
  .stories__item:last-child {
    display: none;
  }
}
@media (max-width: 425px) {
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
  .story-element__photo {
    max-height: 290px;
  }
  .stories__item {
    max-width: 100%;
    margin-bottom: 30px;
  }
  .share-button {
    margin-top: 40px;
  }
}
</style>
