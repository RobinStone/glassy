//---------------------- POPAP CONTROLLER --------------------

function hidePopap () {
    $('.popap').removeClass('show-popap');
    $('.overlay').css('display', 'none');
}

$('#popap-btn').on('click', function(){
    $('.popap').addClass('show-popap');
    $('.overlay').css('display', 'block');
});

$('.close-popap-btn').on('click', hidePopap);

$('.overlay').on('click', hidePopap);

//---------------------- SLIDER CONTROLLER --------------------
$('.slider-btn').on('click', function(){
//    var n= $(par).index();
    var n= $(this).html();
    $('.slider-btn').removeClass('current-slide');
    $('.icecream-item').removeClass('current');
    $(this).addClass('current-slide');
    
    
    $('.icecream-list').children().eq(n-1).addClass('current');
    
    if (n == 1) { $('.page').css('background-color', '#849d8f'); }
    if (n == 2) { $('.page').css('background-color', '#8996a6'); }
    if (n == 3) { $('.page').css('background-color', '#9d8b84'); }
    
    
    console.log('['+n+']');
});



//---------------------- MAP ---------------------------

$('.static-map').addClass('visually-hidden');

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 17
    });

    var collectionLabels = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [170, 120],
        iconImageOffset: [-55, -115]
});

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
//        balloonContentHeader: 'ROBIN',
//        balloonContentBody: 'ул. Мицеквича д.122 кв.10',
//        balloonContentFooter: 'Первый подъезд, третий этаж',
//        hintContent: 'Я ЖИВУ ТУТ'
    });

    collectionLabels.add(myPlacemark);
    myMap.geoObjects.add(collectionLabels);

}






