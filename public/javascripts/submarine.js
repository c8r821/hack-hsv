$(function() {
    let material = '';
    let hthickness = 0.0;
    let radius = 0.0;

    $('#material').change(function() {
        material = $(this).val();
    });
    $('[name=hthickness]').change(function() {
        hthickness = +$(this).val() * (0.01 / 8) + 0.1;
        $('#hthickness').text(parseFloat(Math.round(hthickness * 100) / 100).toFixed(2) + " ft");
    });
    $('[name=radius]').change(function() {
        radius = +$(this).val() * 0.18 + 7;
        $('#submarine svg').css('width', (+$(this).val() * 0.3 + 38.85).toString() + "vw");
        $('#radius').text(parseFloat(Math.round(radius * 100) / 100).toFixed(2) + " ft");
    });

    ["#material", "[name=hthickness]", "[name=radius]"].forEach((ident) => {
        $(ident).trigger('change');
    });
    let hasbeendead = 0;
    let windowHeight = $(window).height(), pageHeight = $('body').height();

    $("#submarine").sticky()
    
    let warningDepth = 0;
    $(window).scroll(function() {
        if ($(window).scrollTop() > windowHeight * 0.5) {
            let scrollCenter = $(window).scrollTop() - windowHeight / 2;
            let depth = (scrollCenter - windowHeight * 0.5) / pageHeight * 1300;
            $('#depth').text(parseFloat(Math.round(depth * 100) / 100).toFixed(2).toString() + " ft");
            $('#pressure').text(parseFloat(Math.round(calcPressure(depth) * 100) / 100).toFixed(2).toString() + " MPa");
            $('#hpressure').text(parseFloat(Math.round(pressureOnHull(calcPressure(depth), radius) * 100) / 100).toFixed(2).toString() + " N");


            if (crush(depth + 500, radius, +material, hthickness)) {
                dangerDepth = depth;
                $('#gonnaDie').addClass('blink');
                $('#submarine svg').addClass("shake-little").addClass('shake-constant');                
            } else if (crush(depth + 1000, radius, +material, hthickness)) {
                warningDepth = depth;
                $('#gonnaDie').removeClass('blink');                                    
                $('#gonnaDie').css('visibility', 'visible');
                if (dangerDepth - depth >= 50) {
                    dangerDepth = 0;
                    $('#submarine svg').removeClass("shake-little").removeClass('shake-constant');
                }
            } else {
                $('#gonnaDie').css('visibility', 'hidden');
            }

            if (crush(depth, radius, +material, hthickness)) {
                if (!hasbeendead) {
                    // $('#submarine svg').fadeOut();
                    $(".modal").addClass("is-active");
                    hasbeendead = 1;
                }
            } else {
                hasbeendead = 0;
                $(".modal").removeClass("is-active");
            }
            
            $(".modal-close").click(function() {
                $(".modal").removeClass("is-active");
            });
        } else {
            $(".modal").removeClass("is-active");            
            $('#gonnaDie').css('visibility', 'hidden');
            $('#depth').text('0.0 ft');
            $('#pressure').text('0.0 MPa');
            $('#hpressure').text('0.0 N');
            hasbeendead = 0;
        }
    });
    $("#preSet").click(function() {
        let sub = JSON.parse($("#preset").val());
        $('#material').val(sub.material.yieldStrength);

        $('[name=hthickness]').val(sub.hullThickness * (8 / 0.01));
        // console.log(-(sub.hullThickness * (8 / 0.01));
        $('[name=radius]').val((sub.radius - 7) / 0.18);

        ["#material", "[name=hthickness]", "[name=radius]"].forEach((ident) => {
            $(ident).trigger('change');
        });
    });
});
