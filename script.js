$(function() {
    $('.sp_menu').click(function() {
        $('.menu_open').toggleClass('active');
        $('.menu_text').toggleClass('active');
        $('.menu').toggleClass('active');
        $('.menu_logo').toggleClass('active');
    });
});

$(function() {
    $('.menu-open').click(function() {
        $('.menu_text').toggleClass('active');
        $('.menu').toggleClass('active');
        $('.menu_logo').toggleClass('active');
    });
});
