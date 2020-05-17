<template>
  <div class="error">
    <h1 class="error__title">404</h1>
    <p class="error__subtitle">Страница не найдена</p>
    <a href="/" class="error__link">Перейти на главную</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error__title {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;
  text-align: center;
  color: #000000;
}
.error__subtitle {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #000000;
}
.error__link {
  color: #000000;
  font-size: 18px;
  line-height: 24px;
}

@media screen and (max-width: 1280px) {
  .error__subtitle,
  .error__link {
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 425px) {
  .error__title {
    font-size: 72px;
    line-height: 87px;
  }
  .error__subtitle,
  .error__link {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
