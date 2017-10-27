new Vue({
    el: '#app',
    data: {
        title: 'My Vue title'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function () {
            return "Subtile saying Hello!";
        }
    }
});