// Event listener for the click event on the "Calculate" button
$("#calculateBtn").click(function () {
    // Retrieve the value entered for the number of hours
    var hours = $("#hours").val();

    // Check if the entered value is a positive number
    if (hours > 0) {
        // Retrieve the charge per hour value
        var chargePerHour = $("#chargePerHour").val();

        // Calculate the total charge based on entered hours and charge per hour
        var total = hours * chargePerHour;

        // Display the calculated total in the corresponding input field, rounded to 2 decimal places
        $("#total").val(total.toFixed(2));
    } else {
        // If the entered value is not a valid positive number, show an alert
        alert("Please enter a valid number of hours.");
    }
});

