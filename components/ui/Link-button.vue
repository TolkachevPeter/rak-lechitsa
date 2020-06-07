<template>
  <div>
    <button @click.prevent="$emit('btnClick')" class="link-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.link-button {
  /* min-height: 82px; */
  width: 100%;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  align-self: center;
  color: #000;
  cursor: pointer;
  border: none;
}

.link-button:hover {
  /* text-decoration: underline; */
  background: #f8f8f8;
}
@media (max-width: 1280px) {
  .link-button {
    min-height: 78px;
  }
}
@media (max-width: 1024px) {
  .link-button {
    min-height: 50px;
    font-size: 16px;
  }
}
</style>
