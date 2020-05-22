<template>
  <header class="header">
    <div class="container header__container hires-visible">
      <h2 class="header__title">
        Проект Благотворительного Фонда Константина Хабенского
      </h2>
      <div class="header__links header__links_res320-visible">
        <header-nav />
        <!-- <sandvich-menu></sandvich-menu> -->
        <header-button
          class="header__button"
          :theme="'grey'"
          @openClick="$emit('openClick')"
          >Рассказать историю</header-button
        >
      </div>
    </div>

    <div
      class="container header__container res768-visible"
      v-if="getmenuMobileShown"
    >
      <div class="header__links header__links_res768-visible">
        <header-nav />

        <header-button
          class="header__button"
          :theme="'grey'"
          @openClick="$emit('openClick')"
          >Рассказать историю</header-button
        >
      </div>
    </div>

    <div class="container res320-visible" v-if="getmenuMobileShown">
      <div class="header__links header__links_res320-visible">
        <header-nav />
        <header-button
          class="header__button"
          :theme="'grey'"
          @openClick="$emit('openClick')"
          >Рассказать историю</header-button
        >
      </div>
    </div>

    <div class="container header__title-container">
      <h2 class="header__title">
        Проект Благотворительного Фонда Константина Хабенского
      </h2>
      <sandvich-menu
        :sandichShow="!getmenuMobileShown"
        :crossShow="getmenuMobileShown"
        @click="showMenu"
      ></sandvich-menu>
    </div>
  </header>
</template>

<script>
import Button from '~/components/ui/Button_header';
import Menu from '~/components/Menu';
import Sandvich from '~/components/ui/Sandvich-menu';
export default {
  components: {
    'header-button': Button,
    'header-nav': Menu,
    'sandvich-menu': Sandvich,
  },
  methods: {
    showMenu() {
      this.$store.commit('popup/toggleMenuMobileShow');
    },
  },
  computed: {
    getmenuMobileShown() {
      return this.$store.getters['popup/getmenuMobileShown'];
    },
  },
};
</script>

<style scoped>
.container.header__title-container {
  display: none;
}

.container.res320-visible {
  display: none;
}

/* .container.header__container.res320-visible {
  display: none;
} */

.header__title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header__links_res768-visible {
  height: 0;
}

.res768-visible {
  display: none;
}

.container.header__container.res768-visible {
  display: none;
}

.hires-visible {
  display: flex;
}

.header {
  width: 100%;
  min-height: 76px;
  padding: 18px 0;
  /* border-bottom: 1px solid #e8e8e8; */
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__title {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  max-width: 340px;
}
.header__links {
  display: flex;
  align-items: center;
}
.header__button {
  padding: 0;
  margin-left: 40px;
  font-size: 18px;
  line-height: 24px;
  background-color: transparent;
  border: none;
}
.header__button:hover {
  cursor: pointer;
}
.header >>> .nav__link_underline {
  border-bottom: 1px solid black;
}
.container {
  margin: 0 auto;
  max-width: 1320px;
}
@media (max-width: 1440px) {
  .container {
    max-width: 92%;
  }
}
@media (max-width: 1280px) {
  .header {
    min-height: 72px;
  }
  .header__title {
    font-size: 16px;
    line-height: 18px;
  }
}
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
}

@media (max-width: 768px) {
  .container.header__title-container {
    display: flex;
  }

  .header__title-container {
    padding-top: 18px;
  }
  .header /deep/ .nav {
    display: flex;
    flex-direction: row;
  }

  .header /deep/ .nav__list-items {
    display: flex;
    flex-direction: row;
  }
  .header /deep/ .nav__list-item {
    padding-right: 30px;
    padding-bottom: 15px;
  }

  .header /deep/ .button {
    display: flex;
    padding-bottom: 15px;
    padding-left: 0;
  }
  .header__button {
    margin-left: 0;
  }

  .hires-visible {
    display: none;
  }

  .container.header__container.res768-visible {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .res768-visible {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .header__links_res768-visible {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
  }
  .container.res320-visible {
    display: none;
  }
}

@media (max-width: 320px) {
  .header {
    min-height: 64px;
  }
  .header__title {
    font-size: 12px;
    line-height: 14px;
    max-width: 216px;
  }
  .container.header__container.res768-visible {
    display: none;
  }

  .container.res320-visible {
    display: flex;
    flex-direction: column;
  }

  .header /deep/ .nav__list-items {
    display: flex;
    flex-direction: column;
  }
  /*  .header /deep/ .nav__list-item {
    padding-right: 30px;
    padding-bottom: 15px;
  } */

  .header /deep/ .button {
    /* display: flex; */
    /* flex-direction: column; */
    font-size: 13px;
    line-height: 16px;
  }

  .header__links_res320-visible {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 2px;
  }
}

/* border-bottom: 1px solid #e8e8e8; */
</style>
