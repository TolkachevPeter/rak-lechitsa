<template>
  <section class="about">
    <h2 class="about__title">#РАКЛЕЧИТСЯ</h2>
    <div class="about__subtitle-container">
      <h3 class="about__subtitle">О проекте</h3>
    </div>
    <div class="about__container">
      <div class="about__column">
        <p class="about__text">{{ aboutProject }}</p>
      </div>
      <div class="about__column">
        <p
          class="about__var"
          :class="{ about__var_type_active: isActive1 }"
          @click="changeVar(1)"
        >
          Рак Лечится
        </p>
        <p
          class="about__var"
          :class="{ about__var_type_active: isActive2 }"
          @click="changeVar(2)"
        >
          Фонд Хабенского
        </p>
      </div>
      <div class="about__column">
        <p class="about__text">{{ varText1 }}</p>
        <p class="about__text">{{ varText2 }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    changeVar(variant) {
      if (variant === 2) {
        this.isActive2 = true;
        this.isActive1 = false;
        this.varText1 = `Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.`;
        this.varText2 = ``;
      } else {
        this.isActive1 = true;
        this.isActive2 = false;
        this.varText1 = `Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но
          одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
          и лучшее доказательство — люди с их неизлечимыми особенностями,
          которые сумели победить рак.`;
        this.varText2 = `Рак лечится — проект Благотворительного Фонда Константина Хабенского
          и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
          людей к раку и заставить каждого поверить: онкологическое
          заболевание — это не приговор.`;
      }
    },
  },
  data() {
    return {
      aboutProject:
        'Этот проект был создан благотворительным фондом Константина Хабенского.',
      varText1: `Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но
          одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
          и лучшее доказательство — люди с их неизлечимыми особенностями,
          которые сумели победить рак.`,
      varText2: `Рак лечится — проект Благотворительного Фонда Константина Хабенского
          и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
          людей к раку и заставить каждого поверить: онкологическое
          заболевание — это не приговор.`,
      isActive1: true,
      isActive2: false,
    };
  },
};
</script>

<style scoped>
.about {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* min-height: 200px; */
  background: #613a93;
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
  padding-top: 90px;
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
.about__subtitle-container {
  max-width: 1320px;
  width: 90%;
}
.about__container {
  width: 90%;
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% 1fr 48%;
  column-gap: 40px;
  padding-bottom: 80px;
}
.about__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  padding: 0;
  margin: 0;
  padding-bottom: 20px;
}
.about__column {
  /* width: 200px;
        height: 400px; */
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
  color: #ffffff;
  cursor: default;
}
</style>
