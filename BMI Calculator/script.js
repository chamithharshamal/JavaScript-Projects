function x(){
  
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var feet = parseInt(document.getElementById("feet").value);
    var inches = parseInt(document.getElementById("inches").value);
    var weight = parseFloat(document.getElementById("weight").value);
  
    if (gender && age && feet && inches && weight) {
      var heightInMeters = (feet * 12 + inches) * 0.0254;
      var bmiIndex = weight / (heightInMeters * heightInMeters);
  
      var resultElement = document.getElementById("result");
  
      let category = "";
  
      if (bmiIndex < 18.5) {
        category = "Underweight";
      } else if (bmiIndex >= 18.5 && bmiIndex < 24.9) {
        category = "Normal Weight";
      } else if (bmiIndex > 25 && bmiIndex < 29.9) {
        category = "Over Weight";
      } else {
        category = "Obesity";
      }
  
      resultElement.innerHTML =
        "Your BMI : " + bmiIndex.toFixed(2) + "<br>" + "Category : " + category;

    }
    else{
        alert("Please fill required fields.");
    }
    };
