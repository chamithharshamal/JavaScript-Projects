document.getElementById("check").addEventListener("click",palindromeChecker);

function isPalindrome(str){
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    var reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);

    return cleanStr === reverseStr;
}

function palindromeChecker(){
    var inputText = document.getElementById("word").value;
    var result = document.getElementById("result");

    var x = isPalindrome(inputText);

    if(x){
        result.textContent = `"${inputText}" is a Palindrome..`;
    }else{
        result.textContent = `"${inputText}" is Not a Palindrome..`;
    }

}