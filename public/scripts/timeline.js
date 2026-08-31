function showAnim() {
    $('.hide').each(function() {
        let elTop = $(this).offset().top
        let winBottom = $(window).scrollTop() + $(window).height()
        
        if (elTop + 40 < winBottom) {
            $(this).removeClass('hide')
        }
    })
}

$(window).on('scroll', function() {
    showAnim()    
})

$(function() {
    $(window).scrollTop(0)
    showAnim()
})