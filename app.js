/* Makes page more interactive */

var main = function() { 
  $('.parent').click(function() {
    $('.sub-nav').toggleClass('visible');
  });
});
    
    /*$('body').animate( {
      left: '285px'
    }, 200);
  });
  */

$(document).ready(main); /* runs the main function after HTML doc has fully loaded */
