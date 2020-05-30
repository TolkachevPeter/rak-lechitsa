<template>
  <section class="statistics">
    <div class="statistics__container">
      <!-- <stat-block
        v-for="(statData, index) in statDataObj"
        :key="statData[index+1]"
        :statData="statData"
      />-->

      <stat-block
        v-for="(statData, index) in statDataObj"
        :key="index"
        :statData="statData"
      />
    </div>
  </section>
</template>

<script>
import progressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';
import StatBlock from '@/components/Stat-block';
export default {
  components: {
    progressBar: progressBar,
    doubleprogressbar: DoubleProgressBar,
    'stat-block': StatBlock,
  },

  props: {
    statDataObj: {},
  },
};
</script>

<style scoped>
.statistics {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  background: #fff;
}

.statistics__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.statistics__card {
  width: 300px;
  height: 300px;

  margin: 0;
  padding: 0;
  padding: 20px;
  background: #fff;
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
  color: #000;
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
  color: #666;
}
@media (max-width: 1280px) {
  .statistics {
    position: relative;
    overflow: scroll;
    height: 265px;
  }

  .statistics__card {
    width: 265px;
    height: 265px;
    padding: 10px;
  }

  .statistics__card-text {
    font-size: 12px;
    line-height: 16px;
    height: 104px;
  }
}
@media (max-width: 1024px) {
  .statistics {
    height: 208px;
  }

  .statistics__card {
    width: 208px;
    height: 208px;
    padding: 10px;
  }

  .statistics__card-text {
    font-size: 10px;
    line-height: 14px;
    height: 102px;
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
    height: 216px;
  }
  .statistics__container {
    /* padding-bottom: 80px; */
    left: 0;
    bottom: 80px;
    width: 924px;
  }
  .statistics__card {
    width: 216px;
    height: 216px;
  }
}

@media (max-width: 320px) {
}
</style>
