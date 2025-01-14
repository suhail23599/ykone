import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    getProfileDetails: () => {
      return new Promise((resolve, reject) => {
        axios.get(api.profile_data).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getContentDetails: (context, params) => {
      return new Promise((resolve, reject) => {
        axios.get(api.content_data(params.page, params.filter)).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getEthnicityDetails: () => {
      return new Promise((resolve, reject) => {
        axios.get(api.audience_data).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getPerformanceDetails: () => {
      return new Promise((resolve, reject) => {
        axios.get(api.performance_data).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
})

export default store