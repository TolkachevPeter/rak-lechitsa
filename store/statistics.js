import axios from 'axios';

export const state = () => ({
  statisticsData: STATDATA,
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

const STATDATA = {
  maxVal: 100,
  oldValueIncr: 50,
  newValueIncr: 64,
  oldValueDecr: 62.5,
  newValueDecr: 50,
};
