<template>
  <div>
    <div class="container">
      <video-cont />
      <tagline>{{ taglineText }}&ensp;<hashTag /></tagline>
    </div>
    <tellStory />
  </div>
</template>

<script>
import Video from '../components/Video';
import Tagline from '../components/Tagline';
import TaglineHashText from '../components/TaglineHashText';
import TellStory from '../components/Tell-your-story';

export default {
  components: {
    'video-cont': Video,
    tagline: Tagline,
    hashTag: TaglineHashText,
    tellStory: TellStory,
  },
  data() {
    return {
      taglineText: `И В ОТЛИЧИЕ ОТ РАКА, `,
    };
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
