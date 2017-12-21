$(document).ready(function(){
  // alert('is this working?')  test to see if connected.
  $('#submit').click(function(e){
    e.preventDefault();
    var first = $('#fname').val();
    var last = $('#lname').val();
    var description = $('#description').val();
     //console.log(first, last, description);  is this true?

  var html_str =
  '<div class="box"><p class="names">' + first + ' ' + last +'</p><p class="descriptionsadded">' + description + '</p><input class="flipcard" type="submit" value="(+)"></div>';

    $('.allboxes').append(html_str);
    //$(this).children().val('');
    //return false;
  });

  $('.allboxes').on('click','.box',function(){
    $(this).children().toggle(); //toggles back and front.
  });

});
