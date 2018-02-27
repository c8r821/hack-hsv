$(function() {
    let material = '';
    let hthickness = 0.0;
    let radius = 0.0;

    $('#material').change(function() {
        material = $(this).val();
    });
    $('[name=hthickness]').change(function() {
        hthickness = +$(this).val() * 0.0018 + 0.02;
        $('#hthickness').text(parseFloat(Math.round(hthickness * 100) / 100).toFixed(2) + " ft");
    });
    $('[name=radius]').change(function() {
        radius = +$(this).val() * 0.22 + 8;
        $('#submarine').css('width', (+$(this).val() * 0.4115 + 38.85).toString() + "vw");
        $('#radius').text(parseFloat(Math.round(radius * 100) / 100).toFixed(2) + " ft");
    });

    ["#material", "[name=hthickness]", "[name=radius]"].forEach((ident) => {
        $(ident).trigger('change');
    });
    let hasbeendead = 0;
    let windowHeight = $(window).height(), pageHeight = $('body').height();
    // init controller
    let controller = new ScrollMagic.Controller();
    // create a scene
    new ScrollMagic.Scene({
        offset: windowHeight * 0.5		// start this scene after scrolling for 50px
    })
        .setPin("#submarine") // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller

    $(window).scroll(function() {
        if ($(window).scrollTop() > windowHeight * 1.2) {
            let scrollCenter = $(window).scrollTop() - windowHeight / 2;
            let depth = scrollCenter / pageHeight * 6000 - windowHeight * 0.3;
            $('#depth').text(parseFloat(Math.round(depth * 100) / 100).toFixed(2).toString() + " ft");
            $('#pressure').text(parseFloat(Math.round(calcPressure(depth) * 100) / 100).toFixed(2).toString() + " MPa");
            $('#hpressure').text(parseFloat(Math.round(pressureOnHull(calcPressure(depth), radius) * 100) / 100).toFixed(2).toString() + " N");
            if (warning(depth, radius, material, hthickness)) {
                $('#gonnaDie').show();
            } else {
                $('#gonnaDie').hide();
            }

            if (crush(depth, radius, +material, hthickness)) {
                if (!hasbeendead) {
                    $(".modal").addClass("is-active");
                    hasbeendead = 1;
                }
            } else {
                hasbeendead = 0;
            }
            
            $(".modal-close").click(function() {
                $(".modal").removeClass("is-active");
            });
            // console.log(material);
            // if (crush(depth, radius, +material, hthickness))
            //     console.log('deded');
            // else
            //     console.log('not deded');
            // console.log("PX:", scroll
            // Center, "Depth", scrollCenter / pageHeight * 4000 - windowHeight * 0.3, "feet");
        } else {
            $('#gonnaDie').hide();
            $('#depth').text('0.0 ft');
            $('#pressure').text('0.0 ft');
            $('#hpressure').text('0.0 ft');
            hasbeendead = 0;
        }
    })
});
