var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.up = function () {
        return ++this.count;
    };
    return Counter;
}());
$(document).ready(function () {
    var counter = new Counter();
    var count = $(".clickMe");
    count.click(function () {
        count.text(counter.up());
    });
    var countAppear = $('.countAppear');
    count.appendTo(countAppear);
});
