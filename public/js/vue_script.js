    'use strict';
    const socket = io();

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
            gender: "",
            payment: "",
            output: "",
            orders: {},
            order: {
                visible: false,
                details: {
                    x: 0,
                    y: 0
                },
            },
            amountOrders: 0,
        },

        methods: {

            markDone: function() {
                this.output = this.name + ', ' + this.mail + ', ' + ', ' + ', ' + this.gender + ', ' + this.pay + ' Yor Order: ' + box.checkBurg
            },


            getNext: function() {
                /* This function returns the next available key (order number) in
                 * the orders object, it works under the assumptions that all keys
                 * are integers. */

                return this.amountOrders;
            },
            addOrder: function(event) {
                /* When you click in the map, a click event object is sent as parameter
                 * to the function designated in v-on:click (i.e. this one).
                 * The click event object contains among other things different
                 * coordinates that we need when calculating where in the map the click
                 * actually happened. */

                this.amountOrders = this.amountOrders + 1;

                socket.emit('addOrder', {
                    orderId: this.getNext(),
                    details: {
                        x: this.order.details.x,
                        y: this.order.details.y,
                    },
                    orderItems: box.checkBurg,
                });
            },

            displayOrder: function(event) {

                let offset = {
                    x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top,
                };
                this.order.details.x = event.clientX - 10 - offset.x,
                    this.order.details.y = event.clientY - 10 - offset.y,
                    this.order.visible = true;
            },
        },

    });