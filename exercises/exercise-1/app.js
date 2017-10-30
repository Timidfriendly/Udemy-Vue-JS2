new Vue({
    el: '#exercise1',
    data: {
        name: 'David Knowles',
        age: 47,
        randomImage: 'https:\/\/upload.wikimedia.org\/wikipedia\/commons\/2\/21\/EverestfromKalarPatarcrop.JPG'
    },
    methods: {
        randomise: function() {
            return Math.random();
        }
    }
    //,
    // created: function () {
    //     alert('Alert - line number : 8');
    // }
});
