
$('.project_img_carousel').owlCarousel({
    loop: true,
    margin:10,
    nav: false,
    items: 1.5,
    center: true,
    dots: false
});


$('.project_technology_carousel').owlCarousel({
    loop: false,
    margin:10,
    nav: false,
    center: false,
    dots: false,
    autoWidth: window.innerWidth < 575 ? true : false,
});

