<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__three-columns">
        <h3 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h3>
        <div class="footer__column">
          <nav class="menu">
            <ul class="menu__items">
              <li class="menu__item">
                <a href="#" class="menu__link">Главная</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Истории</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__column footer__column_content-info">
          <nav class="menu">
            <ul class="menu__items menu__items_column">
              <li class="menu__item">
                Мы в
                <a
                  href="https://www.instagram.com/raklechitsa/"
                  target="_blank"
                  class="menu__link menu__link_social"
                  >Инстаграме</a
                >
                и
                <a
                  href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
                  target="_blank"
                  class="menu__link menu__link_social"
                  >Youtube</a
                >
              </li>
              <!-- Тут будет попап, но его еще нет в макете -->
              <li class="menu__item">
                <a href="#" target="_blank" class="menu__link">Поделитесь ↗</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="footer__copyrights">
        <p class="footer__project">Рак Лечится 2020</p>
        <p class="footer__copyright">Сделано студентами Яндекс Практикум</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
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

.menu {
  font-family: Inter;
}
.menu__items {
  display: flex;
  list-style: none;
  /* padding-inline-start: 0; */
}

.menu__item {
  padding-right: 40px;
  padding-bottom: 44px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 133%;
  color: #121212;
}

.menu__items_column {
  flex-direction: column;
}
.menu__link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 133%;
  color: #121212;
  text-decoration: none;
}

.menu__link:hover {
  opacity: 0.7;
}

.menu__link_social {
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
  .menu__item {
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
  .menu__items {
    flex-direction: column;
  }

  .menu__item {
    padding-bottom: 14px;
    font-size: 16px;
    line-height: 24px;
  }

  .menu__link {
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
  .footer__project {
    font-size: 13px;
    line-height: 18px;
  }

  .menu__items {
    padding: 0;
  }

  .footer__title {
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 30px;
  }
}
</style>
