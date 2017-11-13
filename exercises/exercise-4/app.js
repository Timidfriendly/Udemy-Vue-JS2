new Vue({
    el: '#exercise',
    data: {
        myClass: ''
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
        }
    }
});
