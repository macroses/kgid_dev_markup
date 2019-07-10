$(function () {

    // шапочку фиксируем
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 50) {
            $('.header-box').addClass('fixed');
        } else {
            $('.header-box').removeClass('fixed');
        }
    });

    // открытие поиска в десктопной версии шапки
    $('.header-search_btn').click(function () {
        $('.header-search_box input').addClass('open');
    });

    //   ползунок
    $('.range-mix').on('input', function (e) {
        $(e.target).css({
            'backgroundSize': ((100 / e.target.max) * e.target.value) + '% 100%',
        });
    }).trigger('input');

    $(".carousel").carousel({
        interval: false
    });

    $('.accordion-opener').click(function () {
        $(this).toggleClass('change-icon');
    });


    // Дестроим карусель на больших экранах
    $(window).resize(carouselResize);

    function carouselResize() {
        let winWidth = $(window).width();
        let carousel = $('.carousel .tips-item');

        const maxTabletWidth = 1024;

        if (winWidth >= maxTabletWidth) {
            if (carousel.hasClass("carousel-item"))
                carousel.removeClass("carousel-item");
        } else {
            if (!carousel.hasClass("carousel-item"))
                carousel.addClass("carousel-item");
        }
    }

    carouselResize();

    // пробую перемещать оценку

    $('.card-item_img input[type=range]').bind('mousedown', function (e) {
        $(this).parent().children('.rate-num').addClass('visible-box');
        $(this).parent().parent().children('.card-item_description').children('.card-item_rating').addClass('visible-box');
    });
    $('.card-item_img input[type=range]').bind('mouseup', function () {
        $(this).parent().children('.rate-num').removeClass('visible-box');
        $(this).parent().parent().children('.card-item_description').children('.card-item_rating').removeClass('visible-box');
    })


    $('.card-item_img input[type=range]').on('input', function (e) {
        $(this).parent().children('.rate-num').text($(this).val());
        $(this).parent().children('.rate-num').css({
            'left': ($(this).val()) * 8.5 + '%'
        })
    });

    // показать мобильное меню.

    $('.header-user').click(function () {
        $('.dropdown-block').toggleClass('open');
    });

    // modal
    // $('#add_shelf_modal').modal('show');


    $(function () {
        $('.reg-modal_input').each(function (e) {
            var placeholder = $(this).attr('placeholder');
            $(this).before('<span>' + placeholder + '</span>');
            $(this).on('focus', function () {
                var inputContent = $(this).val();
                if (inputContent == '') {
                    $(this).prev().addClass('visible');
                }

            });
            $(this).on('blur', function () {
                var inputContent = $(this).val();
                if (inputContent == '') {
                    $(this).prev().removeClass('visible');
                }
            });
        });
    });

    $('.show-pass').click(function (e) {
        $(this).toggleClass('show');
    });


    // прыгаем по шагам в модальном окне
    let $nextBtn = $('.next-step_btn');

    $nextBtn.on('click', function () {
        $(this).parents('.step-item').slideToggle();
        $(this).parents('.step-item').next().slideToggle();
    })

    // поддержка тултипов
    $('[data-toggle="tooltip"]').tooltip();

    // добавляем blur при открытии модального окна
    $('.modal').on('show.bs.modal', function () {
        $('.wrapper').toggleClass('blur_bg');
    }).on('hide.bs.modal', function () {
        $('.wrapper').toggleClass('blur_bg');
    });

    // показать уведомление о добавлении книги
    $('.add_shelf_book-list_item').click(function(){
        $('.popup-box').show().fadeOut(2000);
    });

    // настройки создания книжной полки
    $('.create_shelf_btn').click(function(e){
        $('.create_shelf_box').toggleClass('create');
        $('.create_shelf_settings').slideToggle("slow");
    });

    $('.secret-shelf input').change(function(){
        if(this.checked) {
            $('.secret-shelf span').text('Закрытая')
        } else{
            $('.secret-shelf span').text('Открытая')
        }
    });

    $('.add_description-btn').click(function(){
        $('.shelf_name-description').slideToggle('slow');
    });

    // открытие отрывка книги
    $('.open-fragment_btn').click(function() {
        $('.book_item-fragment p').toggleClass('open');
        if($('.book_item-fragment p').hasClass('open')){
            $(this).text('Свернуть');
        } else{
            $(this).text('Развернуть');
        }
    });

    // Открыть комментарий
    $('.open-comment button').click(function() {
        $('.comment-item_content').toggleClass('open');
        if($('.comment-item_content').hasClass('open')){
            $(this).text('Свернуть');
        } else{
            $(this).text('Развернуть');
        }
    });


    // кнопка настроек в профиле.

    $(document).click(function(e) {
        let cont = $('.book_item-menu_btn');

        if(!cont.is(e.target) && cont.has(e.target).length === 0) {
            $('.book_item-menu_btn .dropdown-block').fadeOut(0);
        }
        else{
            $('.book_item-menu_btn .dropdown-block').fadeIn(0);
        }
    });

    // календарь
    

});