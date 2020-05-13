<template>
  <div class="progress-bar-double">
    <div class="progress-bar-double__old">
      <div class="progress-bar-double__fill" :style="styleOld">.</div>
    </div>

    <div class="progress-bar-double__new">
      <div class="progress-bar-double__fill_violet" :style="styleNew">d</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['oldValue', 'newValue'],
  computed: {
    styleOld() {
      return `width: ` + this.oldValue + `%`;
    },
    styleNew() {
      return `width: ` + this.newValue + `%`;
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
.progress-bar-double {
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
}
</style>
