new Vue({
    el: '#exercise',
    data: {
        myClass: '',
        highlight: true,
        highlight2: undefined
    },
    methods: {
        startEffect: function (event) {
            var highlight = true;
            var vm = this;

            function toggleClass() {
                vm.myClass = vm.highlight ? 'highlight' : 'shrink';
                vm.highlight = !vm.highlight;
            }

            setInterval(function() {
                toggleClass();
            }, 1000);
        },

        startClassSwitch: function (event) {
            var vm = this;

            function toggleClass() {
                vm.highlight2 = !vm.highlight2;
            }

            setInterval(function() {
                toggleClass();
            }, 1000);
        }
    }
});
