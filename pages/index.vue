<template>
  <div>
    <banner @clickArrow="scrollDown" />
    <container>
      <div ref="nextSection">
        <my-video class="video-mix" />
      </div>
      <taglineText
        :text="'И В ОТЛИЧИЕ ОТ РАКА,'"
        :hashtext="'#ЭТОНЕЛЕЧИТСЯ'"
      ></taglineText>

      <section-title class="section-title-mix"
        >Истории неизлечимых привычек</section-title
      >

      <story-elem :stories="storiesToIndexPage" />
      <link-button class="link-button-mix" @btnClick="goToStories"
        >Больше статей</link-button
      >

      <taglineText
        :extraClass="'tagline2rows'"
        :text="'РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ&nbsp;В&nbsp;ИНСТАГРАМ'"
        :hashtext="'#ЭТОНЕЛЕЧИТСЯ'"
        class="tagline-mix"
      ></taglineText>
      <instagram
        class="instagram-mix"
        :instagramData="instagram"
        :mainInstLink="'#'"
      />
    </container>
    <tell-your-story class="tell-your-story-mix" @click="showPopUp" />
    <div class="elemstat-container">
      <section-title class="section-title-mix"
        >Статистика по онкозаболеваниям</section-title
      >

      <elemstat :statDataObj="statDataObj" />
    </div>
    <about class="about-mix" />
    <modal-window @overlayClick="closePopup" @closeClick="closePopup">
      <quiz v-if="getQiuzPopupState" @closeClick="closePopup" />
      <!-- <footerPopup v-if="getSocLinksPopupState" @closeClick="closePopup" /> -->
      <getContactForm v-if="getContactFormState" @closeClick="closePopup" />
    </modal-window>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Banner from '@/components/Banner';
import Video from '@/components/Video';
import TaglineText from '@/components/TaglineText';
import TaglineHashText from '@/components/TaglineHashText';
import Storyelem from '@/components/Story-elem';
import Linkbutton from '@/components/ui/Link-button';
import elemstat from '@/components/Elemstat';
import Instagram from '@/components/Instagram';
import TellYourStory from '@/components/Tell-your-story';
import Elemstat from '@/components/Elemstat';
import About from '@/components/About';
import Overlay from '@/components/Overlay';
import Container from '@/components/Container';
import Quiz from '@/components/Quiz';
import ModalWindow from '@/components/ModalWindow';
import GetContactForm from '@/components/GetContactForm';

export default {
  components: {
    banner: Banner,
    'my-video': Video,
    taglineText: TaglineText,
    hashtext: TaglineHashText,
    'story-elem': Storyelem,
    'link-button': Linkbutton,
    instagram: Instagram,
    'tell-your-story': TellYourStory,
    elemstat: elemstat,
    about: About,
    'section-title': SectionTitle,
    container: Container,
    quiz: Quiz,
    'modal-window': ModalWindow,
    getContactForm: GetContactForm,
  },

  data() {
    return {
      itemsPerPage: 8,
      numberStoriesToIndex: 16,
    };
  },

  methods: {
    scrollDown() {
      this.$refs.nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
    goToStories() {
      this.$router.push('/stories/');
    },

    closePopup() {
      this.$store.dispatch('popup/closeAllPopups');
    },

    showPopUp(popupType) {
      if (popupType === 'Заполнить форму') {
        this.$store.commit('popup/toggleQiuzPopup');
        this.$store.commit('popup/togglePopupState');
      } else {
        this.$store.commit('popup/toggleContactFormPopup');
        this.$store.commit('popup/togglePopupState');
      }
    },
    // showSocLinkPopUp() {
    //   this.$store.commit('popup/toggleSocLinksPopup');
    //   this.$store.commit('popup/togglePopupState');
    // },

    // goToDetail(id) {
    //   //console.log(id);
    //   this.$router.push(`/stories/${id}`);
    // },

    // showQiuzPopUp() {
    //   this.$store.commit('popup/toggleQiuzPopUp');
    // },
  },

  computed: {
    storiesToIndexPage() {
      let arrStories = this.$store.getters['stories/getStories'];
      return arrStories.filter(
        (item, index) => index < this.numberStoriesToIndex
      );
    },
    // qiuzPopupShown() {
    //   return this.$store.getters['popup/getQiuzPopupShown'];
    // },

    popupShown() {
      return this.$store.getters['popup/getPopupState'];
    },
    getQiuzPopupState() {
      return this.$store.getters['popup/getQiuzPopupState'];
    },
    getContactFormState() {
      return this.$store.getters['popup/getContactFormState'];
    },
    // getSocLinksPopupState() {
    //   return this.$store.getters['popup/getSocLinksPopupState'];
    // },

    instagram() {
      return this.$store.getters['instagram/getInstagramData'];
    },

    statDataObj() {
      return this.$store.getters['statistics/getStatData'];
    },
  },

  async fetch({ store, params }) {
    await store.dispatch('statistics/fetchStatistics');
  },

  async fetch({ store, params }) {
    await store.dispatch('stories/fetchStories');
  },
};
</script>

<style>
.video-mix {
  padding-top: 100px;
  padding-bottom: 74px;
}

.tagline-mix {
  margin-top: 100px;
}
.elemstat-container {
  margin: 0 auto;
  max-width: 1320px;
  padding-top: 100px;
  padding-bottom: 100px;
}

.section-title.section-title-mix {
  width: 413px;
  text-align: left;
  padding: 0;
  margin: 0;
  /* padding-top: 70px; */
  margin-bottom: 70px;
}

.tell-your-story-mix {
  padding-top: 100px;
  padding-bottom: 100px;
}

.instagram-mix {
  padding-top: 100px;
  padding-bottom: 100px;
}

.section-title-mix {
  padding: 0;
  margin: 0;
  margin-top: 100px;
  padding-bottom: 70px;
}
.link-button-mix {
  /* margin-bottom: 100px; */
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

.about-mix {
  padding-top: 90px;
  padding-bottom: 100px;
}
@media (max-width: 1440px) {
  /* .container {
    
    width: 95%;
    max-width: 1320px;
  } */
  .elemstat-container {
    width: 95%;
    max-width: 1320px;
  }
}
@media (max-width: 1280px) {
  .video-mix {
    padding-top: 90px;
    padding-bottom: 64px;
  }

  .tagline-mix {
    margin-top: 90px;
  }
  .tell-your-story-mix {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .instagram-mix {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .section-title-mix {
    margin-top: 90px;
    padding-bottom: 60px;
  }
  /* 
  .container {
    
    width: 95%;
    max-width: 1180px;
  } */

  .elemstat-container {
    width: 95%;
    max-width: 1180px;
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .about-mix {
    padding-top: 90px;
    padding-bottom: 100px;
  }
}
@media (max-width: 1024px) {
  .video-mix {
    padding-top: 80px;
    padding-bottom: 54px;
  }

  .tagline-mix {
    margin-top: 80px;
  }
  .tell-your-story-mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .instagram-mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  /* .container {
    
    width: 95%;
    max-width: 924px;
  } */

  .elemstat-container {
    width: 95%;
    max-width: 924px;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .section-title-mix {
    margin-top: 80px;
    padding-bottom: 46px;
  }
  .section-title.section-title-mix {
    /* padding-top: 80px; */
    margin-bottom: 46px;
  }
  .about-mix {
    padding-top: 80px;
    padding-bottom: 90px;
  }
}
@media (max-width: 768px) {
  .video-mix {
    padding-top: 80px;
    padding-bottom: 44px;
  }

  .tell-your-story-mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .instagram-mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  /* 
  .container {
   
    width: 95%;
    max-width: 688px;
  } */

  .elemstat-container {
    width: 95%;
    max-width: 688px;
  }

  .section-title-mix {
    margin-top: 80px;
    padding-bottom: 60px;
  }
  .section-title.section-title-mix {
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0 auto;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    /* padding-top: 80px; */
    margin-bottom: 60px;
    max-width: 380px;
  }

  .about-mix {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
@media (max-width: 320px) {
  .video-mix {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .tagline-mix {
    margin-top: 50px;
  }
  .tell-your-story-mix {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .instagram-mix {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  /* .container {
 
    width: 95%;
  } */

  .elemstat-container {
    width: 95%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .section-title-mix {
    margin-top: 50px;
    padding-bottom: 16px;
  }
  .section-title.section-title-mix {
    width: 100%;
    max-width: 290px;
    text-align: left;
    /* padding: 0;
    margin: 0 auto; */
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    /* padding-top: 50px; */
    margin-bottom: 40px;
    /* max-width: 380px; */
  }
  .about-mix {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
