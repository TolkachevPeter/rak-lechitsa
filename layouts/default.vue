<template>
  <div>
    <Header @openClick="showQiuzPopUp" />
    <nuxt />
    <Footer />
    <overlay v-if="qiuzPopupShown" @overlayClick="showQiuzPopUp" />
    <popup v-if="qiuzPopupShown" @closeClick="showQiuzPopUp" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Overlay from '@/components/Overlay';
import PopUp from '@/components/Popup';
export default {
  components: {
    Header,
    Footer,
    overlay: Overlay,
    popup: PopUp,
  },
  computed: {
    qiuzPopupShown() {
      return this.$store.getters['popup/getQiuzPopupShown'];
    },
  },
  methods: {
    showQiuzPopUp() {
      this.$store.commit('popup/toggleQiuzPopUp');
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
