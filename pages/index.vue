<template>
  <div>
    <banner />
    <div class="container">
      <my-video />
      <tagline>
        <p class="tagline1"><span>И В ОТЛИЧИЕ ОТ РАКА,</span><hashtext /></p>
      </tagline>
      <div class="section-title-container">
        <section-title>Истории неизлечимых привычек</section-title>
      </div>
      <story-elem :stories="stories" />
      <div class="link-button_index">
        <link-button url="/stories/">Больше статей</link-button>
      </div>
      <tagline>
        <p class="tagline2">
          <span>РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</span><hashtext />
        </p>
      </tagline>
      <instagram
        class="instagram_mix"
        :instagramData="instagram"
        :mainInstLink="'#'"
      />
    </div>

    <tell-your-story class="tell-your-story_mix" />
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
import SectionTitle from '@/components/ui/SectionTitle';
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
    'section-title': SectionTitle,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
    instagram() {
      return this.$store.getters['instagram/getInstagramData'];
    },
  },
};
</script>

<style>
.tell-your-story_mix {
  padding-top: 100px;
  padding-bottom: 100px;
}

.instagram_mix {
  padding-top: 100px;
  padding-bottom: 100px;
}

.section-title-container {
  padding: 0;
  margin: 0;
  margin-top: 100px;
  padding-bottom: 70px;
}
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
    /* new */
    width: 95%;
    max-width: 1320px;
  }
}
@media (max-width: 1280px) {
  .tell-your-story_mix {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .instagram_mix {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .section-title-container {
    margin-top: 90px;
    padding-bottom: 60px;
  }

  .container {
    /* new */
    width: 95%;
    max-width: 1180px;
  }
}
@media (max-width: 1024px) {
  .tell-your-story_mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .instagram_mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .container {
    /* new */
    width: 95%;
    max-width: 924px;
  }
  .section-title-container {
    margin-top: 80px;
    padding-bottom: 46px;
  }
}
@media (max-width: 768px) {
  .tell-your-story_mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .instagram_mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .container {
    /* new */
    width: 95%;
    max-width: 688px;
  }

  .tagline1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section-title-container {
    margin-top: 80px;
    padding-bottom: 60px;
  }

  @media (max-width: 320px) {
    .tell-your-story_mix {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .instagram_mix {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .container {
      /* new */
      width: 95%;
    }
    .section-title-container {
      margin-top: 50px;
      padding-bottom: 16px;
    }
  }
}
</style>
