<template>
  <div>
    <button
      @click.prevent="$emit('openClick')"
      :class="['button', styleChange]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  computed: {
    styleChange() {
      // console.log(`button_theme_` + this.theme);
      return `button_theme_${this.theme}`;
    },
  },
};
</script>

<style scoped>
.button {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #121212;
}
.button:focus {
  outline: none;
}

.button:hover {
  opacity: 0.7;
}

.button_theme_violet {
  color: #fff;
  background: #613a93;
  line-height: 19px;
  padding: 16px 80px;
}
.button_theme_grey {
  color: #121212;
  line-height: 19px;
}
@media screen and (max-width: 1280px) {
  .button {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  .button_theme_violet {
    padding: 14px 40px;
  }
  .button {
    display: none;
  }
}
</style>
