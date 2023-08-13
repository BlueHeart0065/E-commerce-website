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