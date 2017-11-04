new Vue({
    el: '#Section2-Lecture26',
    data: {
        changeColor: false,
        color: 'green',
        width: 100,
        text: ''
    },
    computed: {
        divClasses: function () {
            return {
                'demo--blue': this.changeColor,
                'demo--yellow': !this.changeColor
            }
        },
        myStyle: function () {
            return {
                'background-color': 'Chocolate',
                // backgroundColor: 'Crimson',  // this works too
                width: this.width + 'px'
            }
        }
    }

    // computed: {
    //     changeColor:
    // }


});


new Vue({
    el: '#Section2-Lecture23',
    data: {
        counter: 0,
        counterTwo: 0           // 'computed' Methods that call this property will not be rerendered if the value of 'counter' changes
                                // However if that is not the case for normal methods. if just value value changes all methods will cause dom update of views
    },
    computed: {                 // This analyses the method and caches if it finds a reference to a data property.
        output: function () {   // In this case a reference to counter.
            return this.counter > 5 ? '= Greater than 5' : '= Less than 5';
        }                       // Computed is used synchronously (instantly), and is not dependant on other methods
    },                          // Computed is better Than Watch in most cases because it is optimised
    watch: {                    // Watch is only to be used instead of Computed if you need to wait asynchronously on another part of the app
        counter: function () {  // The watcher watch the 'KEY counter with data object'
            var vm = this;      // exposes this outside of closure. data.counter would be visible and rewriteable otherwise
            setTimeout(function () {
                vm.counter = 0;
            }, 3000);
        }
    }
});



new Vue({
    el: '#Section2-Lecture16',
    data: {
        counter: 0,
        x: 0,
        y: 0,
        twoWay: 'Set and change this value live'
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

