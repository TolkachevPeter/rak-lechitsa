<template>
  <div class="quiz-comp">
    <img
      src="/popupCross.svg"
      alt
      class="quiz-comp__cross"
      @click="$emit('closeClick')"
    />
    <!-- <div class="quiz" @click="showCurrQ"> -->
    <div class="quiz">
      <div class="quiz__container" v-if="!showFinalScreen">
        <h3 class="quiz__title">{{ currentQuestion.title }}</h3>
        <p class="quiz__question">
          <span class="quiz__question-main">
            {{ currentQuestion.question }}
          </span>
          <span
            v-if="currentQuestion.questionAdditional"
            class="quiz__question-additional"
            >{{ currentQuestion.questionAdditional }}</span
          >
        </p>

        <my-input
          placeholder="Напишите тут"
          :bottomborder="true"
          class="quiz__input"
          v-model="answer"
        />
      </div>
      <div class="quiz__buttons-container" v-if="!showFinalScreen">
        <div class="quiz__buttons">
          <my-button
            :disabled="prevButtonDisabled"
            class="my-button_mix-grey"
            @click="prevQuestion"
            >Назад</my-button
          >
          <my-button class="my-button_mix" @click="nextQuestion">{{
            buttonLabel
          }}</my-button>
        </div>
        <p :class="['quiz__policy', { quiz__policy_show: isLastStep }]">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link class="quiz__policy-link" to="/policy" target="_blank"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
      <h3 class="quiz__title quiz__title_align_center" v-if="showFinalScreen">
        Спасибо что приняли участие!
      </h3>

      <my-button
        class="my-button_mix my-button_mix_align_center"
        @click="$emit('closeClick')"
        v-if="showFinalScreen"
        >Закрыть</my-button
      >
    </div>
  </div>
</template>

<script>
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default {
  components: {
    'my-input': Input,
    'my-button': Button,
  },
  methods: {
    async nextQuestion() {
      await this.$store.dispatch(
        'quiz/NEXT_QUESTION',
        {
          answer: this.answer,
        },
        this.questionsNumber
      );
      this.answer = this.initialAnswer;
      if (this.isLastStep) {
        this.showFinalScreen = true;
      }
    },
    async prevQuestion() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.initialAnswer;
    },
    // showCurrQ() {
    //   console.log(this.currentQuestion);
    // },
  },

  computed: {
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion];
    },
    initialAnswer() {
      const { quiz } = this.$store.state;
      const { currentQuestion, answers } = quiz;
      return answers[currentQuestion] || '';
    },

    prevButtonDisabled() {
      const { quiz } = this.$store.state;
      const { currentQuestion } = quiz;
      return currentQuestion === 1;
    },
    nextButtonDisabled() {
      const { quiz } = this.$store.state;
      const { currentQuestion } = quiz;
      return currentQuestion === 12;
    },
    isLastStep() {
      const { quiz } = this.$store.state;
      const { currentQuestion } = quiz;
      return currentQuestion === 12;
    },
    buttonLabel() {
      const { quiz } = this.$store.state;
      const { currentQuestion } = quiz;

      if (currentQuestion === 12) return 'Отправить';
      else return 'Далее';
    },
  },
  data() {
    return {
      answer: '',
      showFinalScreen: false,
      questionsNumber: 12,
      //   buttonLabel: 'Далее',
    };
  },
};
</script>

<style scoped>
.quiz-comp {
  padding: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;

  background: #fff;
  z-index: 2;
  transform: translate(-50%, -50%);
}

.quiz-comp__cross {
  width: 100%;
  position: fixed;
  top: 35px;
  left: calc(100% - 50px);
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.quiz__buttons-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

/* .quiz__buttons-container.quiz__buttons-container_align_center {
  justify-content: center;
} */

.quiz__policy {
  display: none;
  height: 48px;
  padding-left: 30px;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 378px;
}
.quiz__policy_show {
  display: block;
}
.quiz__policy-link {
  border-bottom: 1px solid currentColor;
  color: #666;
  text-decoration: none;
}

.my-button_mix {
  width: 226px;
}

.my-button_mix_align_center {
  margin: 0 auto;
}

.my-button_mix-grey {
  padding-left: 0;
  padding-right: 10px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
}

.my-button_mix-grey:hover {
  color: #c0c0c0;
  background: none;
}

.quiz__container {
  width: 100%;
}

.quiz {
  padding: 40px;
  width: 920px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.quiz__title {
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: flex-end;
  color: #000;
}

.quiz__title_align_center {
  justify-content: center;
  text-align: center;
}

.quiz__question {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  padding-top: 40px;
}

.quiz__question-main {
}

.quiz__question-additional {
  /* font-size: 18px;
  line-height: 24px; */
  color: #666;
}

.quiz__input {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  line-height: 24px;
  color: #666;
  margin-top: 100px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
}

.quiz__buttons {
  display: flex;
  justify-content: space-between;
  height: 48px;
  width: 304px;
}

@media (max-width: 1280px) {
  .quiz {
    width: 800px;
    min-height: 520px;
  }
}
@media (max-width: 1024px) {
  .quiz {
    width: 800px;
    height: 520px;
  }
}

@media (max-width: 768px) {
  .quiz-comp {
    max-width: 580px;
    width: 95%;
    height: 520px;
  }
  .quiz {
    max-width: 580px;
    width: 100%;
    height: 520px;
    padding: 40px;
  }
  .quiz__buttons-container {
    flex-direction: column;
    padding-bottom: 30px;
  }

  .quiz__question {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #000;
    padding-top: 30px;
  }

  .quiz__policy {
    /* margin: 0; */
    padding: 0;
    padding-top: 20px;
    width: 95%;
  }

  .my-button_mix {
    width: 206px;
    font-size: 13px;
    line-height: 16px;
  }
  .my-button_mix-grey {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__buttons {
    width: 95%;
    max-width: 304px;
  }
  .quiz__input {
    margin-top: 50px;
  }
}

@media (max-width: 500px) {
  .quiz-comp__cross {
    top: 13px;
    left: calc(100% - 35px);
  }
}
@media (max-width: 320px) {
  .quiz-comp {
    width: 290px;
    height: 520px;
  }
  .quiz {
    width: 100%;
    height: 520px;
    padding: 15px;
  }

  .quiz__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    padding-top: 15px;
  }

  .quiz__question {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #000;
    padding-top: 30px;
  }
  .quiz__policy {
    width: 95%;
  }

  .my-button_mix {
    width: 190px;
    font-size: 13px;
    line-height: 16px;
  }
  .my-button_mix-grey {
    font-size: 13px;
    line-height: 16px;
  }
  .quiz__buttons {
    width: 95%;
  }
  .quiz__input {
    margin-top: 50px;
  } /*
  .quiz__title.quiz__title_align_center {
    justify-content: center;
  }
  .quiz__buttons-container.quiz__buttons-container_align_center {
    justify-content: center;
  } */
}
</style>
