<template>
  <section class="tellStory">
    <div class="container">
      <div class="tellStory__container">
        <div class="tellStory__column">
          <h2 class="title">{{ title }}</h2>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
        <div class="tellStory__column">
          <p
            class="tellStory__var"
            :class="{ tellStory__var_type_active: isActive1 }"
            @click="changeVar(1)"
          >
            1-й вариант
          </p>
          <p
            class="tellStory__var"
            :class="{ tellStory__var_type_active: isActive2 }"
            @click="changeVar(2)"
          >
            2-й вариант
          </p>
        </div>
        <div class="tellStory__column">
          <p class="subtitle tellStory__select-var">{{ varText }}</p>
          <submit-btn class="btn">{{ btnText }}</submit-btn>
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
  methods: {
    changeVar(variant) {
      if (variant === 2) {
        (this.isActive2 = true),
          (this.isActive1 = false),
          (this.btnText = 'Оставить контакт');
        this.varText =
          'Оставьте контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.';
      } else {
        (this.isActive1 = true),
          (this.isActive2 = false),
          (this.btnText = 'Заполнить форму');
        this.varText = `Заполните подробную форму прямо на сайте и мы опубликуем вашу историю
                    после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
                    испытаете какие-то сложности, воспользуйтесь 2-м вариантом.`;
      }
    },
  },
  data() {
    return {
      title: 'Расскажите свою историю',
      subtitle:
        'Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.',
      varText: `Заполните подробную форму прямо на сайте и мы опубликуем вашу историю
                    после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
                    испытаете какие-то сложности, воспользуйтесь 2-м вариантом.`,
      btnText: `Заполнить форму`,
      isActive1: true,
      isActive2: false,
    };
  },
};
</script>

<style scoped>
.tellStory__container {
  width: 100%;
  /* max-width: 1320px;
  margin: 0 auto; */
  display: grid;
  grid-template-columns: 25% 1fr 48%;
  column-gap: 40px;
}
.tellStory {
  background-color: #f7f7f7;
  padding-top: 100px;
  padding-bottom: 100px;
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
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
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
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
}
</style>
