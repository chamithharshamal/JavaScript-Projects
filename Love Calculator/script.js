function calculateLove() {
  var yourName = document.getElementById("yourName").value.trim();

  var partnerName = document.getElementById("partnerName").value.trim();

  if (yourName === "" || partnerName === "") {
    alert("Please enter both names...");
  } else {
    var lovePercentage = Math.floor(Math.random() * 101);

    var result = document.getElementById("result");
    result.innerHTML = `${yourName} and ${partnerName}'s Love Percentage is ${lovePercentage}.`;

    if (lovePercentage < 30) {
      result.innerHTML += " <br> Not a Great Match. Keep Looking Dear...";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      result.innerHTML += " <br> There is a Potential. Give it a try..";
    } else {
      result.innerHTML += " <br> Great Match. Love is in the Air ..";
    }
  }
}
