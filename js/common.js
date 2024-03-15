var winWidth, winHeight, winPos;


$(function($) {
"use strict";
winWidth = $(window).width();
winHeight = $(window).height();
winPos = $(window).scrollTop();

	
	
// �˾�â //
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
			// #menubar-menus li:hover ó���� ���� ���� ��� �Ʒ� ���� Ȱ��,
			$(this).parent().css("background", "#666");
			$(this).parent().children("a").css("color", "#FFF");
		});
	});
});	

			

});

/* �� */
$(function() {

	var wrap = $("#wrap"); // ��ü���α�
	var tab = $("#snb .nav>ul"); // ������� �޴� depth2
	var depth3 = tab.find(".depth3"); // ������� �޴� depth3
	var depth4 = $(".depth4"); // �Ǹ޴� depth4
	var depth5 = $("#depth5_menu_ul"); // �Ǹ޴� depth5
	var contView = $(".content_body"); // ������ ����
	var table = contView.find("table"); // ������ �Ӿȿ� ���̺�
	
	/*
	 * ======================= ����Ͽ� =======================
	 */

	if ($(window).width() < 1005) {
		var snbActive = $("#snb ul>li.active>a");
		snbActive.next().hide();
		snbActive.on("click", function() {
			$(this).next().show();
			tab.children().toggleClass("on");
			event.stopPropagation();
			return false;
		});
		$(".depth4 li.active a").on("click", function() {
			depth4.children().toggleClass("on");
			event.stopPropagation();
			return false;
		});
		$("#depth5_menu_ul li.active a").on("click", function() {
			depth5.children().toggleClass("on");
			event.stopPropagation();
			return false;
		});
	}


});




