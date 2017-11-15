new Vue({
    el: '#exercise',
    data: {
        1 : '',
        myClass: '',
        highlight: true,
        highlight2: undefined,
        2 : '',
        classPattern: 'stripped',
        classColor1: 'red',
        classColor2: 'green',
        classColor3: 'yellow',
        classBorderBase: 'border',
        classBorder6: 'border-6',
        classP20: 'p-20',
        classP30: 'p-30',
        3 : '',
        myDynamicClass: '',
        4 : '',
        myDynamicClass2: '',
        myDynamicClass3: '',
        5 : '',
        myStyle: {
            'padding': '40px',
            'background-color':'pink'
        },
        6 : '',
        barWidth: '0'


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
        },

        startProgress: function () {
            var vm = this;

            function animateWidth() {
                if (vm.barWidth < 100) {
                    vm.barWidth++;
                } else {
                    clearInterval(myAnimation);
                }
            }

            var myAnimation = setInterval(function () {
                animateWidth();
            }, 20);
        }
    }
});
