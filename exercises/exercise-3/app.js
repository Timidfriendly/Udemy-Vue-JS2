
new Vue({
    el: '#exercise',
    data: {
        value: 0,
        reset_time: 5000
    },
    computed: {
        result: function(){
            return this.value < 37 ? "Not there yet" : "Done!"
        }
    },
    watch: {
        result: function(change){
            if (this.value !== 0) {
                var vd = this;
                setTimeout(function() {
                    vd.value = 0;
                }, vd.reset_time);
            }
        }
    }
});