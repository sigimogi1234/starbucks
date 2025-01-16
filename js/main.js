// 스크롤 애니메이션
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#toTop');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY)
    if(window.scrollY > 500) {
        // 뱃지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });

        // 스크롤탑 버튼 보이기
        gsap.to(toTopEl, 0.2, {
            x: 0
        });
    } else {
        // 뱃지 숨기기
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });

        // 스크롤탑 버튼 숨기기
        gsap.to(toTopEl, 0.2, {
            x: 100
        });
    }
}, 300));
//_.throttle(function (){}, 시간)
// gsap.to(요소, 지속시간, 옵션)

// #toTop 버튼 누르면 위로 스크롤

// 자바스크립트 사용
// toTopEl.addEventListener('click', function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// gsap 사용
toTopEl.addEventListener('click', function () {
    gsap.to(window, 0.7,{
        scrollTo: 0
    });
});



//화면에서 요소 fade in 하기
const fadeEls = document.querySelectorAll('.visual .fadeIn');

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1
    });
});



// 스와이퍼슬라이드
const swiper1 = new Swiper('.noticeLine .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: true,
});
const swiper2 = new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.promotion .swiper-button-next',
        prevEl: '.promotion .swiper-button-prev',
    },
});
const swiper3 = new Swiper('.awards .swiper', {
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        nextEl: '.awards .swiper-button-next',
        prevEl: '.awards .swiper-button-prev',
    },
});



// 토글
//add remove 사용
// const promotionEl = document.querySelector('.promotion');
// const promotionToggleBtn = document.querySelector('.togglePromotion')
// let isHidePromotion = false;

// promotionToggleBtn.addEventListener('click', function(){
//     isHidePromotion = !isHidePromotion
//     if(isHidePromotion){
//         promotionEl.classList.add('hide')
//     } else{
//         promotionEl.classList.remove('hide')
//     }
// });

//토글 2
//toggle 사용
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.togglePromotion')

promotionToggleBtn.addEventListener('click', function(){
    promotionEl.classList.toggle('hide');
});



// 떠다니는 아이콘
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(
        selector,
        random(1.5, 2.5), {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay),
        }
    );
};
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);



// scroll maginc library
const spyEls = document.querySelectorAll('section.scrollSpy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: 0.8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})