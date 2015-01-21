/* jshint devel:true, strict:false, laxcomma:true, bitwise:false */
/* global countdown */

$(function(){
  var clock = $('countdown-holder')
    , targetDate = new Date(2015, 04, 02, 18, 24)
    , units = (countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES);

  clock.innerHTML = countdown(targetDate, null, units).toString();
  setInterval(function(){
    clock.innerHTML = countdown(targetDate, null, units).toString();
  }, 1000);});
