new Vue({
    el: '#Section2-Lecture16',
    data: {
        counter: 0
    },
    methods: {
        addOne: function(event) {
            this.counter = this.counter + 1;
        }
    }
});

new Vue({
    el: '#app',
    data: {
        title: 'My Vue title',
        subtitle: 'Proxied subtile saying Yo!',
        link: 'https://davidknowles.info',
        finishedLink: '<a href="https://davidknowles.info">Link to davidknowles.info</a>'
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

