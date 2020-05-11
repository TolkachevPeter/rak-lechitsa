<template>
  <div class="arr">
    <div class="arr__container">
      <div class="arrow arrow_left arrow_disabled"></div>
    </div>
    <div class="arr__container">
      <div class="arrow arrow_right arrow_enabled"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.arr {
  display: flex;
  flex-direction: row;
}
.arr__container {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  cursor: pointer;
}
.arrow {
  width: 11.5px;
  height: 11.5px;
}
.arrow_left {
  transform: rotate(-45deg);
}
.arrow_right {
  transform: rotate(135deg);
}
.arrow_disabled {
  border-top: 1px solid #bfbfbf;
  border-left: 1px solid #bfbfbf;
}
.arrow_enabled {
  border-top: 1px solid #000000;
  border-left: 1px solid #000000;
}
</style>
