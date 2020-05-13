<template>
  <div>
    <img class="play-button" src="../../static/play-button.png" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.play-button {
  width: 90px;
  height: 90px;
  cursor: pointer;
}
@media (max-width: 1280px) {
  .play-button {
    width: 76px;
    height: 76px;
  }
}
@media (max-width: 420px) {
  .play-button {
    width: 38px;
    height: 38px;
  }
}
</style>
