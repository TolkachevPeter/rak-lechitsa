<template>
  <div class="link-button">
    <a class="link-button__text" href="URL">Больше статей</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link-button {
  max-width: 1320px;
  height: 82px;
  margin: 0 60px;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
}

.link-button__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  text-decoration: none;
}
</style>
