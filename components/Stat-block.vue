<template>
  <div class="card">
    <!-- <div>
created_at:"2020-05-21T09:14:16.633Z"
currentValue:48918000
description:"Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек."
id:1
maxValue:150000000
oldValue:0
source:"Левада-Центр 2018"
summary:"1 из 3"
updated_at:"2020-05-21T09:14:16.633Z"

created_at:"2020-05-21T09:15:58.466Z"
currentValue:null
description:"На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет."
id:3
maxValue:100
oldValue:null
source:"МНИОИ Герцена 2018"
summary:"↑28%"
updated_at:"2020-05-21T09:15:58.466Z

    </div>-->

    <p class="card-text">{{ statData.description }}</p>
    <progressBar
      v-if="statData.currentValue && statData.maxValue"
      :val="statData.currentValue"
      :maxVal="statData.maxValue"
    />
    <doubleprogressbar
      v-if="statData.oldValueIncr && statData.newValueIncr"
      :oldValue="statData.oldValueIncr"
      :newValue="statData.newValueIncr"
      :maxVal="statData.maxValue"
    />

    <p class="card__digits">{{ statData.summary }}</p>
    <p class="card__digits-src">{{ statData.source }}</p>

    <!-- <p class="card-text">{{statData.title}}</p>
    <progressBar
      v-if="statData.val && statData.maxVal"
      :val="statData.val"
      :maxVal="statData.maxVal"
    />
    <doubleprogressbar
      v-if="statData.oldValueIncr && statData.newValueIncr"
      :oldValue="statData.oldValueIncr"
      :newValue="statData.newValueIncr"
      :maxVal="statData.maxVal"
    />

    <p class="card__digits">{{statData.digits}}</p>
    <p class="card__digits-src">{{statData.digitssrc}}</p>-->
  </div>
</template>

<script>
import progressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';
export default {
  props: {
    statData: Object,
  },
  components: {
    progressBar: progressBar,
    doubleprogressbar: DoubleProgressBar,
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 300px;

  margin: 0;
  padding: 0;
  padding: 20px;
  background: #fff;
  border: 1px solid #efefef;
  box-sizing: border-box;
}
.card-text {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  padding: 0;
  height: 124px;
  color: #000;
}

.card__digits {
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
.card__digits-src {
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
  .card {
    width: 265px;
    height: 265px;
    padding: 10px;
  }

  .card-text {
    font-size: 12px;
    line-height: 16px;
    height: 104px;
  }
}
@media (max-width: 1024px) {
  .card {
    width: 208px;
    height: 208px;
    padding: 10px;
  }

  .card-text {
    font-size: 10px;
    line-height: 14px;
    height: 102px;
  }
  .card__digits {
    font-size: 26px;
    line-height: 30px;
    padding-top: 10px;
  }
  .card__digits-src {
    font-size: 10px;
    line-height: 14px;
    padding-top: 10px;
  }
}
@media (max-width: 768px) {
  .card {
    width: 216px;
    height: 216px;
  }
}

@media (max-width: 320px) {
}
</style>
