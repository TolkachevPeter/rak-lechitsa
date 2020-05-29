<template>
  <div class="popup-layout" @click="$emit('overlayClick')"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup-layout {
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>
