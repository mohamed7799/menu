"use strict"

//var

let data = [{
    name: "Panecake",
    price: "$15.00",
    imgUrl: "./images/desserts/panecake.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Dessert"
},
{
    name: "Chocolate cake",
    price: "$20.00",
    imgUrl: "./images/desserts/chocolate cake.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Dessert"
}, {
    name: "cupcake",
    price: "$10.00",
    imgUrl: "./images/desserts/cupcake.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Dessert"
}, {
    name: "cheesecake",
    price: "$12.00",
    imgUrl: "./images/desserts/cheesecake.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Dessert"
}, {
    name: "Burrito",
    price: "$8.00",
    imgUrl: "./images/lunch/burrito.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Lunch"
}, {
    name: "Chicken",
    price: "$30.00",
    imgUrl: "./images/lunch/chicken.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Lunch"
}, {
    name: "Pizza",
    price: "$20.00",
    imgUrl: "./images/lunch/pizza.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Lunch"
}, {
    name: "Coffe",
    price: "$5.00",
    imgUrl: "./images/shakes/coffe.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Shake"
}, {
    name: "strawberry milkshake",
    price: "$8.00",
    imgUrl: "./images/shakes/strawberry milkshake.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis natus, laudantium ad libero tenetur dicta eos accusantium blanditiis ipsum quos vitae fugit tempore illo consequatur iure voluptatibus veniam, ipsa odit!",
    type: "Shake"
}
]


let btns = [...document.getElementsByClassName("btn")];

let menu = document.getElementById("menu");

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

shuffle(data);

function render(ele) {
    return `<div class="menu__item">
                <div class="menu__item__img">
                    <img src="${ele.imgUrl}" alt="">
                </div>
                <div class="menu__item__text">
                    <div class="menu__item__title">
                        <p class="title">${ele.name}</p>
                        <p class="price">${ele.price}</p>
                    </div>
                    <hr>
                    <p class="desc">${ele.desc}</p>
                    <p class="type">Type: ${ele.type}</p>
                </div>
            </div>`
}

function renderAll(arr) {
    menu.innerHTML = "";
    arr.forEach((ele) => {
        menu.innerHTML += render(ele);
    })
}

btns.forEach((ele) => {
    ele.addEventListener('click', () => {
        if (ele.textContent === "All") {
            renderAll(data);
        }
        else {
            let theType = ele.textContent;
            let arrType = [];
            data.forEach((ele) => {
                if (ele.type === theType) {
                    arrType.push(ele);
                }
            })
            renderAll(arrType);
        }

    })
})

renderAll(data);








