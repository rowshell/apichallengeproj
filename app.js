/* Makes page more interactive */

var main = function() { 
  $('.icon-menu').click(function() {
    $('.menu').animate({ 
      left:'0px'
    }, 200);
    
    /*$('body').animate( {
      left: '285px'
    }, 200);
  });
  */
  
}; 

$(document).ready(main); /* runs the main function after HTML doc has fully loaded */
