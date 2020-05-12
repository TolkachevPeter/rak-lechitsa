<template>
  <button class="popup-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.popup-button {
  width: 226px;
  height: 52px;
  background: #613a93;
  border: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
