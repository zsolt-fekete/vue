import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './module/stocks'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks
  }

});
