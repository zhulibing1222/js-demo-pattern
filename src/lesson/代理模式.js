const star = {
    name: 'star',
    age: 27,
    phone: '138xxxxxxxx'
};

const agent = new Proxy(star,{
    get(target, key) {
        if (key === 'phone') {
            return '呵呵哒'
        }
        if (key === 'price') {
            return 100000;
        }
        return target[key];
    },
    set(target, key, val) {
        if (key === 'customPrice') {
            if (val < 90000) {
                throw Error('价格太低');
            } else {
                target[key] = val;
                return true;
            }
        }
    }
});
