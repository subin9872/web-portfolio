$(function () {
    $('.webpublish-wrap').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1000,
        pager: true,
        moveSlides: 1,
    });

    // modal popup
    const modal_btn = document.querySelectorAll('.modal_btn')
    const modal_popup_bg = document.querySelectorAll('.modal_popup_bg')
    const modal_close = document.querySelectorAll('.modal_popup_bg .close_btn')

    modal_btn.forEach(function (target, index) {
        target.addEventListener('click', function () {
            modal_popup_bg[index].style.display = 'block'
            $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
            cursor.classList.add('active')
        })
    })

    modal_close.forEach(function (target, index) {
        target.addEventListener('click', function () {
            modal_popup_bg[index].style.display = 'none'
            $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
            cursor.classList.remove('active')
        })
    })

    modal_popup_bg.forEach(function (target, index) {
        target.addEventListener('click', function (e) {
            if (this == e.target) //배경 클릭 시 창 닫기
                target.style.display = 'none'
            $.fn.fullpage.setAllowScrolling(true)
            cursor.classList.remove('active')
        })
    })

});