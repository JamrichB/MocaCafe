


let options = {
    root: null,
    rootMargin:'200px',
    threshold:1.0
};
let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.target.id == 'cafeVideo')
        {
            if (entry.isIntersecting){
                entry.target.play(); 
            }
            else {
                entry.target.pause();
            }
        }
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#cafeVideo'));




// eslint-disable-next-line no-undef
$( function() {
	// eslint-disable-next-line no-undef
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );


      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        
      });


let swiper1 = document.querySelector('.swiper1');
let swiper2 = document.querySelector('.swiper2');
let swiper3 = document.querySelector('.swiper3');
let swiper4 = document.querySelector('.swiper4');
let swiper5 = document.querySelector('.swiper5');

let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let button3 = document.querySelector('#btn3');
let button4 = document.querySelector('#btn4');
let button5 = document.querySelector('#btn5');


button1.classList.add("active");
swiper1.style.display = "block";
swiper2.style.display = "none"; 
swiper3.style.display = "none";
swiper4.style.display = "none";
swiper5.style.display = "none";




button1.addEventListener('click', function() {
    swiper1.style.display = "block";
    swiper2.style.display = "none"; 
    swiper3.style.display = "none";
    swiper4.style.display = "none";
    swiper5.style.display = "none";

    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");
    button5.classList.remove("active");

})


button2.addEventListener('click', function() {
    swiper1.style.display = "none";
    swiper2.style.display = "block"; 
    swiper3.style.display = "none";
    swiper4.style.display = "none";
    swiper5.style.display = "none";

    
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");
    button4.classList.remove("active");
    button5.classList.remove("active");
})

button3.addEventListener('click', function() {
    swiper1.style.display = "none";
    swiper2.style.display = "none"; 
    swiper3.style.display = "block";
    swiper4.style.display = "none";
    swiper5.style.display = "none";

    
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
    button4.classList.remove("active");
    button5.classList.remove("active");
})

button4.addEventListener('click', function() {
    swiper1.style.display = "none";
    swiper2.style.display = "none"; 
    swiper3.style.display = "none";
    swiper4.style.display = "block";
    swiper5.style.display = "none";


    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.add("active");
    button5.classList.remove("active");

})

button5.addEventListener('click', function() {
    swiper1.style.display = "none";
    swiper2.style.display = "none"; 
    swiper3.style.display = "none";
    swiper4.style.display = "none";
    swiper5.style.display = "block";

    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    button4.classList.remove("active");
    button5.classList.add("active");
})


// eslint-disable-next-line no-undef
lightGallery(document.getElementById('animated-thumbnails'), {
    // Add a custom class to apply style only for the particular gallery
    addClass: 'lg-custom-thumbnails',

    // Remove the starting animations.
    // This can be done by overriding CSS as well
    animateThumb: false,
    allowMediaOverlap: true,
});


let arrow = document.querySelector('.fixed-arrow');
let value = 200;
window.addEventListener('scroll', function() {
	var position = this.window.scrollY;

    if (position >= value) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
        }

	
	
});












