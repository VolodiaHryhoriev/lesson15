$(function() {
    $('.block').animate({
        height: '527px',
        width: '240px',
    }).slideDown(1000, function() {
        $('h1').html($('h1').text() - 1);
    }).slideUp(1000, function() {
        $('h1').html($('h1').text() - 1);
        $('.block').css({
            display: 'block',
            backgroundColor: 'green'
        });
    })
})