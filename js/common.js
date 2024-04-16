var winWidth, winHeight, winPos;


$(function($) {
"use strict";
winWidth = $(window).width();
winHeight = $(window).height();
winPos = $(window).scrollTop();

	
	
// 팝업창 //
$(".openLayerPopup").on(
"click",
function(e) {
e.preventDefault();
var targetID = $(this).attr("data-target");
var winWidth = $(window).width();
$(".mask").fadeIn(150);
$(".layerPopupContent").removeClass("opened");
$("#" + targetID).addClass("opened");

setTimeout(function() {
$(".layerpopupWrapper").attr("tabindex", "0").show()
.focus();
if (winWidth < 768) {
$(".layerpopupWrapper").height(winHeight - 40)
.addClass('phoneSize');
}
}, 150);

});

$(".btnClose, .mask").on("click", function(e) {
e.preventDefault();
var targetID = $(".layerPopupContent.opened").attr("id");
$(".layerPopupContent").removeClass("opened");
$(".layerpopupWrapper").hide();
$(".layerpopupWrapper").removeClass('phoneSize');
$(".mask").fadeOut(150);

setTimeout(function() {
$(".openLayerPopup").each(function() {
if ($(this).attr("data-target") === targetID) {
$(this).focus();
}
});
$(".layerpopupWrapper").removeAttr("tabindex");
}, 150);

});

$(window).resize(function() {
var winWidth = $(window).width();
if (winWidth >= 768) {
$(".layerpopupWrapper").height('auto').removeClass('phoneSize');
} else {
$(".layerpopupWrapper").addClass('phoneSize');
}

});

/*menu*/	
$(function() {
	$("#menubar-menus li").mouseenter(function(event) {
		$(this).find("div").parent().css("background", "#FFF");
		$(this).find("div").parent().children("a").css("color", "#000");
		$(this).find("div").slideDown("fast");
	}).mouseleave(function() {
		$(this).find("div:visible").slideUp(50, function() {
			// #menubar-menus li:hover 처리를 하지 않을 경우 아래 라인 활성,
			$(this).parent().css("background", "#666");
			$(this).parent().children("a").css("color", "#FFF");
		});
	});
});	

			

});





