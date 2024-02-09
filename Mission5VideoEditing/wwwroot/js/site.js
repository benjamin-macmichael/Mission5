//This calculates how much money the user would have to pay for my services based off the
//amount of hours they typed into the hours box
$("#calculateBtn").click(function () {
        var hours = $("#hours").val();
        if (hours > 0) {
            var chargePerHour = $("#chargePerHour").val();
            var total = hours * chargePerHour;
            $("#total").val(total.toFixed(2));
        } else {
            alert("Please enter a valid number of hours.");
        }
    });
