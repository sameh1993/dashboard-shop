import { defineStore } from "pinia"

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        project: "facebook",
        manager: "Malorum",
        status: "in progress",
        progress: "20"
      },
      {
        project: "Twitter",
        manager: "Evan",
        status: "completed",
        progress: "100"
      },
      {
        project: "Google",
        manager: "John",
        status: "in progress",
        progress: "49"
      },
      {
        project: "facebook",
        manager: "Malorum",
        status: "in progress",
        progress: "74"
      },
      {
        project: "facebook",
        manager: "Malorum",
        status: "in progress",
        progress: "50"
      },
      {
        project: "Twitter",
        manager: "Evan",
        status: "completed",
        progress: "74"
      },
      {
        project: "Google",
        manager: "John",
        status: "in progress",
        progress: "49"
      },
    ],
    pricePlans: [
      { planName: "basic", price: 5, ofter: 'Free for 15days', disk: '1gb', bandWidth: '10Gb', emailAccount: 2, subDomain: 'Unlimited' },
      { planName: "Professional", price: 10, ofter: 'Free for 2 months', disk: '3gb', bandWidth: '25Gb', emailAccount: 2, subDomain: 'Unlimited' },
      { planName: "Premium", price: 12, ofter: 'Free for 9 months', disk: '5gb', bandWidth: '60Gb', emailAccount: 2, subDomain: 'Unlimited' },
      { planName: "Professional", price: 10, ofter: 'Free for 2 months', disk: '3gb', bandWidth: '25Gb', emailAccount: 2, subDomain: 'Unlimited' },
      { planName: "basic", price: 5, ofter: 'Free for 15days', disk: '1gb', bandWidth: '10Gb', emailAccount: 2, subDomain: 'Unlimited' },
      { planName: "Premium", price: 12, ofter: 'Free for 9 months', disk: '5gb', bandWidth: '60Gb', emailAccount: 2, subDomain: 'Unlimited' },
    ],
    ourProducts: [
      {
        productName: "Tempus prop",
        price: 21,
        discount: 5,
        rating: 1.3,
        img: "pro1.jpg"
      },
      {
        productName: "Tempor autem",
        price: 45,
        discount: 5,
        rating: 3.3,
        img: "pro2.jpg"
      },
      {
        productName: "Toribus em",
        price: 36,
        discount: 5,
        rating: 4.3,
        img: "pro3.jpg"
      },
      {
        productName: "Tempibus product",
        price: 65,
        discount: 5,
        rating: 5,
        img: "pro4.jpg"
      },
      {
        productName: "new product",
        price: 767,
        discount: 5,
        rating: 2.3,
        img: "pro5.jpg"
      },
      {
        productName: "Temporibus autem",
        price: 679,
        discount: 5,
        rating: 4,
        img: "pro1.jpg"
      },
      {
        productName: "Temporibus autem",
        price: 21,
        discount: 5,
        rating: 3.5,
        img: "pro7.jpg"
      },
      {
        productName: "Temporibus autem",
        price: 345,
        discount: 5,
        rating: 2.3,
        img: "pro8.jpg"
      },
      {
        productName: "Temporibus autem",
        price: 253,
        discount: 5,
        rating: 2.3,
        img: "pro9.jpg"
      },
      {
        productName: "Temporibus autem",
        price: 568,
        discount: 5,
        rating: 2.3,
        img: "pro10.jpg"
      },
      { productName: "Temporibus autem", rating: 2.6, price: 756, discount: 5, img: "pro3.jpg" },
      {
        productName: "Temporibus autem",
        price: 9766,
        discount: 5,
        rating: 2.3,
        img: "pro12.jpg"
      }
    ]
  }),
  actions: {
    getProductByName(name) {
      return this.ourProducts.filter(item => item.productName == name)[0]
    },
    deleteProductByName(name) {
      const ourProducts = this.ourProducts
      const deletedProduct = this.ourProducts.find(item => item.productName == name)
      ourProducts.splice(this.ourProducts.indexOf(deletedProduct), 1)
      this.ourProducts = ourProducts
    }
  }
})