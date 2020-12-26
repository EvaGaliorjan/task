let billAmount = document.getElementById('bill-amount');
let percentTip = document.getElementById('percentage-tip');
let peopleAmount = document.getElementById('people-amount');
let tipAmount = document.getElementById('tip-amount');
let total = document.getElementById('total');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    billAmount = Number(billAmount.value);
    percentTip = Number(percentTip.value);
    peopleAmount = Number(peopleAmount.value);


    if (isNaN(billAmount) || billAmount <= 0 || billAmount === null){
        alert('Please enter a valid Bill Amount')
    }
    else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null){
        alert('Please enter a valid Tip Percentage')
    }
    else {
        let calculatedTip =  percentTip/100*billAmount;
        tipAmount.value = '$' + calculatedTip;

        let calculatedTotal =  calculatedTip*peopleAmount;
        total.value = '$' + calculatedTotal;
    }
})