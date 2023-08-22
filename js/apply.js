function addApplyBtn() {
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;

    if (inputFieldText === "SELL200") {
        updateDiscount();
    }
    else{
        alert("your coupon is not valid")
    }
    updateTotalValue()
    inputField.value=''
}
