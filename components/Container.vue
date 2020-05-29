<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1320px;
  /* padding: 0 60px;
  width: 100%; */
}

@media (max-width: 1440px) {
  .container {
    width: 95%;
    max-width: 1320px;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    width: 95%;
    max-width: 1180px;
    /* padding: 0 50px; */
  }
}
@media screen and (max-width: 1024px) {
  .container {
    /* padding: 0 40px; */

    width: 95%;
    max-width: 924px;
  }
}

@media (max-width: 768px) {
  .container {
    width: 95%;
    max-width: 688px;
  }
}

@media screen and (max-width: 320px) {
  /* .container {
    padding: 0 15px;
  } */
  .container {
    width: 95%;
  }
}
</style>
