// $(document).ready(function () {
	// console.logs the window.width
	// $(window).resize(function () {
		// console.log($(window).width())
	// })
// })


$(document).ready(function () {
    // console.logs the window.width
    $(window).resize(function () {
        console.log($(window).width())
        if ($(window).width() >= 786) {
            $('#mobile-nav').hide();
        }
    });
    $('#burger').click(function(){
        $('#mobile-nav').slideToggle();    
    });
});