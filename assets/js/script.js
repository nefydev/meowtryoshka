$(document).on('click', '.meow-body', function() {
    var currentMeow = $(this).parent().removeClass('next').addClass('selected');
    currentMeow.next().addClass('next');
    currentMeow.parent().addClass('readonly');
    setTimeout(function() { 
        currentMeow.parent().removeClass('readonly');

    }, currentMeow.attr('data-index') === "1" ? 14000 : 10000);
});