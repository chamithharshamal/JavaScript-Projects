function vowelChecker(){//function to count the number of vowels in a string
    let input = document.getElementById("inputText").value;//get the input string
    let output = document.getElementById("result");//get the output element
    let vowels = ['a', 'e', 'i', 'o', 'u'];//array of vowels
    let vowelCount = 0;

    if(input.length == 0){//check if the input string is empty
        alert("Please enter some text.");
        return;
    }
    else{
    for (let i = 0; i < input.length; i++) {//loop through the input string
        if (vowels.includes(input[i].toLowerCase())) {//check if the current character is a vowel
            vowelCount++;
        }
    }
    output.textContent = `There are ${vowelCount} vowels.`;//display the result
}
}

function clearInput(){
    document.getElementById("inputText").value = "";
    document.getElementById("result").textContent = "";
}