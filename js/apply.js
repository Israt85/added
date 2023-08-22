
function addApplyBtn() {
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;
    const discountedPriceElement = document.getElementById("discounted-price").innerText;

    if (inputFieldText === "SELL200") {
    
        

        updateTotalPrice(originalPrice - discountAmount);
    } 
}



function resetDiscountAndNavigate() {
    const discountedPriceElement = document.getElementById("discounted-price");
    discountedPriceElement.innerText = "00tk";

    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = "00tk";

    window.location.href = "index.html"; 
}



