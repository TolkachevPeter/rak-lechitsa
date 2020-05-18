<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="styleNew"></div>
  </div>
</template>

<script>
export default {
  props: ['val', 'maxVal'],
  computed: {
    styleNew() {
      return `width: ` + (this.val / this.maxVal) * 100 + `%`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 40px;
  background: #f4f4f4;
}
.progress-bar__fill {
  background: #613a93;
  width: 100px;
  height: 100%;
}
@media (max-width: 1280px) {
  .progress-bar {
    height: 35px;
  }
}
@media (max-width: 1024px) {
  .progress-bar {
    height: 28px;
  }
}
</style>
