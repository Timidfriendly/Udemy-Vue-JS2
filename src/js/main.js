new Vue({
    el: '#Section2-Lecture16',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        addOne: function(eventThisTimeNumber, event) {
            this.counter = this.counter + eventThisTimeNumber;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function () {
            alert('Alert - line number : 17');
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

