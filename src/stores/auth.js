
import { defineStore } from "pinia"


export const useAuthStore = defineStore("register", {
    state: () => ({
        idToken: null
    }),
    getters: {
        getIdToken: (state) => {
            return state.idToken
        }
    },
    actions: {
        updateIdToken(value) {
            this.idToken = value
        }
    }
})

// import { ref } from "vue"

// export const useAuthStore = defineStore("register", () => {
//     const isAuth = ref("")

//     function updateIdToken(value) {
//         isAuth.value = value
//     }

//     return {
//         isAuth,
//         updateIdToken
//     }
// })

