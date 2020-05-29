<template>
  <div>
    <Header @openClick="showQiuzPopUp" />
    <nuxt />
    <Footer @socClick="showSocLinkPopUp" />
    <modal-window @overlayClick="closePopup" @closeClick="closePopup">
      <quiz v-if="getQiuzPopupState" @closeClick="closePopup" />
      <footerPopup v-if="getSocLinksPopupState" @closeClick="closePopup" />
    </modal-window>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Overlay from '@/components/Overlay';
import PopUp from '@/components/Popup';
import ModalWindow from '@/components/ModalWindow';
import Quiz from '@/components/Quiz';
import FooterPopup from '@/components/FooterPopup';
export default {
  components: {
    Header,
    Footer,
    overlay: Overlay,
    popup: PopUp,
    'modal-window': ModalWindow,
    quiz: Quiz,
    footerPopup: FooterPopup,
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupState'];
    },
    getQiuzPopupState() {
      return this.$store.getters['popup/getQiuzPopupState'];
    },
    getSocLinksPopupState() {
      return this.$store.getters['popup/getSocLinksPopupState'];
    },
  },
  methods: {
    closePopup() {
      this.$store.commit('popup/closeQiuzPopup');
      this.$store.commit('popup/closeSocLinksPopup');
      this.$store.commit('popup/togglePopupState');
    },

    showQiuzPopUp() {
      this.$store.commit('popup/toggleQiuzPopup');
      this.$store.commit('popup/togglePopupState');
    },
    showSocLinkPopUp() {
      this.$store.commit('popup/toggleSocLinksPopup');
      this.$store.commit('popup/togglePopupState');
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
