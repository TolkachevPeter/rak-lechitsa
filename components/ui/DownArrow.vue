<template>
  <a href class="banner-arrow">
    <img src="./../../static/down__arrow.png" alt="стрелка вниз" />
  </a>
</template>

<script>
export default {};
</script>

<style scoped>
.banner-arrow {
  min-width: 36px;
  min-height: 12px;
  color: #ffffff;
  /* margin-top: 237px; */
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
}
@media (max-width: 320px) {
  .banner-arrow {
    bottom: 30px;
  }
}
</style>
