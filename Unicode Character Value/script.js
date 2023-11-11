function detectChar(){
    var input = document.getElementById("inputType").value;
    var output = document.getElementById("result");

    if(input.length > 1 || input.length == 0){
        output.textContent = "Please enter a single character.";
    }else{
        var unicode = input.charCodeAt(0);
        output.textContent = `The value of "${input}" Character is ${unicode}.`;
    }
}

detectChar();