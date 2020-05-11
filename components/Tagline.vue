<template>
  <div class="tagline">
    <slot></slot>
  </div>
</template>

<style scoped>
.tagline {
  min-height: 86px;
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
}
</style>
