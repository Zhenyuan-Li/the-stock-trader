import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
<<<<<<< HEAD
import * as actions from './actions'
=======
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})