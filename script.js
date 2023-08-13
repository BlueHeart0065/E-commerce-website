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


//For card hover transitions

var card = document.querySelector(".grid div");

card.onmouseover = cardHoverEffect(card);

function cardHoverEffect(card){
    card.onmouseover = ()=> {
        var rect = document.querySelector(".grid div .rect");
        rect.style.marginTop = "-7vw";
    }
    card.onmouseout = () => {
        var rect = document.querySelector(".grid div .rect");
        rect.style.marginTop = "-6vw";
    }
}