var $menuItem = $('ul>li');
var $subMenu1 = $('.sub1');
var $subMenu2 = $('.sub2');
var $subMenu3 = $('.sub3');
var $allSubs = $('ol');
var $menu1 = $('.menu1');
var $menu2 = $('.menu2');
var $menu3 = $('.menu3');
var $menu4 = $('.menu4');

$allSubs.addClass('hide');

$menu1.on('click', function() {
  $allSubs.addClass('hide');
  $allSubs.removeClass('show');
  $subMenu1.removeClass('hide');
  $subMenu1.addClass('show');
});
$menu2.on('click', function() {
  $allSubs.addClass('hide');
  $allSubs.removeClass('show');
  $subMenu2.removeClass('hide');
  $subMenu2.addClass('show');
});
$menu3.on('click', function() {
  $allSubs.addClass('hide');
  $allSubs.removeClass('show');
  $subMenu3.removeClass('hide');
  $subMenu3.addClass('show');
});
$menu4.on('click', function() {
  $allSubs.removeClass('show');
  $allSubs.addClass('hide');
});

$menuItem.on('click', function () {
  $menuItem.removeClass('active');
  $(this).addClass('active');
});
