db.products.insertMany([
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches.',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    }
    
]);
//ADD more data set as
db.products.insertMany([
    
    { 
        "id": "product5",
        "url": "https://m.media-amazon.com/images/I/51ABSDePXfL._SX300_SY300_QL70_FMwebp_.jpg", 
        "detailUrl": "https://m.media-amazon.com/images/I/51ABSDePXfL._SX300_SY300_QL70_FMwebp_.jpg",
        "title": {
            "shortTitle": "Broadway Basketeers Chocolate Food Gift Basket",
            "longTitle": "Broadway Basketeers Chocolate Food Gift Basket Snack Gifts for Women, Men, Families, College, Appreciation, Thank You, Valentines Day, Corporate, Get Well Soon, Care Package"
        },
        "price": {
            "mrp": 800,
            "cost": 450,
            "discount": "44%"
        },
        "description": "CERTIFIED KOSHER:Our gift baskets in traditional styles deliver on tasteful and beautiful presentation.",
        "discount": "Extra 5% Off", 
        "tagline": "Prestige, Nova & more", 
        "category": "Food & Groceries"
    },
    { 
        "id": "product6",
        "url": "https://m.media-amazon.com/images/I/71347dxhUIL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
        "detailUrl": "https://m.media-amazon.com/images/I/71347dxhUIL.__AC_SX300_SY300_QL70_FMwebp_.jpg", 
        "title": {
            "shortTitle": "Portable Big Bluetooth Speakers with Light",
            "longTitle": "Portable Big Bluetooth Speakers with Light, Wireless with Subwoofer, FM Radio, LED Lights, EQ, Booming Bass, Bluetooth 4.2 Stereo Loud Outdoor/Indoor Retro , for Home, Camping, Travel"
        }, 
        "price": {
            "mrp": 950,
            "cost": 600,
            "discount": "37%"
        },
        "description": "SOWO speaker Bluetooth, advanced DSP technology,  two wide bass passive radiators, and high volume output.",
        "discount": "Upto 70% Off", 
        "tagline": "Deal of the Day",
        "category": "Electronics and Gadgets"
    },
]);

//last data set
db.products.insertOne({
    "id": "product7",
    "url": "https://m.media-amazon.com/images/I/813vxzjiChL.__AC_SY445_SX342_QL70_FMwebp_.jpg", 
    "detailUrl": "https://m.media-amazon.com/images/I/813vxzjiChL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
    "title": {
        "shortTitle": "DAYBETTER Led Strip Lights",
        "longTitle": "DAYBETTER Led Strip Lights 130ft (2 Rolls of 65.6ft) Color Changing Lights Strip for Bedroom, Desk, Indoor Room Bedroom Valentine Decor, with Remote and 24V Power Supply"
    }, 
    "price": {
        "mrp": 800,
        "cost": 550,
        "discount": "31%"
    },
    "description": "The 130 feet led strip lights support both app DAYBETTER and 24 keys ir remote for control.",
    "discount": "From 499", 
    "tagline": "Kubra, Nova & more",
    "category": "Furniture and Decor"
})
//last data set

db.products.insertOne({
    id: 'product8',
    url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
    detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
    title: {
        shortTitle: 'Trimmers, Dryers & more',
        longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
    }, 
    price: {
        mrp: 1899,
        cost: 1124,
        discount: '40%'
    },
    description: 'QUICK DRY LIGHTWEIGHT: 1875W professional hairdryer, lightweight design promises comfortable, ergonomic use. ENHANCES SHINE:',
    discount: 'From 499', 
    tagline: 'Kubra, Nova & more' 
});
