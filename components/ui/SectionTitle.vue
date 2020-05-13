<template>
  <div>
    <h2 class="section__title">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section__title {
  /* max-width: 300px; */
  /* width: 22%; */
  text-align: center;
  color: #000000;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  /* text-align: left; */
  padding: 0;
  margin: 0;
}
</style>
