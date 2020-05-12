<template>
  <header class="header">
    <h2 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <div class="header__links">
      <header-nav />
      <header-button @click class="header__button"
        >Рассказать историю</header-button
      >
    </div>
  </header>
</template>

<script>
import Button from '~/components/ui/Button_header';
import Menu from '~/components/Menu';
export default {
  components: {
    'header-button': Button,
    'header-nav': Menu,
  },
};
</script>

<style scoped>
.header {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1440px; */
  max-width: 1320px;
  width: 100%;
  /* padding: 18px 4%; */
  padding: 18px 0;
  border-bottom: 1px solid #e8e8e8;
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
</style>
