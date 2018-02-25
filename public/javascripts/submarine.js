$(function() {
    let  windowHeight = $(window).height(), pageHeight = $('body').height();
    // init controller
    console.log(windowHeight);
    let controller = new ScrollMagic.Controller();

    // create a scene
    new ScrollMagic.Scene({
        offset: windowHeight * 0.5		// start this scene after scrolling for 50px
    })
        .setPin("#submarine") // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller

    $(window).scroll(function() {
        let scrollCenter = $(window).scrollTop() - windowHeight / 2;
        // console.log("PX:", scrollCenter, "Depth", scrollCenter / pageHeight * 4000 - windowHeight * 0.3, "feet");
    })
});