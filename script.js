
$(function() {
    $('.menu').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-open').toggleClass('active');
        $('.menu-open-button').toggleClass('active');
        $('.menu_text').toggleClass('active');
        $('.menu_logo').toggleClass('active');
        $('.menu-item').toggleClass('active');
    });
});

$(function() {
    $('.sp_menu').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-open').toggleClass('active');
        $('.menu-open-button').toggleClass('active');
        $('.menu_text').toggleClass('active');
        $('.menu_logo').toggleClass('active');
        $('.menu-item').toggleClass('active');
    });
});

$(function() {
    $('.sp_menu.sp_menu_title').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-open').toggleClass('active');
        $('.menu-open-button').toggleClass('active');
        $('.menu_text').toggleClass('active');
        $('.menu_logo').toggleClass('active');
        $('.menu-item').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.tab-panels .tabs li').on('click', function(){ 
      $('.tab-panels .tabs .active').removeClass('active'); 
      $(this).addClass('active');
      var paneltoshow = $(this).attr('rel');
                  
    $('.tab-panels .panel.active').slideUp('100', function(){
      $(this).removeClass('active');              

    $('#'+paneltoshow).delay('100').slideDown(function () {
      $(this).addClass('active');          
    });
   });

    });

});
