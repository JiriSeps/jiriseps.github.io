$(document).ready(function(){
    $('.parallax-bg').each(function() {
        const image = $(this).data('image');
        $(this).css('background-image', `url('./${image}')`);
    });
    
    // Initialize the Slick slider
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
    
    // Function to handle the parallax effect
    function handleParallax() {
        const scrolled = $(window).scrollTop();
        // First parallax with slower speed
        $('.parallax-bg.slower').css('transform', 'translateY(' + -(scrolled * 0.15) + 'px)');
        // Second parallax with faster speed
        $('.parallax-bg.faster').css('transform', 'translateY(' + -(scrolled * 0.25) + 'px)');
    }
    
    // Call handleParallax function when the page is loaded
    handleParallax();
    
    // Call handleParallax function when the user scrolls
    $(window).on('scroll', handleParallax);
    
    // Function to handle background movement based on mouse position
    $(document).on('mousemove', function(e) {   
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        const bgOffsetX = (mouseX - $(window).width() / 2) / 200;
        const bgOffsetY = (mouseY - $(window).height() / 2) / 200;
        $('.movingimage').css('transform', 'translate(' + bgOffsetX + 'px, ' + bgOffsetY + 'px)');
    });
    
    // Mobile navigation functionality
    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function(){
        mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
});