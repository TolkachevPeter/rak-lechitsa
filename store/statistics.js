import axios from 'axios';

export const state = () => ({
  // statisticsData: STATDATA,
  statisticsData: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const getters = {
  getStatData(state) {
    return state.statisticsData;
  },
};

export const actions = {
  fetchStatistics(state) {
    return axios.get('https://strapi.kruzhok.io/statistics').then(response => {
      return state.commit('setState', {
        name: 'statisticsData',
        value: response.data,
      });
    });
  },
};

// const STATDATA = {
//   maxVal: 100,
//   oldValueIncr: 50,
//   newValueIncr: 64,
//   oldValueDecr: 62.5,
//   newValueDecr: 50,
// };

const STATDATA = {
  1: {
    val: '33.3',
    maxVal: '100',
    title: `Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
000 человек.`,
    digits: '1 из 3',
    digitssrc: 'Левада-Центр 2018',
  },
  2: {
    val: '2.6',
    maxVal: '100',
    title: `2,6% Россиян имеют онкозаболевания.`,
    digits: '3 700 000',
    digitssrc: 'Росстат 2018',
  },
  3: {
    maxVal: '100',
    oldValueIncr: '50',
    newValueIncr: '64',
    title: `На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.`,
    digits: '↑28%',
    digitssrc: 'МНИОИ Герцена 2018',
  },
  4: {
    maxVal: '100',
    oldValueIncr: '62.5',
    newValueIncr: '50',
    title: `На 25% снизилась смертность в течение первого года после постановки
    диагноза.`,
    digits: '↓25%',
    digitssrc: 'МНИОИ Герцена 2018',
  },
};
