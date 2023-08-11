(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let total = document.querySelector(".btn-total");

    // display numbers in screen
    buttons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    // button Equal
    total.addEventListener("click", function (e) {
        if (screen.value === "") {
            screen.value = "";
        } else {
            let ans = eval(screen.value);
            screen.value = ans;
        }
    });

    // button Clear
    clear.addEventListener("click", function (e) {
        screen.value = "";
    });
})();
