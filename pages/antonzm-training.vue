<template>
  <div class="container">
    <video-cont />
  </div>
</template>

<script>
import Video from '../components/Video';

export default {
  components: {
    'video-cont': Video,
  },
};
</script>

<style scoped>
.container {
  width: 92%;
  margin: 0 auto;
  background-color: #ffffff;
}
</style>
