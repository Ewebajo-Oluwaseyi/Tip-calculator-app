const amounts = document.querySelector('#amount');
const tipSelects = document.querySelectorAll('.tip-select');
const tipCustom = document.querySelector('#tip-custom');
const noPeople = document.querySelector('#noPeople');
const selector = document.querySelector('.selector');
const tipAmount = document.querySelector('#tipAmount');
const tipTotal = document.querySelector('#tipTotal')
const button = document.querySelector("button");
const tip5 = document.querySelector("#tip5")

var tip = 0; people = 0; amount = 0;

noPeople.addEventListener("input", (e) => {
    people = parseFloat(e.target.value)
    if (!people || people === 0) {
        selector.classList.add("error");
        return;
    }
    calculateTip();
});
amounts.addEventListener("input", (e) => {
    amount = parseFloat(e.target.value);
    console.log(amount)
    calculateTip();
})
tipSelects.forEach((tipSelect) => {
    tipSelect.addEventListener("click", (e) => {
        tipCustom.value = ""
        tip = parseFloat(e.target.value);
        calculateTip();
    })
})
tipCustom.addEventListener("input", (e) => {
    if (e.target.value !== "") {
        tipSelects.forEach((tipSelect) => {
            tipSelect.checked = false;
        });
        tip = parseFloat(e.target.value);
        calculateTip()
    }
})
const calculateTip = () => {
    button.disabled = false;

    if (!people || people === 0) {
        selector.classList.add("error");
        return;
    }
    selector.classList.remove("error");

    const amountTip = amount * (tip / 100);
    const actualAmount = (amount + amountTip) / people;
    const actualTip = amountTip / people;

    tipAmount.textContent = actualTip.toFixed(2);
    tipTotal.textContent = actualAmount.toFixed(2);
}

const reset = () => {
    amount = 0;
    people = 0;
    tip = 5;
    tipAmount.textContent = "";
    tipTotal.textContent = "";
    tipCustom.value = "";
    tipSelects.forEach((tipSelect) => {
        tipSelect.checked = false;
    });
    tip5.checked = true;
    amounts.value = "";
    noPeople.value = "";
    selector.classList.remove("error");
    button.disabled = true;
}