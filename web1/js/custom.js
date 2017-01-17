// JavaScript Document
//tooltip

$(document).ready(function () {
$("[rel=tooltip]").tooltip();
});
//tooltip


//countdown
$(function () {
	var austDay = new Date();
	austDay = new Date("March 1, 2017 11:00:00");
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
});