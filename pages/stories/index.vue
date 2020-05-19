<template>
  <!-- <section class="stories"> -->
  <section class="stories">
    <div class="section-title-container">
      <section-title>Истории неизлечимых привычек</section-title>
    </div>
    <form class="stories__search">
      <input type="text" class="stories__input" />
      <form-btn class="stories__button">Поиск</form-btn>
    </form>
    <form class="stories__search stories__search_for-mobile">
      <input type="text" class="stories__input" />
      <form-btn class="stories__button"
        ><img src="@/static/search_icon.svg"
      /></form-btn>
    </form>
    <story-elem :stories="stories" />
    <!-- Необходимо настроить количество -->
    <paginator :pages="pages" class="paginator_position" />
  </section>
  <!-- </section> -->
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Storyelem from '@/components/Story-elem';
import Paginator from '@/components/ui/Paginator';
export default {
  components: {
    'form-btn': Button,
    'story-elem': Storyelem,
    paginator: Paginator,
    'section-title': SectionTitle,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
  data() {
    return {
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
.paginator_position {
  padding-bottom: 100px;
}

.section-title-container {
  padding: 0;
  margin: 0;
  margin-top: 100px;
  padding-bottom: 60px;
}

.stories {
  margin: 0 auto;
  max-width: 1320px;
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
  /* margin-top: 60px; */
  margin-bottom: 70px;
  height: 52px;
}
.stories__search_for-mobile {
  display: none;
}
.stories__input {
  width: 81%;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  margin-right: 20px;
  padding-left: 15px;
}
.stories__button {
  font-size: 16px;
  line-height: 19px;
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
@media (max-width: 1440px) {
  .stories {
    max-width: 92%;
  }
}
@media (max-width: 1280px) {
  .paginator_position {
    padding-bottom: 90px;
  }

  .section-title-container {
    margin-top: 90px;
    padding-bottom: 50px;
  }

  .stories__search {
    margin-bottom: 60px;
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
}
@media (max-width: 1024px) {
  .paginator_position {
    padding-bottom: 80px;
  }

  .section-title-container {
    margin-top: 80px;
    padding-bottom: 40px;
  }

  .stories {
    max-width: 90%;
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
    margin-bottom: 46px;
  }

  .stories__button {
    font-size: 15px;
    line-height: 18px;
  }
}
@media (max-width: 768px) {
  .section-title-container {
    margin-top: 80px;
    padding-bottom: 50px;
  }

  .stories__title {
    text-align: center;
    margin: 0 auto;
    max-width: 380px;
  }
  .stories__search {
    margin-bottom: 60px;
  }
  .stories__container {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 60px;
  }
}
@media (max-width: 320px) {
  .paginator_position {
    padding-bottom: 50px;
  }

  .stories__search {
    margin-bottom: 30px;
  }

  .section-title-container {
    margin-top: 50px;
    padding-bottom: 40px;
  }

  .stories__title {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    width: 70%;
    margin: 0;
  }
  .stories__search {
    display: none;
  }
  .stories__search_for-mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-top: 40px; */
    height: 46px;
  }
  .stories__input {
    width: 82%;
    margin-right: 6px;
  }
  .stories__button {
    width: 46px;
    height: 46px;
  }
  .stories__container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
}
</style>
