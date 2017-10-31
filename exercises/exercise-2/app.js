new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('Alert - line number : 8');
            },
            listenAndStoreValue: function(event) {
                this.value = event.target.value;
            },
            store: function (event) {
                this.value = event
            }
        } 
    });