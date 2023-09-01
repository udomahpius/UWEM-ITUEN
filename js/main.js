        (function ($) {
            "use strict";

            // Spinner
            var spinner = function () {
                setTimeout(function () {
                    if ($('#spinner').length > 0) {
                        $('#spinner').removeClass('show');
                    }
                }, 1);
            };
            spinner();
            
            
            // Initiate the wowjs
            new WOW().init();


            // Sticky Navbar
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.sticky-top').css('top', '0px');
                } else {
                    $('.sticky-top').css('top', '-100px');
                }
            });
            
            
            // Dropdown on mouse hover
            const $dropdown = $(".dropdown");
            const $dropdownToggle = $(".dropdown-toggle");
            const $dropdownMenu = $(".dropdown-menu");
            const showClass = "show";
            
            $(window).on("load resize", function() {
                if (this.matchMedia("(min-width: 992px)").matches) {
                    $dropdown.hover(
                    function() {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    },
                    function() {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }
                    );
                } else {
                    $dropdown.off("mouseenter mouseleave");
                }
            });
            
            
            // Back to top button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.back-to-top').fadeIn('slow');
                } else {
                    $('.back-to-top').fadeOut('slow');
                }
            });
            $('.back-to-top').click(function () {
                $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
                return false;
            });


            // Header carousel
            $(".header-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                items: 1,
                dots: false,
                loop: true,
                nav : true,
                navText : [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]
            });


            // Testimonials carousel
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 24,
                dots: true,
                loop: true,
                nav : false,
                responsive: {
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            });
            
        })(jQuery);

        // click to view all content
            
        let hideIcon = document.querySelector(".icon-non"); 
        let showIcon = document.querySelector(".icon-show");
        let hidenItem = document.querySelector('.hide-item');
        let useStatement = false;
        hideIcon.classList.add('hide');
        hidenItem.classList.add('hide');
        
        let iconContainer = document.querySelector('.icon-box');

        iconContainer.addEventListener('click', () => {
            if (useStatement === false) {
                hideIcon.classList.remove('hide');
                showIcon.classList.add('hide');
                hidenItem.classList.remove('hide');
                useStatement = true;
            }
            else {
                hideIcon.classList.add('hide');
                showIcon.classList.remove('hide');
                hidenItem.classList.add('hide');
                useStatement = false;

            }
        })


        // click to view all content two
       
        let hideIcon_2 = document.querySelector(".icon-non-2"); 
        let showIcon_2 = document.querySelector(".icon-show-2");
        let hidenItem_2 = document.querySelector('.hide-item-2');
        let useStatement_2 = false;
        hideIcon_2.classList.add('hide');
        hidenItem_2.classList.add('hide');
         
        let iconContainer_2 = document.querySelector('.icon-box-2');
        
        iconContainer_2.addEventListener('click', () => {
            if (useStatement_2 === false) {
                hideIcon_2.classList.remove('hide');
                showIcon_2.classList.add('hide');
                hidenItem_2.classList.remove('hide');
                useStatement_2 = true;
            }
            else {
                hideIcon_2.classList.add('hide');
                showIcon_2.classList.remove('hide');
                hidenItem_2.classList.add('hide');
                useStatement_2 = false;
        
            }
        })

        
        // click to view all content three

        let hideIcon_3 = document.querySelector(".icon-non-3"); 
        let showIcon_3 = document.querySelector(".icon-show-3");
        let hidenItem_3 = document.querySelector('.hide-item-3');
        let useStatement_3 = false;
        hideIcon_3.classList.add('hide');
        hidenItem_3.classList.add('hide');
            
        let iconContainer_3 = document.querySelector('.icon-box-3');
        
        iconContainer_3.addEventListener('click', () => {
            if (useStatement_3 === false) {
                hideIcon_3.classList.remove('hide');
                showIcon_3.classList.add('hide');
                hidenItem_3.classList.remove('hide');
                useStatement_3 = true;
            }
            else {
                hideIcon_3.classList.add('hide');
                showIcon_3.classList.remove('hide');
                hidenItem_3.classList.add('hide');
                useStatement_3 = false;
        
            }
        })
              
                        
        // click to view all content

            // click to view all content 6
       
            let hideIcon_6 = document.querySelector(".icon-non-6"); 
            let showIcon_6 = document.querySelector(".icon-show-6");
            let hidenItem_6 = document.querySelector('.hide-item-6');
            let useStatement_6 = false;
            hideIcon_6.classList.add('hide');
            hidenItem_6.classList.add('hide');
             
            let iconContainer_6 = document.querySelector('.icon-box-6');
            
            iconContainer_6.addEventListener('click', () => {
                if (useStatement_6 === false) {
                    hideIcon_6.classList.remove('hide');
                    showIcon_6.classList.add('hide');
                    hidenItem_6.classList.remove('hide');
                    useStatement_6 = true;
                }
                else {
                    hideIcon_6.classList.add('hide');
                    showIcon_6.classList.remove('hide');
                    hidenItem_6.classList.add('hide');
                    useStatement_6 = false;
            
                }
            })


                    // click to view all content 7
       
        let hideIcon_7 = document.querySelector(".icon-non-7"); 
        let showIcon_7 = document.querySelector(".icon-show-7");
        let hidenItem_7 = document.querySelector('.hide-item-7');
        let useStatement_7 = false;
        hideIcon_7.classList.add('hide');
        hidenItem_7.classList.add('hide');
         
        let iconContainer_7 = document.querySelector('.icon-box-7');
        
        iconContainer_7.addEventListener('click', () => {
            if (useStatement_7 === false) {
                hideIcon_7.classList.remove('hide');
                showIcon_7.classList.add('hide');
                hidenItem_7.classList.remove('hide');
                useStatement_7 = true;
            }
            else {
                hideIcon_7.classList.add('hide');
                showIcon_7.classList.remove('hide');
                hidenItem_7.classList.add('hide');
                useStatement_7 = false;
        
            }
        })


    
    


// get current date

document.getElementById('date').innerHTML = new Date().getFullYear()


// sign up
document.querySelector('.click').addEventListener('click', () => {
    window.location.assign('../contact.html#signup')
})

