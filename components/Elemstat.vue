<template>
  <section class="statistics">
    <h3 class="statistics__subtitle">Статистика по онкозаболеваниям</h3>
    <div class="statistics__container">
      <div class="statistics__card">
        <p class="statistics__card-text">
          Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
          000 человек.
        </p>

        <progressBar :val="33.3" :maxVal="maxVal" />
        <p class="statistics__digits">1 из 3</p>
        <p class="statistics__digits-src">Левада-Центр 2018</p>
      </div>

      <div class="statistics__card">
        <p class="statistics__card-text">2,6% Россиян имеют онкозаболевания.</p>

        <progressBar :val="2.6" :maxVal="maxVal" />
        <p class="statistics__digits">3 700 000</p>
        <p class="statistics__digits-src">Росстат 2018</p>
      </div>

      <div class="statistics__card">
        <p class="statistics__card-text">
          На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.
        </p>

        <doubleprogressbar
          :oldValue="oldValueIncr"
          :newValue="newValueIncr"
          :maxVal="maxVal"
        />
        <p class="statistics__digits">↑28%</p>
        <p class="statistics__digits-src">МНИОИ Герцена 2018</p>
      </div>

      <div class="statistics__card">
        <p class="statistics__card-text">
          На 25% снизилась смертность в течение первого года после постановки
          диагноза.
        </p>

        <doubleprogressbar
          :oldValue="oldValueDecr"
          :newValue="newValueDecr"
          :maxVal="maxVal"
        />

        <p class="statistics__digits">↓25%</p>
        <p class="statistics__digits-src">МНИОИ Герцена 2018</p>
      </div>
    </div>
  </section>
</template>

<script>
import progressBar from '~/components/ui/ProgressBar';
import DoubleProgressBar from '~/components/ui/DoubleProgressBar';
export default {
  components: {
    progressBar: progressBar,
    doubleprogressbar: DoubleProgressBar,
  },
  props: [
    'maxVal',
    'oldValueIncr',
    'newValueIncr',
    'oldValueDecr',
    'newValueDecr',
  ],
};
</script>

<style scoped>
.statistics {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 600px;
  background: #ffffff;
}
.statistics__subtitle {
  max-width: 300px;
  width: 22%;
  color: #000000;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: left;
  padding: 0;
  margin: 0;
  padding-top: 100px;
  margin-bottom: 70px;
}
.statistics__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-bottom: 100px;
}
.statistics__card {
  width: calc((100% - 120px) / 4);
  min-height: 300px;
  margin: 0;
  padding: 0;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
}
.statistics__card-text {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  padding: 0;
  height: 124px;
  color: #000;
}
.statistics__digits {
  width: 100%;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  color: #000000;
}
.statistics__digits-src {
  width: 100%;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  color: #666666;
}
@media (max-width: 1280px) {
  .statistics__subtitle {
    font-size: 28px;
    line-height: 32px;
    padding-top: 90px;
    margin-bottom: 60px;
  }
}
@media (max-width: 1024px) {
  .statistics__subtitle {
    font-size: 24px;
    line-height: 28px;
    padding-top: 80px;
    margin-bottom: 46px;
  }
  .statistics__card-text {
    font-size: 10px;
    line-height: 14px;
  }
  .statistics__digits {
    font-size: 26px;
    line-height: 30px;
    padding-top: 10px;
  }
  .statistics__digits-src {
    font-size: 10px;
    line-height: 14px;
    padding-top: 10px;
  }
}
@media (max-width: 768px) {
  .statistics {
    position: relative;
    overflow: scroll;
  }
  .statistics__subtitle {
    width: 380px;
    text-align: center;
    margin: 0 auto;
  }
  .statistics__container {
    position: absolute;
    padding-bottom: 0;
    left: 0;
    bottom: 80px;
    width: 924px;
  }
  .statistics__card {
    width: 216px;
    margin-right: 20px;
  }
}

@media (max-width: 320px) {
  .statistics__subtitle {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
