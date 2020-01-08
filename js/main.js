var mixer = mixitup('.container-filter');

$(document).ready(function () {

    /* Меню плавная прокрутка*/
    $('a[href^="#"').click(function(){
        var target = $(this).attr('href'); //Сохраняем значение атрибута href в переменной:
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

/* Кнопка наверх */
$(window).scroll(function() {
    if ($(this).scrollTop() != 0)
        $('#toTop').fadeIn();
    else
        $('#toTop').fadeOut();
});
$('#toTop').click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 800);
});
});
