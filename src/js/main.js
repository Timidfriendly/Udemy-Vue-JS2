new Vue({
    el: '#app',
    data: {
        title: 'My Vue title',
        subtitle: 'Proxied subtile saying Yo!',
        link: 'https://davidknowles.info'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHelloSubtitle: function () {
            this.subtitle = 'Updated My Vue title';
            return this.subtitle;
        }
    }
});