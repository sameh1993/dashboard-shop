
import { defineStore } from "pinia"

export const useMailStore = defineStore("mail", {
    state: () => ({
        name: "sameh sayed",
        inbox: [
            { id: 1, sender: "facebook", type: 'work', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { id: 2, sender: "apple", type: 'family', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { id: 3, sender: "google", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { id: 4, sender: "twitter", type: 'work', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { id: 5, sender: "instagram", type: 'primary', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { id: 6, sender: "facebook", type: 'forums', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { id: 7, sender: "twitter", type: 'work', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { id: 8, sender: "google", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { id: 9, sender: "instagram", type: 'family', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { id: 10, sender: "apple", type: 'work', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { id: 11, sender: "instagram", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "facebook", type: 'pirmary', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "twitter", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "google", type: 'promotions', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "instagram", type: 'forums', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "apple", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "instagram", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "facebook", type: 'family', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "twitter", type: 'promotions', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "google", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "instagram", type: 'family', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "apple", type: 'work', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "instagram", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "facebook", type: 'promotions', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "twitter", type: 'primary', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "google", type: 'family', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "instagram", type: 'primary', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "apple", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "google", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "instagram", type: 'promotions', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "apple", type: 'work', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "instagram", type: 'socail', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "facebook", type: 'family', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "twitter", type: 'primary', content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "google", type: 'forums', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "instagram", type: 'primary', content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "apple", type: 'promotions', content: " Lorem Ipsum is simply", date: Date(), star: false }
        ],
        sentItem: [
            { sender: "instagram", content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "facebook", content: " Lorem Ipsum is simply", date: Date(), star: true },
            { sender: "twitter", content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "google", content: " Lorem Ipsum is simply", date: Date(), star: false },
            { sender: "instagram", content: " Lorem Ipsum is simply", date: Date(), star: true }
        ],
        newItem: [
            { id: 1, name: "sameh sayed", age: 30, state: true },
            { id: 2, name: "ahmed sayed", age: 27, state: false },
            { id: 3, name: "heba sayed", age: 25, state: false },
        ],

        draft: [],
        important: 0
    })
    , actions: {
        updateNew(value, id) {
            this.newItem[id].name = value
        }
    }
})