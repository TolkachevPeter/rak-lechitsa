<template>
  <button
    :class="['button', { button_disabled: disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['disabled'],
};
</script>

<style scoped>
.button {
  min-width: 20px;
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
.button_disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
@media (max-width: 1280px) {
  .button {
    /* width: 230px; */
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
@media (max-width: 425px) {
  .button {
    /* width: 100%; */
  }
}
</style>
