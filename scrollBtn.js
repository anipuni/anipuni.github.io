$(function() { var topBtn = $('#page-top'); topBtn.hide(); $(window).scroll(function () { if ($(this).scrollTop() > 10) { topBtn.fadeIn();} else { topBtn.fadeOut();}
}); topBtn.click(function () { $('body,html').animate({ scrollTop: 0
}, 500); return false;});}); 