    'use strict';
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
       $('#main-nav').addClass('changeColor');
        }
        
        if ($(this).scrollTop() < 50) {
      $('#main-nav').removeClass('changeColor');
        }
    })
})

console.log('dziala');