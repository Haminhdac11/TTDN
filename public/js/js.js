const li_item = document.querySelectorAll('.navbar-nav li');

li_item.forEach((item) => {
    item.addEventListener('click', function() {
        li_item.forEach((otherItem) => {
            otherItem.classList.remove('navitem-active');
        });
        
        // Chọn phần tử
        item.classList.add('navitem-active');
    });
});

$(document).ready(function() {
    // Lấy tất cả các phần tử có class 'gads-circle-picture'
    const elements = $('.gads-circle-picture');

    // Hàm thực hiện hiệu ứng và chuyển đến phần tử tiếp theo
    function showNextElement() {
        const activeElement = $('.gads-circle-picture.active');
        activeElement.removeClass('active');

        // Nếu là phần tử cuối cùng, chuyển về phần tử đầu tiên
        const nextElement = activeElement.next('.gads-circle-picture').length
            ? activeElement.next('.gads-circle-picture')
            : elements.first();

        nextElement.addClass('active animate__animated animate__fadeInDown');
    }

    // Thực hiện hiệu ứng mỗi 3 giây
    setInterval(showNextElement, 3000);
});


// chuyển slide

$('.howto_success-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    
  });