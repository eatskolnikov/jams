$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  $("#bgImage").height($("#top-section").height());

  $(window).resize(function(){
    $("#bgImage").height($("#top-section").height());
  });

  $(window).scroll(function(){
    var topsectionheight = $("#top-section").height();
    if($(window).scrollTop() > topsectionheight ){
      $("#navbar").addClass("navbar-fixed-top");
    }else{
      if($(window).scrollTop() < topsectionheight ){
        $("#navbar").removeClass("navbar-fixed-top");
      }
    }
  });

});