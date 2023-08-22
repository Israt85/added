let total= 0;
function addToCart(card) {
    const selectedItem = document.getElementById("selected-items")
    const cardTitle = card.querySelector(".card-title").innerText;
    const cardPriceText = card.querySelector("p").innerText;
    const cardPrice = parseFloat(cardPriceText);


    const li =document.createElement("li")
        li.innerText = cardTitle;
        selectedItem.appendChild(li);
        total = total + cardPrice;
    const totalPrice= document.getElementById("total-price")
    // console.log(cardPrice);

    totalPrice.innerText= total.toFixed(2)
     const disableBtn= document.getElementById("disable-apply-btn")
        const needTotal= document.getElementById("total-price").innerText
        if (needTotal >= 200) {
            disableBtn.removeAttribute("disabled");
        }

        const purchaseBtn = document.getElementById("purchase-btn")
        const newTotal= document.getElementById("total-price").innerText;
        if(newTotal>0){
            purchaseBtn.removeAttribute("disabled")
        }
        return;

}