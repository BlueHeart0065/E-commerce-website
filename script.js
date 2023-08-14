//For button transitions 

var viewOffers = document.querySelector(".display button");

viewOffers.onmouseover = () => {
    var para = document.querySelector(".display button p");
    viewOffers.style.backgroundColor = "white";
    para.style.color = "#3a3a3a";
}

viewOffers.onmouseout = () => {
    var para = document.querySelector(".display button p");
    viewOffers.style.background = "none";
    para.style.color = "white";

}

var best = document.getElementById("Bestsellers");
var newest = document.getElementById("Newest");
flag = 0;

newest.onclick = () => {
    console.log("reached");
    if(flag == 0){
        // var para = document.querySelector(".filterSwitch .filter p");
        newest.style.backgroundColor = "#ff845e";
        newest.style.boxShadow = "0px 2px 20px #ffbaa7";
        newest.style.color = "white";
        best.style.color = "#ff5e2d";
        best.style.boxShadow = "none";
        best.style.backgroundColor = "transparent";
        flag = 1;
    }
}
best.onclick = () => {
    if(flag == 1){
        best.style.backgroundColor = "#ff845e";
        best.style.boxShadow = "0px 2px 20px #ffbaa7";
        best.style.color = "white";
        newest.style.color = "#ff5e2d";
        newest.style.boxShadow = "none";
        newest.style.backgroundColor = "transparent";
        flag = 0;
    }
}


