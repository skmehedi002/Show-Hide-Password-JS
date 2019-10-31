/*===============Show Hide Password==========*/
$(document).ready(function() {
  var show_hide_input = $("#show_hide_password input");
  var show_hide_i = $("#show_hide_password i");

  show_hide_i.on('click', function(event) {
    event.preventDefault();
    if(show_hide_input.attr("type") === "text"){
      show_hide_input.attr('type', 'password');
      show_hide_i.addClass( "fa-eye-slash" );
      show_hide_i.removeClass( "fa-eye" );
    }else if(show_hide_input.attr("type") === "password"){
      show_hide_input.attr('type', 'text');
      show_hide_i.removeClass( "fa-eye-slash" );
      show_hide_i.addClass( "fa-eye" );
    }
  });
   var show_hide_input_2 = $("#show_hide_password_2 input");
  var show_hide_i_2 = $("#show_hide_password_2 i");

  show_hide_i_2.on('click', function(event) {
    event.preventDefault();
    if(show_hide_input_2.attr("type") === "text"){
      show_hide_input_2.attr('type', 'password');
      show_hide_i_2.addClass( "fa-eye-slash" );
      show_hide_i_2.removeClass( "fa-eye" );
    }else if(show_hide_input_2.attr("type") === "password"){
      show_hide_input_2.attr('type', 'text');
      show_hide_i_2.removeClass( "fa-eye-slash" );
      show_hide_i_2.addClass( "fa-eye" );
    }
  });
  
});