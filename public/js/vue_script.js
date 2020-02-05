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

let menu = [fireBurger, vegan, kingSize, daily, texa];

const vm = new Vue({
    el: '#wrapper1',
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