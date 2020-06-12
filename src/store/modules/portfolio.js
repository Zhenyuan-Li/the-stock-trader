const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id === stockId)
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
<<<<<<< HEAD
        state.funds -= stockPrice * quantity
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
=======
        state.funds += stockPrice * quantity
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5
        const record = state.stocks.find(element => element.id === stockId)
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
<<<<<<< HEAD
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
=======
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5
    }
}

const actions = {
<<<<<<< HEAD
    sellStock({ commit }, order) {
=======
    sellStock({commit}, order) {
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5
        commit('SELL_STOCK', order)
    }
}

const getters = {
<<<<<<< HEAD
    stockPortfolio(state, getters) {
=======
    stockPortfolio (state, getters) {
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
<<<<<<< HEAD
    funds(state) {
=======
    funds (state) {
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5
        return state.funds
    }
}

export default {
    state, mutations, actions, getters
}