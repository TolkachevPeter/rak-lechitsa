<template>
  <div>
    <banner />
    <my-video />
    <tagline>
      И В ОТЛИЧИЕ ОТ РАКА,
      <hashtext />
    </tagline>
    <story-elem />
    <div class="link-button_index">
      <link-button url="/stories/">Больше статей</link-button>
    </div>
    <tagline>
      РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ
      <hashtext />
    </tagline>
    <instagram />
    <tell-your-story />
    <elemstat />
    <about />
  </div>
</template>

<script>
//import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
// import About from '@/components/About';
import Video from '@/components/Video';
import Tagline from '@/components/Tagline';
import TaglineHashText from '@/components/TaglineHashText';
import Storyelem from '@/components/Story-elem';
import Linkbutton from '@/components/ui/Link-button';
import elemstat from '@/components/Elemstat';
import Instagram from '@/components/Instagram-refactor';
import TellYourStory from '@/components/Tell-your-story';
import Elemstat from '@/components/Elemstat';
import About from '@/components/About';

// import ProgressBar from '@/components/ui/ProgressBar';
// import DoubleProgressBar from '@/components/ui/DoubleProgressBar';

// import Storyelem from '@/components/Story-elem';
// import Linkbutton from '@/components/ui/Link-button';
// import Instagram from '@/components/Instagram';
export default {
  components: {
    banner: Banner,
    'my-video': Video,
    tagline: Tagline,
    hashtext: TaglineHashText,
    'story-elem': Storyelem,
    'link-button': Linkbutton,
    instagram: Instagram,
    'tell-your-story': TellYourStory,
    elemstat: elemstat,
    about: About,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.link-button_index {
  margin-bottom: 100px;
}
</style>
