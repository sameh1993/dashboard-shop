import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      name: "counter",
      active: true
    }
  },
  actions: {
    login() {
      // axios.get("").then(result => {

      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
})
