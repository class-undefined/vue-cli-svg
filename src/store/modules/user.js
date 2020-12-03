import {
    getToken,
    setToken,
    removeToken
} from '@/utils/caches'
import { resetRouter } from '@/router'

const state = {
    token: getToken(),
    name: '',
    roles: []
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}
const actions = {
    login({ commit }, user) {
        return new Promise(resolve => {
            // TODO 根据用户登录后的返回对此处进行设置
            commit('SET_TOKEN', user) // user.token
            setToken(user)
            resolve(user)
        })
    },
    getInfo({
        commit,
        // state
    }) {
        return new Promise((resolve) => {
            // const token = state.token
            // TODO 根据当前token获取用户信息
            // 若在登录时已返回用户信息则无需此TODO
            commit('SET_ROLES', ['admin'])
            resolve({
                roles: ['admin']
            })
        })
    },
    logout({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resetRouter()
            resolve()
        })
    },
    resetToken({
        commit
    }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}