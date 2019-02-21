class Counter {
    count = 0;

    up() {
        return ++this.count;
    }
}

$(document).ready(() => {
    const counter = new Counter();
    const count = $(".clickMe");

    count.click(() => {
        count.text(counter.up());
    });
 const countAppear = $('.countAppear')
    count.appendTo(countAppear);
});