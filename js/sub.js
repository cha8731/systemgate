$(function() {

	var wrap = $("#wrap"); // 전체감싸기
	var tab = $("#snb .nav>ul"); // 서브왼쪽 메뉴 depth2
	var depth3 = tab.find(".depth3"); // 서브왼쪽 메뉴 depth3
	var depth4 = $(".depth4"); // 탭메뉴 depth4
	var depth5 = $("#depth5_menu_ul"); // 탭메뉴 depth5
	var contView = $(".content_body"); // 콘텐츠 영역
	var table = contView.find("table"); // 콘텐츠 속안에 테이블
	
	/*
	 * ======================= 모바일용 =======================
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
