$(function() {
    setInterval(function() { //Oxygen
        if ($('#oxygen').val() > 0) {
            $('#oxygen').val($('#oxygen').val() - 1);
        } else {
            $("#can").data('value', +$('#can').data('value') - 1)
            $("#can").text("O2 Canisters Remaining: " + $("#can").data('value'));
            $('#oxygen').val(100);
        }

        if ($('#oxygen').val() < 20) {
            $('#oxygen').removeClass('is-warning').addClass('is-danger');
        } else if ($('#oxygen').val() < 45) {
            $('#oxygen').removeClass('is-success').addClass('is-warning');
        } else {
            console.log($('#oxygen').val());
            $('#oxygen').removeClass('is-danger').addClass('is-success');
        }
    }, 3000);

    setInterval(function() { //Carbon Dioxide
        // if $('#carbon_dioxide').val() < 5
        if ($('#carbon_dioxide').val() > 2) {
            $('#carbon_dioxide').val(Math.floor((Math.random() * 10) + 1));
        } else {
            $('#carbon_dioxide').val(5);
        }

    }, 1000);

    setInterval(function() { //Fuel Tank
        if ($('#fuel').val() > 0) {
            $('#fuel').val($('#fuel').val() - 1);
        } else {
            $('#fuel').val(100);
        }

        if ($('#fuel').val() < 20) {
            $('#fuel').removeClass('is-warning').addClass('is-danger');
        } else if ($('#fuel').val() < 45) {
            $('#fuel').removeClass('is-success').addClass('is-warning');
        } else {
            console.log($('#fuel').val());
            $('#fuel').removeClass('is-danger').addClass('is-success');
        }
    }, 180000); //3 mins
    setInterval(function() { //Food
        $('#food').val($('#food').val() - 1);
        if ($('#food').val() > 0) {
            $('#food').val($('#food').val() - 1);
        } else {
            $('#food').val(100);
        }
        if ($('#food').val() < 10) {
            $('#food').removeClass('is-warning').addClass('is-danger');
        } else if ($('#food').val() < 25) {
            $('#food').removeClass('is-success').addClass('is-warning');
        } else {
            console.log($('#food').val());
            $('#food').removeClass('is-danger').addClass('is-success');
        }
    }, 24*60*60);
})
