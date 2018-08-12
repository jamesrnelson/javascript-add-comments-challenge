$(document).ready(function() {
  $('form').hide();
  $('#new_comment_button').click(() => {
    $('#new_comment_button').hide();
    $('body').append('<form id="new_comment"></form>');
    $('form').show()
    document.getElementById('new_comment').style.display = 'block';
  });

  $('#form_submit').on("click", function(event) {
    event.preventDefault();
    $("form").hide();
    $("#new_comment_button").show();
    let comment = $('input[name="comment"]').val();
    let author = $('input[id="authorName"]').val();
    if (comment) {
      $(`<li>${comment}<span class="author">${author}</span></li>`).appendTo( "#comment_list" );
    }
  });
});
