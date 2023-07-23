import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeMenu: {submenu: [], menuItem: ''},
        swaggerResources: [],
        currentSwaggerJson: {}
    },
    mutations: {
        swaggerResources(state, data) {
            state.swaggerResources = data
        },
        currentSwaggerJson(state, data) {
            state.currentSwaggerJson = data
        },
        activeMenuName(state, data) {
            state.activeMenuName = data
        }
    },
    actions: {}
})
