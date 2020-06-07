<template>
  <section class="tell-story">
    <h2 class="tell-story__title">{{ dataObj.title }}</h2>
    <div class="tell-story__container">
      <div class="tell-story__column">
        <div class="tell-story__subtitle" v-html="dataObj.text"></div>
      </div>
      <div class="tell-story__column tell-story__column_var">
        <p
          class="about__var"
          :class="[
            'tell-story__var',
            { 'tell-story__var_type_active': isActiveText['1'] },
          ]"
          @click="changeVar(1)"
        >
          {{ dataObj.extraTexts[0].title }}
        </p>
        <p
          class="about__var"
          :class="[
            'tell-story__var',
            { 'tell-story__var_type_active': isActiveText['2'] },
          ]"
          @click="changeVar(2)"
        >
          {{ dataObj.extraTexts[1].title }}
        </p>
      </div>
      <div class="tell-story__column">
        <p class="subtitle tell-story__select-var" v-html="textVar[0]"></p>
        <submit-btn
          class="btn submit-btn_mix"
          @click="$emit('click', btnText[isActiveResult])"
          >{{ btnText[isActiveResult] }}</submit-btn
        >
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../components/ui/Button';
export default {
  props: {
    dataObj: {},
  },
  components: {
    'submit-btn': Button,
  },
  computed: {
    isActiveResult() {
      return this.isActive;
    },
  },
  mounted() {
    if (this.isActive == 1) {
      this.isActiveText = { 1: true, 2: false };
      return (this.textVar = [this.dataObj.extraTexts[0].text]);
    } else {
      this.isActiveText = { 1: false, 2: true };
      return (this.textVar = [this.dataObj.extraTexts[1].text, '']);
    }
  },

  methods: {
    changeVar(variant = 1) {
      if (variant === 2) {
        this.isActive = 2;
        this.isActiveText = { 1: false, 2: true };
        this.textVar = [this.dataObj.extraTexts[1].text, ''];
      } else {
        this.isActive = 1;
        this.isActiveText = { 1: true, 2: false };
        this.textVar = [this.dataObj.extraTexts[0].text];
      }
      return this.textVar;
    },
    // changeVar(variant = 1) {
    //   if (variant === 2) {
    //     this.isActive = 2;
    //     this.isActiveText = { 1: false, 2: true };
    //     this.textVar = [this.textBlocks[2].text1, ''];
    //   } else {
    //     this.isActive = 1;
    //     this.isActiveText = { 1: true, 2: false };
    //     this.textVar = [this.textBlocks[1].text1];
    //   }
    //   return this.textVar;
    // },
  },
  data() {
    return {
      isActive: 1,
      isActiveText: { 1: 'true', 2: 'false' },
      textVar: [],
      btnText: { 1: 'Заполнить форму', 2: 'Оставить контакт' },
      title: 'Расскажите свою историю',
      subtitle:
        'Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.',
      textBlocks: {
        1: {
          text1: `Заполните подробную форму прямо на сайте и мы опубликуем вашу историю
                    после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
                    испытаете какие-то сложности, воспользуйтесь 2-м вариантом.`,
        },

        2: {
          text1:
            'Оставьте контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
        },
      },
    };
  },
};
</script>

<style scoped>
.submit-btn_mix {
  width: 280px;
}

.tell-story__container {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 1fr 48%;
  column-gap: 40px;
}

.tell-story__column {
  display: flex;
  flex-direction: column;
}
.tell-story__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  padding-bottom: 30px;
}
.tell-story__subtitle {
  font-size: 18px;
  line-height: 22px;
  color: #666;
  /* padding-top: 30px; */
  /* margin-top: 32px; */
}
.tell-story__var {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  text-align: right;
  cursor: pointer;
  margin-bottom: 10px;
}
.tell-story__var_type_active {
  font-weight: 500;
  color: #000;
  cursor: default;
}
.tell-story__select-var {
  min-height: 88px;
  margin-top: 0;
}
.btn {
  margin-top: 78px;
}
.tell-story {
  margin: 0 auto;
  max-width: 1320px;
  background-color: #f7f7f7;
  padding-left: 60px;
  padding-right: 60px;
}
@media (max-width: 1440px) {
  .tell-story {
    width: 100%;
    max-width: 1320px;
  }
  .tell-story {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@media (max-width: 1280px) {
  .submit-btn_mix {
    width: 230px;
  }

  /* .tell-story {
    padding-top: 100px;
    padding-bottom: 100px;
  } */

  .tell-story__title {
    font-size: 28px;
    line-height: 32px;
  }
  .tell-story__column {
    font-size: 16px;
    line-height: 20px;
    padding-top: 30px;

    /* margin-top: 30px; */
  }
  .tell-story__var {
    font-size: 16px;
    line-height: 20px;
  }
}
@media (max-width: 1024px) {
  .tell-story__column {
    font-size: 13px;
    line-height: 16px;
    padding-top: 0;
  }

  .tell-story {
    max-width: 100%;
    padding-bottom: 80px;
    padding-top: 80px;
  }
  .tell-story__title {
    font-size: 24px;
    line-height: 28px;
    width: 100%;
    max-width: 288px;
  }
  .tell-story__var {
    font-size: 15px;
    line-height: 19px;
  }
  .tell-story__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
}
@media (max-width: 768px) {
  .tell-story {
    padding-top: 80px;
    padding-bottom: 80px;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
  }

  .tell-story__container {
    width: 380px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tell-story__title {
    /* text-align: left; */
    width: 100%;
    text-align: center;
    font-size: 18px;
    line-height: 21px;
  }
  .tell-story__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
  .tell-story__column {
    font-size: 13px;
    line-height: 16px;
    /* margin-top: 26px; */
    padding-top: 0;
  }
  .tell-story__var {
    font-size: 13px;
    line-height: 16px;
  }
  .tell-story__column_var {
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 24px;
  }
  .tell-story__var {
    margin-right: 30px;
  }

  .tell-story__var_type_active {
    border-bottom: 2px solid #613a93;
    padding-bottom: 2px;
  }
  .btn {
    margin-top: 50px;
  }
}
@media (max-width: 425px) {
  .tell-story {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 50px;
    width: 100%;
    max-width: 100%;
  }

  .tell-story__container {
    width: 100%;
  }
  .tell-story__title {
    text-align: left;
    font-size: 18px;
    line-height: 21px;
  }
  .tell-story__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
  .tell-story__column {
    margin-top: 16px;
  }

  .tell-story__column_var {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .btn {
    margin-top: 30px;
  }
  .submit-btn_mix {
    width: 100%;
  }
}
</style>
