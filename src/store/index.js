import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    title: ''
  };

const getters = {};

const mutations = {
    updateTitleState(state, data){
        state.title = data;
    }
};

const actions = {};

var store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;