class Counter {
    count = 0;

    up() {
        return ++this.count;
    }
}

$(document).ready(() => {
    const counter = new Counter();
    const countMe = $(".clickMe");

    countMe.click(() => {
        countAppear.text(counter.up());
    });
 const countAppear = $('.countAppear')
    countMe.appendTo(countAppear);
});