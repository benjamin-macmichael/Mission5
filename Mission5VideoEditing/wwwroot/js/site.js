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
