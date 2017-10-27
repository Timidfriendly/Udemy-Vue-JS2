new Vue({
    el: '#app',
    data: {
        title: 'My Vue title',
        subtitle: 'Proxied subtile saying Yo!'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function () {
            return this.subtitle;
        }
    }
});