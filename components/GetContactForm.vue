<template>
  <div class="popup">
    <h2 class="popup__title">Оставьте контакт для&nbsp;связи</h2>
    <img
      @click="$emit('closeClick')"
      src="/popupCross.svg"
      alt
      class="popup__close"
    />
    <p class="popup__subtitle">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <form action class="form">
      <h3 class="form__question">{{ questions.name }}</h3>
      <input class="form__input" v-bind:placeholder="placeholders.name" />
      <div class="form__contacts-container">
        <div class="form__contact">
          <h3 class="form__question">{{ questions.email }}</h3>
          <input class="form__input" v-bind:placeholder="placeholders.email" />
        </div>
        <div class="form__contact">
          <h3 class="form__question">{{ questions.phone }}</h3>
          <input class="form__input" v-bind:placeholder="placeholders.phone" />
        </div>
      </div>
      <h3 class="form__question">{{ questions.type }}</h3>
      <input class="form__input" v-bind:placeholder="placeholders.type" />
      <div class="popup__footer">
        <form-btn
          type="submit"
          @submit.prevent="$emit('closeClick')"
          class="form__button"
          >Отправить</form-btn
        >

        <!-- <p class="popup__policy">
          {{ policyText }}
          <a
            href="../policy"
            target="_blank"
            class="popup__policy-link"
          >{{ policyLink }}</a> 
        </p>-->

        <p :class="['popup__policy', 'popup__policy_show']">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link class="popup__policy-link" to="/policy" target="_blank"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import popupButton from '@/components/ui/popupButton';

export default {
  components: {
    'form-btn': popupButton,
  },
  data() {
    return {
      placeholders: {
        name: 'Напишите тут',
        email: 'pochta@example.com',
        phone: '+7 000 000 00 00',
        type: 'Телефон / почта и удобное время',
      },
      questions: {
        name: 'Как вас зовут?',
        email: 'Электронная почта',
        phone: 'Телефон',
        type:
          'Напишите, если есть предпочтительный способ связи и удобное время',
      },
      policyText: 'Нажимая на кнопку «отправить», вы даете согласие на',
      policyLink: 'обработку персональных данных',
    };
  },
};
</script>

<style scoped>
.popup {
  transform: translate(-50%, -50%);
  position: fixed;
  left: 50%;
  top: 50%;
  width: 70%;
  padding: 40px;
  background: #fff;
  z-index: 2;
}
.popup__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}
.popup__close {
  position: fixed;
  top: 40px;
  right: 40px;
  cursor: pointer;
}
.popup__subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  color: #000;
  padding-right: 30px;
}
.form {
  margin-top: 40px;
}
.form__input {
  border: none;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 5px;
  padding-top: 5px;
  width: 100%;
  margin-top: 40px;
}
.form__input::placeholder {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666;
}
.form__question {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  margin-top: 40px;
}
.form__contacts-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* 
.form__contacts-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */

.form__contact {
  width: calc((100% - 40px) / 2);
}
.popup__footer {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
}
.form__button {
  margin-right: 30px;
}

.popup__policy {
  display: none;
  height: 48px;
  /* padding-left: 30px; */
  font-size: 14px;
  line-height: 17px;
  color: #666;
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 378px;
  width: 95%;
}
.popup__policy_show {
  display: block;
}
.popup__policy-link {
  border-bottom: 1px solid currentColor;
  color: #666;
  text-decoration: none;
}

/* 
.popup__policy {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  max-width: 378px;
}
.popup__policy-link {
  color: #666;
} */
@media screen and (max-width: 1280px) {
  .popup {
    top: 90px;
    width: 62.5%;
  }
  .popup__title {
    font-size: 28px;
    line-height: 32px;
  }
  .popup__subtitle {
    font-size: 16px;
    line-height: 22px;
  }
  .form__question {
    font-size: 16px;
    line-height: 22px;
  }
  .form__input::placeholder {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 1280px) {
  .popup {
    width: 78%;
  }
}
@media screen and (max-width: 768px) {
  .popup {
    width: 75.5%;
    top: 157px;
  }
  .form__question,
  .popup__subtitle {
    font-size: 15px;
    line-height: 19px;
  }
  .popup__title {
    font-size: 26px;
    line-height: 30px;
    max-width: 70%;
  }
  .form__input::placeholder {
    font-size: 15px;
    line-height: 19px;
  }
  .popup__policy {
    font-size: 11px;
    line-height: 13px;
  }
}
@media (max-width: 600px) {
  .popup {
    width: 95%;
    top: 17px;
    padding: 15px;
  }
  .popup__title {
    font-size: 18px;
    line-height: 21px;
  }
  .popup__close {
    top: 15px;
    right: 15px;
  }
  .popup__subtitle,
  .form__question {
    font-size: 13px;
    line-height: 16px;
  }
  .popup__policy {
    font-size: 11px;
    line-height: 13px;
    margin-top: 10px;
  }
  .popup__footer {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
  }
  .form__button {
    margin-right: 0;
    width: 100%;
  }
  .form__contacts-container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
