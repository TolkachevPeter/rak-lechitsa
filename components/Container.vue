<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 60px;
  width: 100%;
}
@media screen and (max-width: 1280px) {
  .container {
    padding: 0 50px;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
}
@media screen and (max-width: 320px) {
  .container {
    padding: 0 15px;
  }
}
</style>
