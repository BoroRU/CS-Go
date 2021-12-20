
//SLICK SLAIDER
$('.slaider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: 3000,
    responsive: [{
        breakpoint: 1024,
        settings: {
        dots:false,

    },
        breakpoint: 1120,
        settings: {
            dots:false,
        }
    }

    ]
});
$('.my-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass:'slick-btn',
    prevArrow:$('.prev'),
    nextArrow: $('.next'),
    autoplay: 1000,
    responsive: [
        {
            breakpoint: 1820,
            settings: {
                slidesToShow: 4,
                slidesToScroll:4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1120,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings:'unslick'

        }
    ]
});

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass:'slick-btn',
    prevArrow:$('.prev'),
    nextArrow: $('.next'),
    autoplay: 1000,
    responsive: [
        {
            breakpoint: 1820,
            settings: {
                slidesToShow: 4,
                slidesToScroll:4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1120,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings:'unslick'

        }
    ]
});
$('.prev').on('click', function() {
    $('.responsive').slick('slickPrev');
});
$('.next').on('click', function() {
    $('.responsive').slick('slickNext');
});


//StarTimer
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + 'мин' + seconds + 'сек';


            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function () {
        let sixteenMinutes = 60 * 16 - 30,
            display = document.querySelector('.timer__time');
        startTimer(sixteenMinutes, display);
    };

//Scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector('#header').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }


//Tabs
    const tabsBtn = document.querySelectorAll('.battles__btn');
    const tabsIteams = document.querySelectorAll('.iteam');

    tabsBtn.forEach(function (iteam) {
        console.log(this)
        iteam.addEventListener('click', function () {
            let currentBtn = iteam;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            console.log(this)

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function (iteam) {
                    iteam.classList.remove('active');
                })
                tabsIteams.forEach(function (iteam) {
                    iteam.classList.remove('change');
                })

                currentBtn.classList.add('active');
                currentTab.classList.add('change');
            }

            $('.my-slide').slick('setPosition');
        });

    });

document.querySelector('.battles__btn').click()










