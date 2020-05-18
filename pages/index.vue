<template>
  <div>
    <banner />
    <div class="container">
      <my-video />
      <tagline>
        <p class="tagline1"><span>И В ОТЛИЧИЕ ОТ РАКА,</span><hashtext /></p>
      </tagline>
      <story-elem />
      <div class="link-button_index">
        <link-button url="/stories/">Больше статей</link-button>
      </div>
      <tagline>
        <p class="tagline2">
          <span>РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</span><hashtext />
        </p>
      </tagline>
      <instagram />
    </div>

    <tell-your-story />
    <div class="container">
      <elemstat
        :maxVal="100"
        :oldValueIncr="50"
        :newValueIncr="64"
        :oldValueDecr="62.5"
        :newValueDecr="50"
      />
    </div>
    <about />
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import Video from '@/components/Video';
import Tagline from '@/components/Tagline';
import TaglineHashText from '@/components/TaglineHashText';
import Storyelem from '@/components/Story-elem';
import Linkbutton from '@/components/ui/Link-button';
import elemstat from '@/components/Elemstat';
import Instagram from '@/components/Instagram';
import TellYourStory from '@/components/Tell-your-story';
import Elemstat from '@/components/Elemstat';
import About from '@/components/About';

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
.link-button_index {
  margin-bottom: 100px;
}
.container {
  margin: 0 auto;
  max-width: 1320px;
}
.tagline2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 1440px) {
  .container {
    max-width: 95%;
  }
}
@media (max-width: 1024px) {
  .container {
    max-width: 95%;
  }
}
@media (max-width: 768px) {
  .tagline1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
