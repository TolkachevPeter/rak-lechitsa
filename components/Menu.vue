<template>
  <nav class="nav">
    <ul class="nav__list-items">
      <li class="nav__list-item">
        <nuxt-link
          to="/"
          :class="['nav__link', { nav__link_underline: $route.path == '/' }]"
          >Главная</nuxt-link
        >
      </li>
      <li class="nav__list-item">
        <nuxt-link
          to="/stories"
          :class="[
            'nav__link',
            { nav__link_underline: $route.path == '/stories' },
          ]"
          >Истории</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['classes'],
};
</script>

<style scoped>
.nav__list-items {
  display: flex;
  list-style: none;
  padding: 0;
}
.nav__list-item {
  margin-left: 40px;
}
.nav__list-item:first-child {
  margin: 0;
}
.nav__link {
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: black;
}
.nav__link:hover {
  opacity: 0.7;
}
@media (max-width: 1280px) {
  .nav__link {
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  /* .nav {
    display: none;
  } */
  .nav__list-items {
    flex-direction: column;
  }
  .nav__list-item {
    margin-left: 0px;
    padding-bottom: 10px;
  }
}
@media (max-width: 320px) {
  .nav__link {
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
