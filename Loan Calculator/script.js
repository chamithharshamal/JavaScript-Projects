function loanCalculator(){

    var amount =parseFloat(document.getElementById("amount").value);
    var interest =parseFloat(document.getElementById("interest").value);
    var months =parseInt(document.getElementById("months").value);


    if(isNaN (amount) && isNaN(interest) && isNaN(months)){

        alert("Please enter valid numbers for the fields.");

    } else{

    var monthlyInterest = interest/100/12;
    var totalPayment = months;
    var monthlyPayment = (amount * monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayment));


    var totalInterest = (monthlyPayment * totalPayment)- amount;
    displayResult(monthlyPayment,totalInterest);

function displayResult(monthlyPayment,totalInterest){
    var result = document.getElementById("result");

    result.innerHTML = "Monthly Payment: "+monthlyPayment.toFixed(2)+"<br>"+"Total Interest: "+totalInterest.toFixed(2);
}
}
}