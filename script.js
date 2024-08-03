const product = [
    {
        id: 1,
        image: "headphone.jpg",
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 2,
        image: 'mic.jpg',
        title: 'Microphone',
        price: '$45',
    },
    {
        id: 3,
        image: 'watch.jpg',
        title: 'Smart Watch',
        price: '$30',
    },
    {
        id: 4,
        image: 'laptop.jpg',
        title: 'Laptop',
        price: '$70',
    },
    {
        id: 5,
        image: 'camera1.jpg',
        title: 'Camera',
        price: '$60',
    },
    {
        id: 6,
        image: 'lamp.jpg',
        title: 'Metal Desk Lamp',
        price: '$35',
    },
    {
        id: 7,
        image: 'phone.jpg',
        title: 'Z Flip Foldable Mobile',
        price: '$55',
    },
    {
        id: 8,
        image: 'air.jpg',
        title: 'Air Pods Pro',
        price: '$50',
    },
    {
        id: 9,
        image: 'smartTV.jpg',
        title: 'Smart TV',
        price: '$40',
    },
];

const categories = [...new Set(product.map((item) => item))];

let cart = document.getElementById('root');
cart.innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img src=${image} alt=${title}>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>`
    );
}).join('');
