function getAnswer() {
  var oracle = adjectives[Math.floor(Math.random()*300)];
  return oracle ;
}

$(() => {
  $('#acknowledgement .btn').click(e => {
    e.preventDefault();
    $('#acknowledgement').hide();
    $('#description').show();

    $('#description .list-group-item').removeClass('active');
    $('#description .btn').addClass('disabled');

    setTimeout(() => {
      $('#description .btn').removeClass('disabled');
    }, 5000);
  });
  $('#hint').click(e => {
    e.preventDefault();
    $('#description').hide();
    $('#asking').show();

    setTimeout(() => {
      $('#asking').hide();
      $('#answer').show();
      $('#answerText').text(getAnswer());
    }, 8000)
  });
});
