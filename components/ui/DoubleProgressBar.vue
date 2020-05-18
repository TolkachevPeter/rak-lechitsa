<template>
  <div class="progress-bar-double">
    <div class="progress-bar-double__old progress-bar-double__item">
      <div
        class="progress-bar-double__fill progress-bar-double__item"
        :style="styleOld"
      ></div>
    </div>

    <div class="progress-bar-double__new progress-bar-double__item">
      <div
        class="progress-bar-double__fill progress-bar-double__fill_violet progress-bar-double__item"
        :style="styleNew"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['oldValue', 'newValue', 'maxVal'],
  computed: {
    styleOld() {
      return `width: ` + (this.oldValue / this.maxVal) * 100 + `%`;
    },
    styleNew() {
      return `width: ` + (this.newValue / this.maxVal) * 100 + `%`;
    },
  },
};
</script>

<style scoped>
.progress-bar-double {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
}

.progress-bar-double__item {
  height: 20px;
}

.progress-bar-double__old {
  width: 100%;
}

.progress-bar-double__fill {
  background: #f4f4f4;
  color: #f4f4f4;
}

.progress-bar-double__new {
  width: 100%;
}
.progress-bar-double__fill_violet {
  outline: 0;
  background: #613a93;
  color: #613a93;
}
@media (max-width: 1280px) {
  .progress-bar-double {
    height: 35px;
  }
  .progress-bar-double__item {
    height: 17.5px;
  }
}
@media (max-width: 1024px) {
  .progress-bar-double {
    height: 28px;
  }
  .progress-bar-double__item {
    height: 14px;
  }
}
</style>
