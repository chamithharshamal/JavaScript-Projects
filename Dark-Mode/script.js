document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input'); // Get the checkbox input
    const body = document.querySelector('body'); // Get the body element

    // Event listener for the checkbox
    input.checked = JSON.parse(localStorage.getItem('mode'));
       
    updateBody();

    // function to update the body background color
    function updateBody() {
        if (input.checked) {
            body.style.backgroundColor = "black";
        } else {
            body.style.backgroundColor = "white";
        }
    }

    // Event listener for the checkbox
    input.addEventListener('input', () => {
        updateBody();
        updateStorage();
    });

    function updateStorage() {
        localStorage.setItem('mode', JSON.stringify(input.checked)); // Store the checkbox input
    }
});
