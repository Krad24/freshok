$(function(){
    $('.slider__items').slick({
        prevArrow: '<button type="button" class="slick-arrows arrow-prev"><svg class="slick-arrows__img" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M0.384645 17.0149L16.3979 31.6079C16.9234 32.1307 17.7756 32.1307 18.3011 31.6079C18.8266 31.0851 18.8266 30.2369 18.3011 29.7141L3.25334 16L18.2998 2.2859C18.8252 1.76309 18.8252 0.914839 18.2998 0.392073C17.7743 -0.130695 16.9221 -0.130695 16.3966 0.392072L0.38331 14.9851C0.103241 15.2638 -0.0168347 15.6332 0.00187251 15.9986C-0.0155416 16.3654 0.104495 16.7348 0.384645 17.0149Z" fill="#505050"/>'+
        '</svg></button>',
        nextArrow: '<button type="button" class="slick-arrows arrow-next"><img src="../images/icon/arrow-right.svg" alt=""></button>',
        infinite: false,
    });

    var mixer = mixitup('.tovars__cards');

})
