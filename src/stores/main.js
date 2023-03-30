
import { defineStore } from "pinia"


export const useMainStore = defineStore('main', {
    state: () => ({
        username: "malorum",
        levelControl: "administrator",
        userImg: "p1.jpg",
        registerUsers: 321,
        dailyVisitors: 123,
        newMsg: 987
    })
})