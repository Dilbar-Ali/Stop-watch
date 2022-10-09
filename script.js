

let count = document.getElementById("count");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

let cou = 0;
let sto = stop.addEventListener("click", myfunction());
start.addEventListener("click", function () {
    let coun = document.getElementById("count").value;
    while (coun == sto) {
        coun++;

    }
    count.innerHTML=coun;

})