$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass ('active');
      $('body').toggleClass('lock'); // При вызове бургер-меню Добавляем к body class lock, для того что бы для класса Lock прописать запрет скролла страницы при открытом меню.
    })
})