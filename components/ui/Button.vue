<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  width: 280px;
  background: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  cursor: pointer;
  border: none;
}
.button:hover {
  background: #613a93;
  opacity: 0.9;
}
@media (max-width: 1280px) {
  .button {
    width: 230px;
  }
}
@media (max-width: 1024px) {
  .button {
    font-size: 15px;
    line-height: 18px;
  }
}
@media (max-width: 768px) {
  .button {
    font-size: 15px;
    line-height: 18px;
  }
}
</style>
