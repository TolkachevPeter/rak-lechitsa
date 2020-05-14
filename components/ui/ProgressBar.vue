<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="styleNew"></div>
  </div>
</template>

<script>
export default {
  props: ['val'],
  computed: {
    styleNew() {
      return `width: ` + this.val + `%`;
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
/* .progress-bar-double {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
}

.progress-bar-double__old {
  width: 100%;
  height: 20px;
}

.progress-bar-double__fill {
  background: #f4f4f4;
  width: 70%;
  color: #f4f4f4;
  height: 20px;
}

.progress-bar-double__new {
  width: 100%;
}
.progress-bar-double__fill_violet {
  outline: 0;
  background: #613a93;
  width: 80%;
  color: #613a93;
  height: 20px;
} */
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
