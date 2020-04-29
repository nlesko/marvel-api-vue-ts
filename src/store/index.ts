import Vue from 'vue';
import Vuex from 'vuex';

import Comics from '@/store/modules/comics';
import Characters from '@/store/modules/characters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Comics,
    Characters,
  },
});

export default store;
