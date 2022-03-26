const goods = {
    1: {
        id: 1,
        title: 'Рубашка',
        description: 'Хлопковая',
        sizes: [36, 48, 54],
        price: 1500,
        available: true,        
    },
    2: {
        id: 2,
        title: 'Джинсы',
        description: 'Прямые',
        sizes: [40,44, 46],
        price: 2000,
        available: true,        
    },
    3: {
        id: 3,
        title: 'Юбка',
        description: 'Миди',
        sizes: [36, 38],
        price: 1700,
        available: false,        
    },
    4: {
        id: 4,
        title: 'Пальто',
        description: 'Кашемировое',
        sizes: [40, 42, 44, 46, 48, 50, 52, 54],
        price: 8000,
        available: true,        
    },
    5: {
        id: 5,
        title: 'Брюки',
        description: 'Широкие',
        sizes: [46, 48, 50],
        price: 2000,
        available: false,        
    },
};

const goodIndex = [goods[0], goods[1], goods[2], goods[3], goods[4]];

const basket = [
    {
        good: 1,
        amount: 2, 
    },
    {
        good: 4,
        amount: 1, 
    },
];


function add (item, quantity) {
    let q = basket.length - 1;
    for (let i = 0; i < q; i++) {
        if (basket[i].good !== item) {
            let n = {good : item,
                     amount: quantity,};
            basket.push(n);
        } else if ((basket[i].good === item) && (basket[i].amount === quantity))  {
            break;
        } else {
            basket[i].amount = quantity;
        }
    }
    console.log(basket);
}

function del (item, quantity) {
    let q = basket.length - 1;
    for (let i = 0; i < q; i++) {
        if ((basket[i].good === item) && (basket[i].amount <= quantity)) {
            basket.splice(i, 1);
            continue;
        }
        else if (basket[i].good === item) {
            basket[i].amount -= quantity;
        }    
    }
    console.log(basket)
}

function sum () {
    let q = basket.length - 1;
    let price = 0;
    for (let i = 0; i <= q; i++) {
        let s = goods[basket[i].good].price * basket[i].amount;
        price += s;
    }
    console.log(price)    
}

console.log(add(2, 3));
console.log(del(1, 1));
console.log(sum())