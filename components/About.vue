<template>
  <section class="about">
    <div class="container">
      <h2 class="about__title">{{ dataObj.hashtag }}</h2>
      <h3 class="about__subtitle">{{ dataObj.title }}</h3>
      <div class="about__container">
        <div class="about__column">
          <!-- <p class="about__text about__text_small" v-html="dataObj.text"></p> -->
          <div
            class="about__text about__text_small"
            v-html="dataObj.text"
          ></div>
        </div>
        <div class="about__column about__column_variants">
          <p
            :class="[
              'about__var',
              { about__var_type_active: isActiveText['1'] },
            ]"
            @click="changeVar(1)"
          >
            {{ dataObj.extraTexts[0].title }}
          </p>
          <p
            :class="[
              'about__var',
              { about__var_type_active: isActiveText['2'] },
            ]"
            @click="changeVar(2)"
          >
            {{ dataObj.extraTexts[1].title }}
          </p>
        </div>
        <div class="about__column">
          <p class="about__text" v-html="textVar"></p>
          <!-- <p class="about__text" v-html="textVar[1]"></p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dataObj: {},
  },
  mounted() {
    if (this.isActive == 1) {
      this.isActiveText = { 1: true, 2: false };
      return (this.textVar = this.dataObj.extraTexts[0].text);
      // return (this.textVar = [this.replacedBr[0], '']);
    } else {
      this.isActiveText = { 1: false, 2: true };
      return (this.textVar = this.dataObj.extraTexts[1].text);
      // return (this.textVar = [this.replacedBr[1], '']);
    }
  },

  methods: {
    changeVar(variant = 1) {
      if (variant === 2) {
        this.isActive == 2;
        this.isActiveText = { 1: false, 2: true };
        this.textVar = this.dataObj.extraTexts[1].text;
        // this.textVar = [this.replacedBr[0], ''];
      } else {
        this.isActive == 1;
        this.isActiveText = { 1: true, 2: false };
        this.textVar = this.dataObj.extraTexts[0].text;
        // this.textVar = [this.replacedBr[1], ''];
      }
      return this.textVar;
    },
  },
  data() {
    return {
      replacedBr: [],
      aboutProject:
        'Этот проект был создан благотворительным фондом Константина Хабенского.',
      isActive: 1,
      isActiveText: { 1: 'true', 2: 'false' },
      textVar: String,
      textBlocks: {
        1: {
          text1: `Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но
          одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
          и лучшее доказательство — люди с их неизлечимыми особенностями,
          которые сумели победить рак.`,

          text2: `Рак лечится — проект Благотворительного Фонда Константина Хабенского
          и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
          людей к раку и заставить каждого поверить: онкологическое
          заболевание — это не приговор.`,
        },

        2: {
          text1:
            'Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.',
        },
      },
    };
  },
};
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #613a93;
  min-height: 650px;
}
.about__title {
  color: white;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  /* padding-top: 90px; */
  margin-bottom: 70px;
}
.about__subtitle {
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: left;
  padding: 0;
  margin: 0;
  padding-top: 0;
  margin-bottom: 32px;
}

.about__container {
  display: grid;
  grid-template-columns: 25% 1fr 48%;
  column-gap: 40px;
}
.about__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  padding: 0;
  margin: 0;
  /* padding-bottom: 20px; */
}
.about__column {
  display: flex;
  flex-direction: column;
}
.about__var {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
  text-align: right;
  cursor: pointer;
  margin: 0;
  margin-bottom: 10px;
}

.about__var_type_active {
  font-weight: 500;
  color: #fff;
  cursor: default;
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
  .about {
    min-height: 658px;
  }
  .about__title {
    font-size: 58px;
    line-height: 70px;
  }
  .about__subtitle {
    font-size: 28px;
    line-height: 32px;
  }
}
@media (max-width: 1024px) {
  .about {
    min-height: 591px;
  }
  .container {
    max-width: 90%;
  }
  .about__title {
    font-size: 52px;
    line-height: 63px;
  }
  .about__subtitle {
    font-size: 24px;
    line-height: 28px;
  }
  .about__text {
    font-size: 15px;
    line-height: 19px;
  }
}
@media (max-width: 768px) {
  .about {
    min-height: 660px;
  }
  .about__container {
    max-width: 380px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about__title {
    display: none;
  }
  .about__subtitle {
    text-align: center;
  }
  .about__text {
    font-size: 13px;
    line-height: 16px;
  }
  .about__column_variants {
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 24px;
  }
  .about__var {
    margin-right: 30px;
    font-size: 15px;
    line-height: 19px;
  }
  .about__var_type_active {
    border-bottom: 2px solid currentColor;
    padding-bottom: 2px;
  }
}
@media (max-width: 320px) {
  .about__container {
    width: 100%;
    padding-bottom: 0;
  }
  .about__subtitle {
    text-align: left;
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 16px;
  }
  .about__var {
    font-size: 13px;
    line-height: 19px;
  }
  .about__column_variants {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .about__var_type_active {
    font-weight: 500;
    color: #fff;
    cursor: default;

    border-bottom: 2px solid currentColor;
    padding-bottom: 2px;
  }
  .about__text_small {
    font-size: 13px;
    line-height: 16px;
  }
  .about__text {
    font-size: 15px;
    line-height: 19px;
  }
}
</style>
