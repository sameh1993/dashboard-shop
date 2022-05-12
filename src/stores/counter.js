import { defineStore } from 'pinia'
import axios from "axios"

export const useCounterStore = defineStore({
  state: () => ({
    isAuth: undefined,
    isAdmin: undefined,
  }),
  actions: {
    login(userData) {
      axios.get("").then(result => {

      }).catch(err => {
        console.log(err)
      })
    }
  }
})
