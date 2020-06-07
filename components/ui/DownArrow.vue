<template>
  <div class="banner-arrow" @click="$emit('clickArrow')">
    <img src="./../../static/down__arrow.png" alt="Смотреть далее" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner-arrow {
  min-width: 36px;
  min-height: 12px;
  color: #fff;
  /* margin-top: 237px; */
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  cursor: pointer;
}
@media (max-width: 320px) {
  .banner-arrow {
    bottom: 30px;
  }
}
</style>
