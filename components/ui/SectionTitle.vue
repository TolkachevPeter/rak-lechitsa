<template>
  <h2 class="section-title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.section-title {
  color: #000;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  padding: 0;
  margin: 0;
}

@media (max-width: 1280px) {
  .section-title {
    max-width: 413px;
    font-size: 28px;
    line-height: 32px;
  }
}
@media (max-width: 1024px) {
  .section-title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media (max-width: 768px) {
  .section-title {
    margin: 0 auto;
    text-align: center;
  }
}
@media (max-width: 425px) {
  .section-title {
    max-width: 100%;
    width: 290px;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
}
</style>
