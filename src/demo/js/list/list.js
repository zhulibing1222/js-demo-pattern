import $ from 'jquery';
import { data } from '../../api/data.js'
import createItem from './create-item.js'

export default class List {
    constructor (app) {
        this.app = app;
        this.$el = $('<div>');
    }

    init() {
        this.loadData()
            .then(data => {
                this.initItemList(data);
            })
            .then(() => {
                this.render();
            });

    }

    loadData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            });
        });
    }

    initItemList(data) {
        data.forEach(dataItem => {
            let item = createItem(this, dataItem);
            item.init();
        });
    }

    render() {
        this.app.$el.append(this.$el);
    }
}
