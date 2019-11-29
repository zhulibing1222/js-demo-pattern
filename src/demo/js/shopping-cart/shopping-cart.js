import $ from 'jquery';
import getCart from "./get-cart";

export default class ShoppingCart {
    constructor(app) {
        this.app = app;
        this.$el = $('<div>').css({
            'padding-bottom' : '10px',
            'border-bottom': '1px solid #ccc'
        });
        this.cart = getCart();
    }

    init() {
        this.initButton();
        this.render();
    }

    initButton() {
        const btn = $('<button>购物车</button>');
        btn.on('click', () => {
            this.showCart();
        });
        this.app.$el.append(btn);
    }

    showCart() {
        alert(this.cart.getList());
    }

    render() {
        this.app.$el.append(this.$el);
    }
}
