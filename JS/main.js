function drop (idMenu) {
    let btn = document.getElementById(idMenu).style.display;
    if(btn === "block"){
        document.getElementById(idMenu).style.display = "none";
    }
    else{
        document.getElementById(idMenu).style.display = "block";
    }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})