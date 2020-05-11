<template>
  <section class="banner">
    <h1 class="title banner-title">#РАКЛЕЧИТСЯ</h1>
    <banner__arrow />
  </section>
</template>

<script>
import DownArrow from './ui/DownArrow';
export default {
  components: {
    banner__arrow: DownArrow,
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
}

.banner {
  width: 100%;
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}
.banner-title {
  color: #ffffff;
  margin-top: 290px;
  text-align: center;
}
</style>
