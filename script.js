

let count = document.getElementById("count");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

let countvalue=0;

function Start(){
    // confirm("Start Button is  Click Do You Want To Start  ....😇");
    do{
        countvalue++;

    }while(countvalue==stop)
    
    count.innerHTML=countvalue;
}

function Stop(){
    confirm("Stop Button is  Click Do You Want To Start  ....😇");
    
    count.innerHTML=0;
}


