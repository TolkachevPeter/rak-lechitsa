<template>
  <div class="tagline">
    <div class="tagline__text">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tagline {
  min-height: 86px;
  padding-bottom: 20px;
  padding-top: 20px;
  background: #613a93;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-family: Inter;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
}
.tagline__text {
  width: 100%;
  max-width: 750px;
  text-align: center;
}
</style>
