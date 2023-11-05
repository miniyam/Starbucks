

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});


searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,     //점점 사라지게 처리
      display:'none'
    });
  } else {
    //배지 보이기 
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity:1, //점점 사라지게 처리
      display:'block'
    });
  }
}, 300)); 
 //0.3초 단위를 주어 우르르 실행되는 것을 방지 
 //throttle 특정 기능을 도입
 //_.throttle(함수, 시간) 


const fadeEls = document.querySelectorAll('.visual .fade-in');
  fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1 )  * .7, 
    //0.7초- 1.4초 순으로 요소 수 만큼 화면에 나타남 
    //반복적으로 자동화 시키는 것이 중요
    opacity: 1
  });
});



//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  loop: true,  // 4번째에서 1번쨰로 가도록 
  autoplay: true
});



new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', - swiper 기본값으로 지정되어 있으므로 따로 지정할 필요가 없음
  slidesPerView: 3,       // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10,       // 슬라이드 사이 여백
  centeredSlides: true,    // 1번 슬라이드가 가운데 보이기 
  loop: true,
  autoplay: {
    delay: 5000  
  },

  pagination: {
    el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자 
    clickable:true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});



















