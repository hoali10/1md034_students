function menuItem(name, caloris, lactos, gluten, img) {
    this.name = name;
    this.caloris = caloris;
    this.lactos = lactos;
    this.gluten = gluten;
    this.img = img;
    this.nameAndkCal = function() {
        return this.name + ' ' + this.caloris;
    };
}


let fireBurger = new menuItem('Fire Burger', '1600 kCal', 'Contains lactos', 'Contains gluten', 'https://previews.123rf.com/images/kesu87/kesu871411/kesu87141100247/33457747-hamburger-d%C3%A9licieux-avec-des-flammes-de-feu.jpg');

let vegan = new menuItem('Vegan', '600 kCal', 'Lactos free', 'Gluten free', 'https://joyfoodsunshine.com/wp-content/uploads/2017/04/Baked-Sweet-Potato-Black-Bean-Veggie-Burgers-gluten-free-4.jpg');

let kingSize = new menuItem('King size', '3300 kCal', 'Contains lactos', 'Contains gluten', 'https://i.pinimg.com/600x315/be/2d/8c/be2d8c44cabf32bbbb90c5e541788e17.jpg');

let daily = new menuItem('Daily', '1600 kCal', 'Lactos free', 'Contains gluten', 'https://s3.us-east-2.amazonaws.com/ordersapp/business/5660348/items/hamberger.jpg');

let texa = new menuItem('Texa', '3600 kCal', 'Contains lactos', 'Contains gluten', 'https://lh3.googleusercontent.com/proxy/f9S0n_9zCVI3D6gQ4Oww8RkPg34Cwqb-pfNJZRQrN4L4oBDv_QXL7lFNvSbqKWl2rEtAeeWUxXFg3OKPk1eMzek8Bf-Gx0T2TjiNRH45BahQJDED4vHSsjyW5fIZPrLcvATxjS3BSEC3EdIwMTjIwYTgdd2_RQqFvBvBj4Fkl-u19jhT48TfgVuF-aaN7hclVmvSaCY');

let menu = [fireBurger, vegan, kingSize, daily, texa];


const vm = new Vue({
    el: '#selection',
    data: {
        burgerSelection: 'Välj en burgare' + ' ' + new Date(),
        fireBurger: fireBurger,
        vegan: vegan,
        kingSize: kingSize,
        daily: daily,
        texa: texa,
        booleanExpression: true,
        burgers: menu,
    }
})