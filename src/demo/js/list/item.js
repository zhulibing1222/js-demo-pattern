import $ from 'jquery';
import getCart from '../shopping-cart/get-cart';
import StateMachine from 'javascript-state-machine';
import log from '../utils/log.js'

export default class Item {
    constructor (list, data) {
        this.list = list;
        this.data = data;
        this.$el = $('<div>');
        this.cart = getCart();
    }

    init() {
        this.initContent();
        this.initBtn();
        this.render();
    }

    initContent() {
        this.$el.append($(`<p>名称：${this.data.name}</p>`));
        this.$el.append($(`<p>价格：${this.data.price}</p>`));
    }

    initBtn() {
        const btn = $('<button>');
        const fms = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '从购物车中删除'
                },
                {
                    name: 'delFromCart',
                    from: '从购物车中删除',
                    to: '加入购物车'
                }
            ],
            methods: {
                onAddToCart: () => {
                    console.log('this', this);
                    this.addToCartHandle();
                    updateText();
                },
                onDelFromCart: () => {
                    this.delFromCartHandle();
                    updateText();
                }
            }
        });
        function updateText() {
            btn.text(fms.state);
        }
        btn.on('click', () => {
            if (fms.is('加入购物车')) {
                fms.addToCart();
            } else {
                fms.delFromCart();
            }
        });
        updateText();
        this.$el.append(btn);
    }

    addToCartHandle() {
        this.cart.add(this.data);
    }

    delFromCartHandle() {
        this.cart.del(this.data.id);
    }

    render() {
        this.list.$el.append(this.$el)
    }
}
