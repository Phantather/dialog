let arrivalsItem = $('.arrivals__item');
let arrivals = $('.arrivals');

arrivalsItem.on('click', function () {
    arrivals.fadeIn('slow')
});

arrivals.on('click', function (e) {
    if (e.target.className === 'arrivals'){
        arrivals.fadeOut('slow')
    }
});



let arrivalsList  = $('.arrivals__list');

arrivalsList.on('click', 'li:not(.arrivals__item_active)', function() {
    $(this)
        .addClass('arrivals__item_active').siblings().removeClass('arrivals__item_active')
        .closest('div.arrivals__tabs').find('div.arrivals__tabs-content').removeClass('arrivals__tabs-content_active').eq($(this).index()).addClass('arrivals__tabs-content_active');
});


