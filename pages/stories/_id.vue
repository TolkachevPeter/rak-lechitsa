<template>
  <container class="container-mix">
    <!-- <story-detail v-if="!this.loading" :currentStory="getCurrentStory" @click="showSocLinkPopUp" /> -->
    <story-detail :currentStory="getCurrentStory" @click="showSocLinkPopUp" />
    <story-elem
      :titleIsActive="false"
      :dataObj="blocksData(5)"
      :stories="storiesToDetailPage"
    />
    <link-button class="link-button" @btnClick="goToStories"
      >Больше статей</link-button
    >
    <modal-window
      @overlayClick="closePopup"
      @closeClick="closePopup"
    ></modal-window>
  </container>
</template>

<script>
import LinkButton from '@/components/ui/Link-button';
import Container from '@/components/Container';
import Storyelem from '@/components/Story-elem';
import Story from '~/components/Story';
import StoryDetail from '~/components/Story-detail';
import ModalWindow from '@/components/ModalWindow';

export default {
  head() {
    return {
      title: this.getCurrentStory.title,
    };
  },

  components: {
    'link-button': LinkButton,
    container: Container,
    'story-elem': Storyelem,
    'one-story': Story,
    'story-detail': StoryDetail,
    'modal-window': ModalWindow,
  },

  methods: {
    // showPopUp() {
    //   this.$store.commit('popup/togglePopUp');
    // },
    goToStories() {
      this.$router.push('/stories/');
    },
    closePopup() {
      this.$store.dispatch('popup/closeAllPopups');
    },

    showSocLinkPopUp() {
      this.$store.commit('popup/toggleSocLinksPopup');
      this.$store.commit('popup/togglePopupState');
    },
    blocksData(id) {
      let arrObj = this.$store.getters['blocks/getBlocks'];
      const arrObj2 = arrObj.filter(item => {
        return item.id === id;
      });
      return arrObj2[0];
    },
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupState'];
    },

    getSocLinksPopupState() {
      return this.$store.getters['popup/getSocLinksPopupState'];
    },

    storiesToDetailPage() {
      //console.log(this.$router);
      //console.log({ id: this.$router.currentRoute.params.id });
      let arrStories = this.$store.getters['stories/getStories'];
      return arrStories.filter((item, index) => index < 4);
      //return arrStories;
      // console.log(arrStories);
    },
    getCurrentStory() {
      return (this.currentStory = this.$store.getters[
        'stories/getCurrentStory'
      ]);
    },
  },

  data() {
    return {
      currentStory: {},
      loading: true,
    };
  },
};
</script>

<style scoped>
.story__headings {
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.story__img-container {
  min-width: 44%;
  position: relative;
}
.story__img-container:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.story__img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.story__data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 60px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 30px 0;
}
.story__title {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
  color: #000;
}
.story__author {
  font-weight: 500;
}
.story__headings-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.story__share {
  text-decoration: none;
  color: #121212;
}
.story__date {
  text-align: right;
}
.story__content {
  margin: 130px auto;
  max-width: 59%;
}
.story__material {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000;
}
.story__share-social {
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #121212;
  text-decoration: none;
  min-height: 82px;
  margin: 60px auto;
}
.stories__container {
  margin-top: 160px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  padding-left: 0;
}
.stories__item {
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
.story-element__photo {
  width: 100%;
  max-height: 300px;
  cursor: pointer;
}
.story__name {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-top: 20px;
  color: #000;
}
.story__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-top: 14px;
  color: #666;
}
.link-button {
  margin: 70px auto 100px;
  margin-top: 0;
  cursor: pointer;
}
.nuxt-link {
  text-decoration: none;
}
@media (max-width: 1280px) {
  /* .story__img {
    height: 518px;
  } */
  .stories__container {
    row-gap: 60px;
  }
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }
  .story__material {
    font-size: 20px;
    line-height: 28px;
  }
  .story__content {
    margin: 120px auto;
    max-width: 61%;
  }

  /* .story-element__photo {
    max-height: 265px;
  } */
}
@media (max-width: 1024px) {
  /* .story__img {
    height: 407px;
  } */
  .story__title {
    font-size: 30px;
    line-height: 38px;
  }
  .story__headings-footer {
    font-size: 16px;
  }
  .story__content {
    margin: 90px auto;
    max-width: 69%;
  }
  .story__share-social {
    margin: 46px auto;
  }
  .stories__container {
    row-gap: 46px;
    column-gap: 30px;
  }

  /* .story-element__photo {
    max-height: 208px;
  } */
  .story__name {
    font-size: 22px;
  }
  .story__text {
    font-size: 13px;
    line-height: 16px;
  }
}
@media (max-width: 768px) {
  .container-mix {
    padding-top: 100px;
  }

  .story__headings {
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    flex-direction: column;
    min-height: 673px;
    position: relative;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .story__img-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 420px;
    width: 420px;
  }
  .story__data {
    border-top: none;
    border-bottom: none;
    padding: 0;
    margin-left: 0;
  }
  .story__title {
    text-align: center;
  }
  .story__material {
    font-size: 18px;
    line-height: 27px;
  }
  .story__content {
    max-width: 100%;
    margin: 100px auto;
  }
  .story__headings-footer {
    margin-top: 540px;
  }

  .stories__container {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 60px;
  }
  /* .story-element__photo {
    max-height: 216px;
  } */
  .story__name {
    font-size: 18px;
    line-height: 22px;
  }
  .stories__item:last-child {
    display: none;
  }
}
@media (max-width: 320px) {
  .container-mix {
    padding-top: 50px;
  }
  .story__headings {
    min-height: 470px;
  }
  .story__title {
    font-size: 18px;
    line-height: 21px;
  }
  .story__img {
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    height: 290px;
    width: 100%;
  }
  .story__headings-footer {
    margin-top: 350px;
    font-size: 13px;
    line-height: 16px;
  }
  .story__content {
    margin: 40px auto;
  }
  .story__material {
    font-size: 13px;
    line-height: 16px;
  }
  .story__share-social {
    font-size: 13px;
    line-height: 16px;
    padding: 0 40px;
  }
  .stories__container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  /* .story-element__photo {
    max-height: 290px;
  } */
  .stories__item {
    max-width: 100%;
    margin-bottom: 30px;
  }
  .link-button {
    margin-top: 40px;
  }
}
</style>
