<template>
  <div class="link-button">
    <a class="link-button__text" :href="url">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.link-button {
  max-width: 1320px;
  margin: 0 auto;
  min-height: 82px;
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
  align-self: center;
  color: #000000;
  text-decoration: none;
}
.link-button__text:hover {
  text-decoration: underline;
}
</style>
