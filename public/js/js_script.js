/*
function menuItem(name, caloris, lactos, gluten, img, imgW) {
    this.name = name;
    this.caloris = caloris;
    this.lactos = lactos;
    this.gluten = gluten;
    this.img = img;
    this.imgW = imgW;
    this.nameAndkCal = function() {
        return this.name + ' ' + this.caloris;
    };
}

let fireBurger = new menuItem('Fire Burger', '2700 kCal', 'Contains lactos', 'Contains gluten', 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4409427.jpg ', 400);

let vegan = new menuItem('Vegan', '600 kCal', 'Lactos free', 'Gluten free', 'https://joyfoodsunshine.com/wp-content/uploads/2017/04/Baked-Sweet-Potato-Black-Bean-Veggie-Burgers-gluten-free-4.jpg', 400);

let kingSize = new menuItem('King size', '3300 kCal', 'Contains lactos', 'Contains gluten', 'https://i.pinimg.com/600x315/be/2d/8c/be2d8c44cabf32bbbb90c5e541788e17.jpg', 400);

let daily = new menuItem('Daily', '1600 kCal', 'Lactos free', 'Contains gluten', 'https://s3.us-east-2.amazonaws.com/ordersapp/business/5660348/items/hamberger.jpg', 390);

let texa = new menuItem('Texa', '3600 kCal', 'Contains lactos', 'Gluten free', 'https://www.goodtaste.tv/wp-content/uploads/2017/07/texas_burger-copy-1.jpg', 400);


let menu = [fireBurger, vegan, kingSize, daily, texa];
*/
/*
document.getElementById('fireBurger').innerHTML = "Fire Burger";
document.getElementById('vegan').innerHTML = "Vegan";
document.getElementById('kingSize').innerHTML = "King Size";
document.getElementById('daily').innerHTML = "Daily";
document.getElementById('texa').innerHTML = "Texa";
*/
/*
let listItem = document.getElementById("wrapper");
for (burger of menu) {

    let burgerBox = document.createElement("div");
    let burgerImg = document.createElement("img");
    let hederItem = document.createElement("h3");
    let listName = document.createTextNode(burger.name);
    let burgerKcal = document.createElement("li");
    let columnItem = document.createElement("ul");
    let rowItem3 = document.createTextNode(burger.caloris);
    burgerKcal.appendChild(rowItem3);
    columnItem.appendChild(burgerKcal);
    if (burger.lactos == "Contains lactos") {

        let rowItem1 = document.createElement("li");
        let rowValue1 = document.createTextNode("Contains lactos");
        rowItem1.appendChild(rowValue1);
        columnItem.appendChild(rowItem1);


    }
    if (burger.gluten == "Contains gluten") {

        let rowItem2 = document.createElement("li");
        let rowValue2 = document.createTextNode("Contains gluten");
        rowItem2.appendChild(rowValue2);
        columnItem.appendChild(rowItem2);
    }
    burgerBox.appendChild(hederItem);
    hederItem.appendChild(listName);
    burgerImg.src = burger.img;
    burgerImg.width = burger.imgW;
    burgerBox.appendChild(burgerImg);
    burgerBox.appendChild(columnItem);
    listItem.appendChild(burgerBox);
}
*/
/*

let myButton = document.getElementById("Btn");

myButton.addEventListener("click", function() {
    console.log('Button Clicked!');
});

myButton.onclick = function getDetails() {

    let name = document.getElementById("Fullname").value;
    let email = document.getElementById("Email").value;
    let street = document.getElementById("Street").value;
    let houseNr = document.getElementById("House").value;
    let paymentOptions = document.getElementById("payment");
    let payment = paymentOptions.options[paymentOptions.selectedIndex].text;

    let genders = document.getElementsByName("gender");
    let realGender;
    for (var gender of genders) {
        if (gender.checked) {
            realGender = gender.value;
            break;
        }
    }
    let arr = [name, email, street, houseNr, payment, realGender];
    console.log(arr);
}
*/