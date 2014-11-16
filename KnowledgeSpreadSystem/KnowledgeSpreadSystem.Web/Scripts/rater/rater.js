﻿$(document).ready(function () {
    var $rating = $('.star-rating[data-rating]');
    var rating = Math.round(parseFloat($rating.attr('data-rating')));
    $rating.find('input:nth-of-type(' + rating + ')').prop('checked', 'checked');
    $rating.find('input').prop('disabled', 'disabled');

      $('.star-rating[data-url] input').change(
        function () {
            var $this = $(this);
            var url = $this.parent().attr('data-url');
            var $error = $this.parent().parent().find('.error');
            var $success = $this.parent().parent().find('.success');
            $.post(url, { value: this.value })
                .error(function (data) {
                    $this.parent().find('input:radio').prop('checked', false);
                    $error.text('error: ' + data).fadeIn(1500,function() {
                        $error.fadeOut(3000);
                    });
                })
                .done(function (data) {
                    $this.parent().find('input:radio').prop('disabled', 'disabled');
                    $success.text('success: ' + data).fadeIn(1500, function() {
                    $success.fadeOut(3000);
                });
            });
        }
    );
})