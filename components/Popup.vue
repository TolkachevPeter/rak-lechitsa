<template>
  <div class="popup">
    <div class="popup__headings">
      <h3 class="popup__title">Шаг {{ step }} из {{ stepsSum }}</h3>
      <img src="../static/popupCross.svg" alt="" class="popup__cross" />
    </div>

    <p class="popup__question popup__question">
      <span class="popup__question_main">{{ questions[0].question }}</span
      >{{ questions[0].explanation }}
    </p>
    <form class="popup__form">
      <input type="text" class="popup__input" placeholder="Напишите тут" />
      <div class="popup__form-container">
        <a
          href=""
          class="popup__goback"
          :class="{ goback_active: isGobackActive }"
          >Назад</a
        >
        <popupButton @submit.prevent="xxx" class="popupButton" type="submit">{{
          popupButtonText
        }}</popupButton>
        <p class="popup__policy" :class="{ showPolicy: needPolicy }">
          {{ policyText }}

          <a href="../policy" class="popup__policy-link">{{ policyLink }}</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import popupButton from '../components/ui/popupButton';
export default {
  components: {
    popupButton: popupButton,
  },
  data() {
    return {
      popupButtonText: `Далее`,
      step: 1,
      isGobackActive: false,
      needPolicy: true,
      policyText: 'Нажимая на кнопку «отправить», вы даете согласие на',
      policyLink: 'обработку персональных данных',
      stepsSum: 12,
      questions: [
        { question: 'Как вас зовут?', explanation: '' },
        {
          question: 'Было ли у вас онкологическое заболевание? ',
          explanation:
            'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
        },
        {
          question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
          explanation:
            'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
        },
        {
          question:
            'На что, кроме семьи, быта и работы, Вы тратите свое время?',
          explanation: '',
        },
        {
          question: 'Какие сильные увлечения у Вас есть? ',
          explanation:
            'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
        },
        {
          question:
            'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
          explanation: '',
        },
        {
          question:
            'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно? ',
          explanation: 'Кроме необходимых, таких, как чистка зубов.',
        },
        {
          question:
            'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
          explanation: '',
        },
        {
          question: 'Что Вас успокаивает/умиротворяет лучше всего?',
          explanation: '',
        },
        {
          question:
            'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
          explanation: '',
        },
        { question: 'Как вы обычно проводите выходные?', explanation: '' },
        {
          question: 'Почта или телефон для связи. ',
          explanation:
            'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.popup {
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 920px;
  min-height: 600px;
  background: #ffffff;
  z-index: 2;
  transform: translate(-50%, -50%);
}
.popup__headings {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.popup__cross {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.popup__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}
.popup__question {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
  margin-top: 40px;
}
.popup__question_main {
  font-style: 500;
  color: #000000;
}
.popup__form {
}
.popup__input {
  border: none;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  padding-bottom: 10px;
  margin-top: 110px;
}
.popup__input::placeholder {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
}
.popup__form-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 200px;
}
.popup__goback {
  margin-right: 30px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #c0c0c0;
  cursor: default;
  text-decoration: none;
}
.goback_active {
  color: #666666;
  cursor: pointer;
}
.popupButton {
  margin-right: 30px;
}
.popup__policy {
  display: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}
.showPolicy {
  display: inline;
}
.popup__policy-link {
  color: #666666;
}
</style>
