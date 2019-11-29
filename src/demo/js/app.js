import $ from 'jquery';
import ShoppingCart from './shopping-cart/shopping-cart'
import List from "./list/list";

export default class App {
    constructor (id) {
        this.$el = $(`#${id}`);
    }

    init() {
        this.initList();
        this.initShoppingCart();
    }

    initList() {
        this.list = new List(this);
        this.list.init();
    }
    initShoppingCart() {
        this.shoppingCart = new ShoppingCart(this);
        this.shoppingCart.init();
    }

}
