<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__three-columns">
        <h3 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h3>
        <div class="footer__column">
          <footer-nav class="footer-nav"></footer-nav>
        </div>

        <div class="footer__column footer__column_content-info">
          <ul class="footer__column-links">
            <li class="footer__list-item">
              Мы в
              <a
                href="https://www.instagram.com/raklechitsa/"
                target="_blank"
                class="footer__link footer__link_social"
                >Инстаграме</a
              >
              и
              <a
                href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
                target="_blank"
                class="footer__link footer__link_social"
                >Youtube</a
              >
            </li>
            <!-- Тут будет попап, но его еще нет в макете -->
            <li class="footer__list-item" @click="showPopUp">
              <a class="footer__link">Поделитесь &#8599;</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__copyrights">
        <p class="footer__project">Рак Лечится {{ localeDate }}</p>
        <p class="footer__copyright">
          Сделано студентами
          <a
            href="https://praktikum.yandex.ru/"
            target="_blank"
            class="footer__copyright-link"
            >Яндекс Практикум</a
          >
        </p>
        <Overlay v-if="popupShown" @overlayClick="showPopUp" />
        <PopUp v-if="popupShown" @closeClick="showPopUp"> </PopUp>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from '~/components/Menu';
import Overlay from '~/components/PopupLayout';
import PopUp from '~/components/FooterPopup';
export default {
  components: {
    'footer-nav': Menu,
    Overlay,
    PopUp,
  },
  data: () => ({
    date: 1580558031264,
  }),
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    localeDate() {
      return new Date(this.date).getFullYear();
    },
  },

  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopUp');
    },
  },
};
</script>

<style scoped>
.footer {
  padding-top: 60px;
  margin: 0 auto;
  background: #fbfbfb;
}

.footer__three-columns {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  position: relative;
  /* width: 90%;
  max-width: 1320px; 
  margin: 0 auto;*/
  width: 100%;
}
.footer__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  max-width: 340px;
}
.footer__column {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  position: relative;
}

.footer__column-links {
  display: flex;
  list-style: none;
  flex-direction: column;
  /* padding-inline-start: 0; */
}

.footer__list-item {
  padding-right: 40px;
  padding-bottom: 44px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 133%;
  color: #121212;
}

.footer__link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 133%;
  color: #121212;
  text-decoration: none;
}

.footer__link:hover {
  opacity: 0.7;
}

.footer__link_social {
  text-decoration: underline;
}

.footer__copyrights {
  width: 100%;
  margin: 86px auto 0px;
  padding-bottom: 60px;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  position: relative;
  /* max-width: 90%; */
}
.footer__project {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #898989;
}
.footer__copyright {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #898989;
}

.footer__copyright-link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #898989;
  text-decoration: none;
}

.container {
  margin: 0 auto;
  max-width: 1320px;
}
@media (max-width: 1439px) {
  .container {
    max-width: 91.5%;
  }
}
@media (max-width: 1280px) {
  .footer {
    padding-top: 50px;
  }

  .footer__title {
    font-size: 28px;
    line-height: 32px;
  }
  .footer__list-item {
    font-size: 16px;
    line-height: 24px;
  }

  .footer__copyrights {
    margin: 62px auto 0px;
  }

  .footer__copyright {
    font-size: 16px;
    line-height: 18px;
  }

  .footer__copyright-link {
    font-size: 16px;
    line-height: 18px;
  }

  .footer__project {
    font-size: 16px;
    line-height: 18px;
  }
}
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
  .footer__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }

  .footer__copyrights {
    margin: 38px auto 0px;
  }
}
@media (max-width: 768px) {
  .footer__column-links {
    flex-direction: column;
  }

  .footer-nav {
    display: flex;
  }

  .footer__list-item {
    padding-bottom: 14px;
    font-size: 16px;
    line-height: 24px;
  }

  .footer__link {
    font-size: 16px;
    line-height: 24px;
  }

  .footer__copyrights {
    margin: 74px auto 0px;
  }
}
@media (max-width: 425px) {
  .footer__three-columns {
    flex-direction: column;
  }

  .footer__copyrights {
    flex-direction: column;
  }

  .footer__copyright {
    font-size: 13px;
    line-height: 18px;
  }

  .footer__copyright-link {
    font-size: 13px;
    line-height: 18px;
  }

  .footer__project {
    font-size: 13px;
    line-height: 18px;
  }

  .footer__column-links {
    padding: 0;
  }

  .footer__title {
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 30px;
  }
}
</style>
