const box = new Vue({
    el: '#burger_selection',
    data: {
        burgers: food,
        checkBurg: []
    },
});

const vm = new Vue({
    el: "#customer_info",
    data: {
        name: "",
        mail: "",
        street: "",
        house: "",
        gender: "",
        payment: "",
        output: ""
    },
    methods: {
        markDone: function() {
            this.output = this.name + ', ' + this.mail + ', ' + this.street + ', ' + this.house + ', ' + this.gender + ', ' + this.payment + '  ' + ' YOUR ORDER: ' + box.checkBurg
        }
    }
});