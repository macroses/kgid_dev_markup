$(function () {

    // кастомный скролл
    $('.scrollbar-inner').scrollbar({});

    // шапочку фиксируем
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 1) {
            $('.header-nav').addClass('hid');
            $('.header-box').addClass('scrolled');
        } else {
            $('.header-nav').removeClass('hid');
            $('.header-box').removeClass('scrolled');
        }
    });

    // открытие поиска в десктопной версии шапки
    $('.header-search_btn').click(function () {
        $('.header-search_box input').toggleClass('open');
    });

    // открытие поиска в мобильной версии шапки
    $('.header-search_btn-mobile').click(function(e) {
        $('.header-search').slideToggle(300);
    })

    $(document).click(function (event) {
        if ($(event.target).closest(".header-search_btn").length) return;
        $(".header-search_box input").removeClass('open');
        event.stopPropagation();
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

    $('footer .accordion-opener').click(function () {
        $(this).toggleClass('change-icon');
    });

    // открытие уведомлений
    $('.header-notice').click(function (e) {
        $('.notice-box').toggle(0);
    });

    $(document).click(function (event) {
        if ($(event.target).closest(".header-notice").length) return;
        $(".notice-box").hide(0);
        event.stopPropagation();
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

    $('.card-item_img input[type=range]').bind('mousedown touchstart', function (e) {
        $(this).parent().children('.rate-num').addClass('visible-box');
        $(this).parent().parent().children('.card-item_description').children('.card-item_rating').addClass('visible-box');
    });
    $('.card-item_img input[type=range]').bind('mouseup touchend', function () {
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
        $('.dropdown-block').toggle();
    });

    $(document).click(function (event) {
        if ($(event.target).closest(".header-user").length) return;
        $(".dropdown-block").hide(0).removeClass('open');
        event.stopPropagation();
    });

    // modal
    $('#chapter-modal').modal('show');


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

    let inpPass = $('.reg-modal_input.pass');

    $('.show-pass').click(function (e) {
        $(this).toggleClass('show');
        if(inpPass.attr('type') == 'password') {
            inpPass.attr('type', 'text')
        }
        else{
            inpPass.attr('type', 'password');
        }
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
        $('.wrapper').toggleClass('blur-bg');
    }).on('hide.bs.modal', function () {
        $('.wrapper').toggleClass('blur-bg');
    });

    // для body добавляем класс, чтобы запретить прокрутку при открытии поиска
    $('#search-input').click(function(e) {
        e.preventDefault();

        $('.wrapper').addClass('blur-bg');
        $('.search-win').show();
        $('.search-win_top-inp input[type=text]').focus();
        $('body').addClass('modal-open');
    });

    $('.search-win_close-btn').click(function(e) {
        e.preventDefault();

        $('.wrapper').removeClass('blur-bg');
        $('.search-win').hide();
        $('body').removeClass('modal-open');
    });

    $('.clear-text_btn').click(function(e) {
        e.preventDefault();
        $('.search-win_top-inp input[type=text]').val('');
    })

    // показать уведомление о добавлении книги
    $('.add_shelf_book-list_item').click(function () {
        $('.popup-box').show().fadeOut(2000);
    });

    // настройки создания книжной полки
    $('.create_shelf_btn').click(function (e) {
        $('.create_shelf_box').toggleClass('create');
        $('.create_shelf_settings').slideToggle("slow");
    });

    $('.secret-shelf input').change(function () {
        if (this.checked) {
            $('.secret-shelf span').text('Закрытая')
        } else {
            $('.secret-shelf span').text('Открытая')
        }
    });

    $('.add_description-btn').click(function () {
        $('.shelf_name-description').slideToggle('slow');
    });

    // открытие отрывка книги
    $('.open-fragment_btn').click(function () {
        $('.book_item-fragment p').toggleClass('open');
        if ($('.book_item-fragment p').hasClass('open')) {
            $(this).text('Свернуть');
        } else {
            $(this).text('Развернуть');
        }
    });

    // Открыть комментарий
    $('.open-comment button').click(function () {
        $('.comment-item_content').toggleClass('open');
        if ($('.comment-item_content').hasClass('open')) {
            $(this).text('Свернуть');
        } else {
            $(this).text('Развернуть');
        }
    });


    // кнопка настроек в профиле.

    $(document).click(function (e) {
        let cont = $('.book_item-menu_btn');

        if (!cont.is(e.target) && cont.has(e.target).length === 0) {
            $('.book_item-menu_btn .dropdown-block').fadeOut(0);
        }
        else {
            $('.book_item-menu_btn .dropdown-block').fadeIn(0);
        }
    });

    // аккордеон для жанров
    let genresBtn = $('#genres .card .accordion-opener');

    genresBtn.click(function () {
        $(this).children('.genres-icon').toggleClass('active');
        $(this).parents('.card').toggleClass('active');
    });

    // последние запросы

    // let liWidth = $('.request-list li').width();
    // $('.more-request_items').click(function(e) {
    //     e.preventDefault();
    //     $('.request-list li').css({
    //         'transform' : `translateX(-${liWidth += liWidth}px)`, // какую-то хрень написал, но уже времени не было что-то придумывать. Визуально должно работать так.
    //         'transition': '.5s'
    //     });
    // });

    // Ридер
    $('.reader-content').click(function (e) {
        if ($(this).hasClass('active')) {
            $('.reader-content, .reader-section_list, .reader-header').removeClass('active');
        }
        else {
            $('.reader-header, .reader-settings_lgscreen').toggleClass('active');
            $('.settings-data').hide(300);
            $('.chapters-box').slideUp(300);
        }

        if ($('.reader-header').hasClass('active')) {
            $('.reader-funcs').hide(300);
        }
        else {
            $('.reader-funcs').delay(300).show(300);
        }
    });

    $('.reader-actions button').click(function (e) {
        $('.reader-section_list, .reader-content').show(0);
        $('.settings-data').slideUp(300);

        $('.chapters-box').hide(300);
    });
});

$(function () {
    // Ползунок для перелистывания страниц
    $('.settings-range input[type=range]').on('input', function () {
        var el, newPoint, newPlace, offsetPos;
        el = $(this);
        var widthInp = el.width();

        newPoint = (el.val() - el.attr('min')) / (el.attr('max') - el.attr('min'));
        offsetPos = 0.5;

        if (newPoint < 0) newPlace = 0;
        else if (newPoint > 1) newPlace = widthInp;
        else {
            newPlace = widthInp * newPoint + offsetPos;
            offsetPos -= newPoint;
        }
        // перемещение тултипа
        $('.output')
            .css({
                'left': newPlace,
                'marginLeft': offsetPos + "%"
            })
            .text(el.val());
    }).trigger('input');

    // ползунок в читалке
    $('.settings-range input[type=range]').on('input', function (e) {
        $(e.target).css({
            'backgroundSize': ((100 / e.target.max) * e.target.value) + '% 100%',
        });
    }).trigger('input');


    $('.settings-range input[type=range]').bind('mousedown touchstart', function () {
        $('.output').show();
    }).bind('mouseup touchend', function () {
        $('.output').hide();
    });

    // показать окно настроек
    $('.show-settings_btn').click(function (e) {
        e.preventDefault();
        $('.settings-data').slideDown(300);
        $('.chapters-box, .reader-section_list').hide(300);
    });

    // изменение контента ридера

    // выравнивание текста
    $('.align-left').click(function (e) {
        $(this).addClass('active');
        $('.align-center').removeClass('active');
        if ($(this).hasClass('active')) {
            $('.reader-content_container').css({
                'textAlign': 'left'
            });
        }
    });

    $('.align-center').click(function (e) {
        $(this).addClass('active');
        $('.align-left').removeClass('active');
        if ($(this).hasClass('active')) {
            $('.reader-content_container').css({
                'textAlign': 'justify'
            });
        }
    });
    // ------ выравнивание текста end

    // межстрочное растояние start
    let lhSm = $('.lh-sm');
    let lhMd = $('.lh-md');
    let lhLg = $('.lh-lg');

    lhSm.click(function (e) {
        $(this).addClass('active');
        $('.lh-md, .lh-lg').removeClass('active');
        $('.reader-content_container').css({
            'lineHeight': '1.4'
        });
    });

    lhMd.click(function (e) {
        $(this).addClass('active');
        $('.lh-sm, .lh-lg').removeClass('active');
        $('.reader-content_container').css({
            'lineHeight': '1.6'
        });
    });

    lhLg.click(function (e) {
        $(this).addClass('active');
        $('.lh-sm, .lh-md').removeClass('active');
        $('.reader-content_container').css({
            'lineHeight': '1.8'
        });
    });

    // Изменение размера шрифта
    let fzPlus = $('.fz-plus');
    let fzMinus = $('.fz-minus');
    let fzMin = 14;

    fzPlus.click(function (e) {
        fzMin++;
        $('.reader-content_container').css('fontSize', fzMin + 'px');
        fzMinus.removeAttr('disabled');
        if (fzMin >= 24) {
            $(this).attr('disabled', 'disabled');
        }
    });

    fzMinus.click(function (e) {
        fzMin--;
        $('.reader-content_container').css('fontSize', fzMin + 'px');
        fzPlus.removeAttr('disabled');
        if (fzMin <= 14) {
            $(this).attr('disabled', 'disabled');
        }
    });

    // Изменение семейства шрифтов.
    $('.font-carousel').carousel({
        interval: false
    });

    let fontCarousel = $('.font-carousel');
    let slideCarousel = function () {
        let index = $('.carousel-item.active', fontCarousel).index() + 1;
        if (index === 1) {
            $('.reader-content_container').css('fontFamily', 'Roboto');
        }
        else if (index === 2) {
            $('.reader-content_container').css('fontFamily', 'proxima_regular');
        }
        else if (index === 3) {
            $('.reader-content_container').css('fontFamily', 'AdelleCyrillic');
        }
        else if (index === 4) {
            $('.reader-content_container').css('fontFamily', 'Open Sans');
        }
    }

    fontCarousel.on('slid.bs.carousel', slideCarousel).trigger('slid.bs.carousel');


    // смена цветовой схемы
    $('.dark-scheme_btn').click(function () {
        $('.reader').removeClass('default sepia').addClass('dark');
    });
    $('.white-scheme_btn').click(function () {
        $('.reader').removeClass('dark sepia').addClass('default');
    });
    $('.sepia-scheme_btn').click(function () {
        $('.reader').removeClass('dark default').addClass('sepia');
    });

    // содержание в читалке
    $('.show-chapters_btn').click(function (e) {
        $('.chapters-box').slideDown(300);
        $('.settings-data').hide(300);
        $('.reader-section_list').hide(300);
    });
    $('.chapters-box .close').click(function (e) {
        $('.chapters-box').slideUp(300);
    });

    // reader fullscreen
    document.addEventListener('click', function (e) {

        if (!e.target.hasAttribute('data-toggle-fullscreen')) return;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }, false);

    // show single page in reader
    $('.single-page_btn').click(function(e) {
        $('.reader-content_container').toggleClass('single');
    });

    // authors list
    let letterStr = $('.alphabet-list li a').not('.all-authors_link');
    let headerText = $('.alphabet-header');

    letterStr.click(function (e) {
        e.preventDefault();
        let text = $(this).text();
        headerText.text('Выбран автор на букву' + ' ' + '"' + text.toUpperCase() + '"');
    });

    $('.all-authors_link').click(function (e) {
        e.preventDefault();
        headerText.text('Авторы')
    });


    // кнопка наверх
    let upBtn = $('.up_btn');

    $(window).scroll(function(e) {

        if ($(this).scrollTop() >= 300) {
            upBtn.fadeIn('slow');
        } else {
            upBtn.fadeOut('slow');
        }

    });

    upBtn.click(function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });

    // прилеплять блоки при прокрутке

    let headerHeight = $('.header-box').height();
    
    $(window).scroll(function(e) {
        let headerHeight = $('.header-box').height();
        let winScroll = $(window).scrollTop();

        if(winScroll >= headerHeight + 55) {
            $('.all-reviews_bookname').addClass('stick')
        }
        else{
            $('.all-reviews_bookname').removeClass('stick');
        }
    })

});