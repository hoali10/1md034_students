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

let fireBurger = new menuItem('Fire Burger', '2700 kCal', 'Contains lactos', 'Contains gluten', 'https://previews.123rf.com/images/kesu87/kesu871411/kesu87141100247/33457747-hamburger-d%C3%A9licieux-avec-des-flammes-de-feu.jpg', 400);

let vegan = new menuItem('Vegan', '600 kCal', 'Lactos free', 'Gluten free', 'https://joyfoodsunshine.com/wp-content/uploads/2017/04/Baked-Sweet-Potato-Black-Bean-Veggie-Burgers-gluten-free-4.jpg', 400);

let kingSize = new menuItem('King size', '3300 kCal', 'Contains lactos', 'Contains gluten', 'https://i.pinimg.com/600x315/be/2d/8c/be2d8c44cabf32bbbb90c5e541788e17.jpg', 400);

let daily = new menuItem('Daily', '1600 kCal', 'Lactos free', 'Contains gluten', 'https://s3.us-east-2.amazonaws.com/ordersapp/business/5660348/items/hamberger.jpg', 400);

let texa = new menuItem('Texa', '3600 kCal', 'Contains lactos', 'Gluten free', 'https://dimg04.c-ctrip.com/images/100p0k000000c496wD647_C_750_350.jpg?proc=source%2Ftrip', 400);

let menu = [fireBurger, vegan, kingSize, daily, texa];

/*
document.getElementById('fireBurger').innerHTML = "Fire Burger";
document.getElementById('vegan').innerHTML = "Vegan";
document.getElementById('kingSize').innerHTML = "King Size";
document.getElementById('daily').innerHTML = "Daily";
document.getElementById('texa').innerHTML = "Texa";
*/
/*
let listItem = document.getElementById("wrapper1");
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