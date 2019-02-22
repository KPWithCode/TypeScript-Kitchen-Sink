"use strict";
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
    var countMe = $(".clickMe");
    countMe.click(function () {
        countAppear.text(counter.up());
    });
    var countAppear = $('.countAppear');
    countMe.appendTo(countAppear);
});
