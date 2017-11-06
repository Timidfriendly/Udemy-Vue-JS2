new Vue({
    el: '#exercise',
    data: {
        myClass: ''
    },
    methods: {
        startEffect: function (event) {
            this.myClass = 'shrink';
            var vm = this;

            setInterval(function() {
                vm.myClass = 'highlight'
            }, 1000);
            return this.myClass
        }
    }
});
