

let headerBtn = $('.header__button');
let overlay = $('.overlay');
let popupClose= $('.popup__close');
let popupFormBtn = $('.popup__form-btn');

headerBtn.on('click', function () {
    overlay.fadeIn('slow')
});


popupClose.on('click', function () {
    overlay.fadeOut('slow')
});

popupFormBtn.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut('slow')
});

overlay.on('click', function (e) {
   if (e.target.className === 'overlay'){
       overlay.fadeOut('slow')
   }
});


let ul = $('.review__list');

ul.on('click', 'li:not(.review__item_active)', function() {
    $(this)
        .addClass('review__item_active').siblings().removeClass('review__item_active')
        .closest('div.review__tabs').find('div.review__tabs-content').removeClass('review__tabs-content_active').eq($(this).index()).addClass('review__tabs-content_active');
});

let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    margin: 30,
    autoHeight: true,
    dotsContainer: '#dots',
    loop:true,
});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});


let map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.878982, 74.595075],
        zoom: 18
    });
    let myIcon = DG.icon({
        iconUrl: 'https://lh3.googleusercontent.com/proxy/hrI4__IwBmiANc62PK4SR53PXiYY3hV-szGRMUsLUTSKGeohr-Z54LnlmA12ao1Dop-bwSjcsdf5bo2kfeBnELLfsoZ-3ic2BBzxIrF2Qfpkm3PGg5U',
        iconSize: [100, 60],
    });

    DG.marker([42.878982, 74.595075], {icon: myIcon}).addTo(map)
        .bindPopup('IKEA').bindLabel('Я статическая подсказка!', { static: false });

});