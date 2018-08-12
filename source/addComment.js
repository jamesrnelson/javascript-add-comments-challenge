$(document).ready(function() {
  $('#new_comment_button').click(() => {
    $('#new_comment_button').hide();
    $('body').append('<form id="new_comment"></form>');
    $('form').append('<textarea placeholder="Your comment here..."></textarea><br>');
    $('form').append('<input id="authorName" placeholder="author"/>');
    $('form').append('<input id="submit_button" type="submit" value="Submit Comment"/>');
    document.getElementById('new_comment').style.display = 'block';
  });

  $('#submit_button').click(event => {
    event.preventDefault();
    let input = Array.from($('#new_comment :input')).map(input => input.value);
    $('<li>' + input[0] + '<span class="author">' + input[1] + '</span></li>').appendTo('#comment_list');
    $('#new_comment_button').show();
    $('form#new_comment').remove();
   });
});
