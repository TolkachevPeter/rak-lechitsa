<template>
  <div class="popup">
    <img
      src="/popupCross.svg"
      alt
      class="popup__cross"
      @click="$emit('closeClick')"
    />

    <h3 class="popup__title">Поделитесь</h3>

    <div class="social-networks__container">
      <div class="social-networks__item">
        <a href="https://www.facebook.com/" target="_blank">
          <fb class="social-networks__icon" />
        </a>
      </div>

      <div class="social-networks__item">
        <a href="https://twitter.com/" target="_blank">
          <tw class="social-networks__icon" />
        </a>
      </div>

      <div class="social-networks__item">
        <a href="https://www.vk.com/" target="_blank">
          <vk class="social-networks__icon" />
        </a>
      </div>

      <div class="social-networks__item">
        <a href="https://ok.ru/" target="_blank">
          <ok class="social-networks__icon" />
        </a>
      </div>

      <div class="social-networks__item">
        <a href="https://www.instagram.com/" target="_blank">
          <inst class="social-networks__icon" />
        </a>
      </div>

      <div class="social-networks__item">
        <a href="https://www.youtube.com/" target="_blank">
          <youtube class="social-networks__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import fb from '@/components/svg/fb';
import vk from '@/components/svg/vk';
import inst from '@/components/svg/inst';
import ok from '@/components/svg/ok';
import tw from '@/components/svg/tw';
import youtube from '@/components/svg/youtube';

export default {
  components: {
    fb,
    vk,
    inst,
    ok,
    tw,
    youtube,
  },
};
</script>

<style scoped>
.popup {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 920px;
  max-width: 95%;
  height: 324px;
  background: #fff;
  z-index: 2;
  transform: translate(-50%, -50%);
}

.popup__cross {
  width: 100%;
  position: fixed;
  top: 35px;
  left: calc(100% - 50px);
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.popup__title {
  width: 100%;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  text-align: center;
  margin: 0 auto;
}

.social-networks__container {
  padding-top: 100px;
  /* height: 48px; */
  display: flex;
  margin: 0 auto;
}

.social-networks__item {
  display: flex;
  /* width: 60px; */
  /* height: 48px; */
  /*width: 48px; new */
  /* padding: 8px;
  padding-top: 8px;
  padding-bottom: 8px;*/
  padding-left: 10px;
  padding-right: 10px;
  /* padding: 0; */
}

.social-networks__item_extra-padding {
  padding-top: 14px;
  padding-bottom: 14px;
}

.social-networks__icon {
  display: block;
  /* width: 48px; */
  /* height: 100%; */
  /* background: center;
  background-repeat: no-repeat;
  background-size: contain; */
}

@media (max-width: 1440px) {
  .popup__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    color: #000;
  }
}
@media (max-width: 1280px) {
  .popup {
    width: 800px;
  }
  .popup__cross {
    /* top: 35px; */
    /* left: 755px; */
  }
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .popup {
    max-width: 580px;
    width: 95%;
  }
  .popup__cross {
    /* left: 535px; */
  }
}
@media (max-width: 500px) {
  .popup {
    width: 290px;
    height: 191px;
    padding: 15px;
  }
  .popup__cross {
    top: 13px;
    left: calc(100% - 35px);
  }
  .social-networks__container {
    padding-top: 60px;
    width: 100%;
    justify-content: space-between;
  }

  .popup__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }

  .social-networks__icon {
    width: 35px;
  }

  .social-networks__item {
    height: 28px;
    /* width: 25px; */
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 3px;
    padding-right: 3px;
  }
  .social-networks__item_extra-padding {
    padding-top: 6px;
    padding-bottom: 6px;
  }
}
</style>
