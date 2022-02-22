$(document).ready(function() {


    $(".drop-menu").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass("is-active");
        $(".header__menu-wrap").toggleClass("open");
        $("body, html").toggleClass("overflow");
    });

    $('.popup-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
        });
    });



    $('.popup').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade'
    });

    $("#form-header").validate({
        errorPlacement: function(error, element) {}
    });

    $("#form-footer").validate({
        errorPlacement: function(error, element) {}
    });

    $("#form-footer2").validate({
        errorPlacement: function(error, element) {}
    });

    $("#form").validate({
        errorPlacement: function(error, element) {}
    });

    $("#contacts-form").validate({
        errorPlacement: function(error, element) {}
    });

    $(".phone-number-input").inputmask({
        "mask": "+7 (999)-999-999-9",
    });

    var privateSlider = document.querySelector(".private-architect__slider");
    var privateSlider = new Swiper(privateSlider, {
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".slider-button--next",
            prevEl: ".slider-button--prev"
        },
        breakpoints: {
            1366: {
                slidesPerView: "auto",
                spaceBetween: 15,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                centeredSlides: true,
                slidesPerView: 2,
                spaceBetween: 40,
            }
        }
    });

    var blogSlider = document.querySelector(".blog__slider");
    var blogSlider = new Swiper(blogSlider, {
        centeredSlides: false,
        spaceBetween: 15,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".slider-button--next",
            prevEl: ".slider-button--prev"
        },
        breakpoints: {
            1366: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    var aboutSlider = document.querySelector(".about__slider");
    var aboutSlider = new Swiper(aboutSlider, {
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        grabCursor: false,
        loop: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: false,
        },
        breakpoints: {
            1701: {
                spaceBetween: 20,
                loop: true,
            },
            1366: {
                spaceBetween: 7,
                loop: true,
            },
            993: {
                spaceBetween: 23,
                loop: false
            },
            768: {
                scrollbar: false,
                loop: true,
                spaceBetween: 26,
            },
        }
    });

    var aboutMeSlider = document.querySelector(".about-me__slider");
    var aboutMeSlider = new Swiper(aboutMeSlider, {
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        breakpoints: {
            993: {
                spaceBetween: 30,
                slidesPerView: 'auto'
            },
            767: {
                spaceBetween: 20,
                slidesPerView: 'auto',
            },
            575: {
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        }
    });

    var advantagesSlider = document.querySelector(".advantages__slider");
    var advantagesSlider = new Swiper(advantagesSlider, {
        centeredSlides: false,
        spaceBetween: 30,
        loop: false,
        slidesPerView: "auto",
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        breakpoints: {
            1365: {
                spaceBetween: 10,
                slidesPerView: "auto",
                scrollbar: {
                    el: ".swiper-scrollbar"
                },
            },
            993: {
                slidesPerView: "auto",
                centeredSlides: false,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
                slidesPerView: "auto",
            }
        }
    });

    var projectsSlider = document.querySelector(".projects__slider");

    var projectsSlider = new Swiper(projectsSlider, {
        centeredSlides: false,
        spaceBetween: 80,
        slidesPerView: "auto",
        loop: false,
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        navigation: {
            nextEl: ".slider-button--next",
            prevEl: ".slider-button--prev"
        },
        breakpoints: {
            1701: {
                slidesPerView: "auto",
                spaceBetween: 80,
                loop: true,
                centeredSlides: false,
            },
            1366: {
                slidesPerView: "auto",
                spaceBetween: 45,
                loop: false,
                centeredSlides: false,
            },
            991: {
                slidesPerView: "auto",
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 40,
            }
        }
    });

    var aboutWrapSlider = document.querySelector(".about-wrap__slider");

    var aboutWrapSlider = new Swiper(aboutWrapSlider, {
        centeredSlides: false,
        spaceBetween: 15,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".slider-button--next",
            prevEl: ".slider-button--prev"
        },
        breakpoints: {
            991: {
                spaceBetween: 80,
            },
            767: {
                spaceBetween: 40,
            },
        }
    });

    var gallerySlider = document.querySelector(".gallery__slider");
    var gallerySlider = new Swiper(gallerySlider, {
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        loop: false,
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        breakpoints: {
            1366: {
                spaceBetween: 50,
                slidesPerView: 'auto'
            },
            767: {
                spaceBetween: 20,
                slidesPerView: 'auto',
            },
            575: {
                slidesPerView: 'auto',
                spaceBetween: 30
            }
        }
    });

    $(".tab-menu li a").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".tab-menu").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content-item").removeClass("active");
        $(".tab-content-item").eq(index).addClass("active");
    });

    $('body').smoothScroll({
        delegateSelector: '.main-section__list li a'
    });



});