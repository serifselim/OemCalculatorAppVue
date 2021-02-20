import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    equipmentList : [],
    totalPrice : 0,
    dolar : 7
}

const getters = {
    getData(state){
        return state.equipmentList;
    },
    getTotalPrice(state){
        return state.totalPrice + '₺';
    },
    getTotalDolar(state){
        return Math.floor(state.totalPrice / state.dolar) + '$';
    }
}

const mutations = {
    changeData(state,payload){
        state.equipmentList.push(payload);
        
    },
    calculator(state,payload){
        state.totalPrice += parseInt(payload.price);
    },
    delete(state,payload){
        state.equipmentList.splice(payload.index,1);
        state.totalPrice -= parseInt(payload.price);
    },

}

const actions = {
    setEquipment({commit},payload){
        commit('changeData',payload);
        commit('calculator',payload);
    },
    deleteEquipment({commit},payload){
        commit('delete',payload)
    },

}

export const store = new Vuex.Store({
    state,getters,mutations,actions
});