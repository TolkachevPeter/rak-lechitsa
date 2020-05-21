<template>
  <section class="tellStory">
    <div class="container">
      <div class="tellStory__container">
        <div class="tellStory__column">
          <h2 class="title">{{ title }}</h2>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
        <div class="tellStory__column var__column">
          <p
            class="about__var"
            :class="[
              'tellStory__var',
              { tellStory__var_type_active: isActiveText['1'] },
            ]"
            @click="changeVar(1)"
          >
            1-й вариант
          </p>
          <p
            class="about__var"
            :class="[
              'tellStory__var',
              { tellStory__var_type_active: isActiveText['2'] },
            ]"
            @click="changeVar(2)"
          >
            2-й вариант
          </p>
        </div>
        <div class="tellStory__column">
          <p class="subtitle tellStory__select-var">{{ textVar[0] }}</p>
          <submit-btn class="btn submit-btn_mix" @click="$emit('click')">{{
            btnText[isActiveResult]
          }}</submit-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../components/ui/Button';
export default {
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
      return (this.textVar = [this.textBlocks[1].text1]);
    } else {
      this.isActiveText = { 1: false, 2: true };
      return (this.textVar = [this.textBlocks[2].text1, '']);
    }
  },

  methods: {
    changeVar(variant = 1) {
      if (variant === 2) {
        this.isActive = 2;
        this.isActiveText = { 1: false, 2: true };
        this.textVar = [this.textBlocks[2].text1, ''];
      } else {
        this.isActive = 1;
        this.isActiveText = { 1: true, 2: false };
        this.textVar = [this.textBlocks[1].text1];
      }
      return this.textVar;
    },
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

.tellStory__container {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 1fr 48%;
  column-gap: 40px;
}
.tellStory {
  background-color: #f7f7f7;
}
.tellStory__column {
  display: flex;
  flex-direction: column;
}
.title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}
.subtitle {
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-top: 32px;
}
.tellStory__var {
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
.tellStory__var_type_active {
  font-weight: 500;
  color: #000000;
  cursor: default;
}
.tellStory__select-var {
  min-height: 88px;
  margin-top: 0;
}
.btn {
  margin-top: 78px;
}
.container {
  margin: 0 auto;
  max-width: 1320px;
}
@media (max-width: 1440px) {
  .container {
    max-width: 92%;
  }
}
@media (max-width: 1280px) {
  .submit-btn_mix {
    width: 230px;
  }
  .title {
    font-size: 28px;
    line-height: 32px;
  }
  .subtitle {
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
  }
  .tellStory__var {
    font-size: 16px;
    line-height: 20px;
  }
}
@media (max-width: 1024px) {
  .subtitle {
    font-size: 13px;
    line-height: 16px;
  }

  .container {
    max-width: 90%;
  }
  .title {
    font-size: 24px;
    line-height: 28px;
  }
  .tellStory__var {
    font-size: 15px;
    line-height: 19px;
  }
}
@media (max-width: 768px) {
  .tellStory__container {
    width: 380px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    text-align: center;
  }
  .subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-top: 26px;
  }
  .tellStory__var {
    font-size: 13px;
    line-height: 16px;
  }
  .var__column {
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 24px;
  }
  .tellStory__var {
    margin-right: 30px;
  }

  .tellStory__var_type_active {
    border-bottom: 2px solid #613a93;
    padding-bottom: 2px;
  }
  .btn {
    margin-top: 50px;
  }
}
@media (max-width: 425px) {
  .tellStory__container {
    width: 100%;
  }
  .title {
    text-align: left;
    font-size: 18px;
    line-height: 21px;
  }
  .subtitle {
    margin-top: 16px;
  }
  .tellStory__var {
  }
  .var__column {
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
