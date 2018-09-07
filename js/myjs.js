//---------------------- POPAP ---------------------------

$('#popap').on('click', function(){
   $('.contacts-popap').toggleClass('active-popap');
});

$('#close-contacts').on('click', function(){
   $('.contacts-popap').toggleClass('active-popap');
});

//---------------------- SHOW-HIDE MAP ------------------

$('#micro-map').on('click', function(){
   $('.map-popap').toggleClass('active-map');
});

$('#close-map').on('click', function(){
   $('.map-popap').toggleClass('active-map');
});

//---------------------- MAP ---------------------------

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 17
    });

    var collectionLabels = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [40, 50],
        iconImageOffset: [-28, -40]
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


//-------------------- SLIDER --------------------------

$('#right').on('click', function(){
   $('.slide').toggleClass('active-slide');
});

$('#left').on('click', function(){
   $('.slide').toggleClass('active-slide');
});

//-------------------- SERVICES-BTN --------------------

$('.services-btn').on('click', function(){
    $('.button-item').removeClass('current-service');
    $(this).parent().addClass('current-service');
    
    var par = $(this).parent();
    var n= $(par).index();
    $('.services-item').removeClass('current-item');
    $('.services-list').children().eq(n).addClass('current-item');
});







