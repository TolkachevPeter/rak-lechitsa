<template>
  <section class="statistics">
    <section-title
      class="section-title-mix"
      :title="dataObj.title"
    ></section-title>
    <!-- <section-title :title="blocksData(8).title"></section-title> -->
    <div class="statistics__container-overflow">
      <div class="statistics__container">
        <stat-block
          v-for="(statData, index) in statDataObj"
          :key="index"
          :statData="statData"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import progressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';
import StatBlock from '@/components/Stat-block';
export default {
  components: {
    'section-title': SectionTitle,
    progressBar: progressBar,
    doubleprogressbar: DoubleProgressBar,
    'stat-block': StatBlock,
  },

  props: {
    statDataObj: {},
    dataObj: {},
  },
};
</script>

<style scoped>
.section-title-mix.section-title {
  width: 413px;
  text-align: left;
  padding: 0;
  margin: 0;
  /* padding-top: 100px; */
  margin-bottom: 70px;
}

.statistics {
  /* position: relative;
  overflow: scroll; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  background: #fff;
}

.statistics__container-overflow {
  position: relative;
  overflow: scroll;
  width: 100%;
  max-width: 1320px;
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
  /* .statistics {
    position: relative;
    overflow: scroll;
    //height: 265px;
  } */

  .section-title-mix.section-title {
    /* width: 413px;
  text-align: left;
  padding: 0;
  margin: 0; */
    /* padding-top: 100px; */
    margin-bottom: 60px;
  }

  .statistics__container {
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
  .section-title-mix.section-title {
    /* width: 413px;
  text-align: left;
  padding: 0;
  margin: 0; */
    /* padding-top: 100px; */
    margin-bottom: 46px;
  }

  .statistics {
    /* height: 208px; */
  }

  .statistics__container {
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
    align-items: center;
  }

  .section-title-mix.section-title {
    text-align: center;
    margin-bottom: 60px;
  }

  .statistics__container {
    position: relative;
    overflow: scroll;
    /* padding-bottom: 80px; */
    /* left: 0;
    bottom: 80px; */
    width: 924px;
    height: 216px;
  }

  .statistics__card {
    width: 216px;
    height: 216px;
  }
}

@media (max-width: 320px) {
  .section-title-mix.section-title {
    text-align: left;
    margin-bottom: 30px;
  }
}
</style>
