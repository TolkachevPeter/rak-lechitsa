<template>
  <!-- <div class="link-button"> -->
  <a class="link-button" :href="url">
    <p class="link-button__text">
      <slot></slot>
    </p>
  </a>
  <!-- </div> -->
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
/* 
.link-button {
  max-width: 1320px;
  margin: 0 auto;
  min-height: 82px;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
} */

.link-button {
  /*  */
  max-width: 1320px;
  margin: 0 auto;
  min-height: 82px;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  text-decoration: none;
}
.link-button__text {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  align-self: center;
  color: #000000;
}

.link-button:hover {
  /* text-decoration: underline; */
  background: #f8f8f8;
}
</style>
