$(function () {
  const $answer = $('#answer');
  const $reveal_answer_btn = $("#reveal-answer");
  const $cardForm = $(".card_form");

  $answer.hide();

  $reveal_answer_btn.click(event => {
    $answer.show();
    $reveal_answer_btn.hide();
  });

  $('#cards_tab a[href="#write"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#cards_tab a[href="#preview"]').click(function (e) {
    e.preventDefault()

    $.ajax({
      method: "POST",
      url: "/cards/preview",
      dataType: "json",
      data: {
        question: $('#question_id').val()
      },

      success(data) {
        if (data == null || data.length == 0) {
          return false;
        } else {
          console.log(data)
          $('#preview').html(data['question_html']);
          $('#cards_tab a[href="#preview"]').tab('show');
        }
      }
    });
  });

  $('textarea').keydown(function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 9) {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        var spaces = "  ";
        this.value = this.value.substring(0, start) + spaces + this.value.substring(end);

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + spaces.length;
    }
  });

});
