/*function handleFormSubmission(event) {
    event.preventDefault(); // prevent the default form submission behavior
    ageCalculator(); // Call the ageCalculator function here
}*/
function ageCalculator() {
    var birthDate = new Date(document.getElementById("birthDate").value);
    let today = new Date();
    
    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();

    // Adjust for negative month or day values
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        month = 12 + month;  // Adjusting months
    }
    if (day < 0) {
        month--;  // Adjusting months
        let prevMonthDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();  // Number of days in previous month
        day = prevMonthDate + day;  // Adjusting days
    }

    // Display the result
    document.getElementById('result').innerText = `Your Age: ${age} years, ${month} months, ${day} days`;
}