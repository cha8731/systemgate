$(window).scroll(function(event){
	var x=$(this).scrollTop(),
		Cont_width=$('body').width(),
		side_height='',
		header_confirm=$('div').hasClass('dcSubTitleBar'),
		header_move=$("#diContents").offset(),
		footer_move=$("#diFooter").offset(),
		header_class=$('#diSideMenu').attr('class');
	if(header_confirm==true){
	  if(Cont_width>1000&&(GetIEVersion()>8||GetIEVersion()==0)){
		if(x>header_move.top){
		  side_height=$('#diSideMenu').innerHeight();
		  if(x>footer_move.top-side_height){
			$('#diSideMenu').removeClass().addClass('leftMenuMvEnd');
		  }else{
			$('#diSideMenu').removeClass().addClass('leftMenuMv');
		  };
		}else if(x<header_move.top){
		  if(header_class=='leftMenuMv'){
			$('#diSideMenu').removeClass('leftMenuMv');
		  };
		};
	  }else{
		return false;
	  };
	}else{
	  header_class=$('#diContents').attr('class');
	  if(Cont_width>800&&(GetIEVersion()>8||GetIEVersion()==0)){
		if(x>header_move.top){
		  if(header_class!='leftMenuMv'){
			$('#diContents').removeClass().addClass('leftMenuMv');
		  };
		}else if(x<header_move.top){
		  if(header_class=='leftMenuMv'){
			$('#diContents').removeClass('leftMenuMv');
		  };
		};
	  }else{
		return false;
	  };

	};
});

jQuery(function($){
	// 질문클릭 바인딩
	$(".dc_faq_question").click(function(event)
	{
		var tmp_id = $(this).attr("id");
		var arr_tmp = tmp_id.split("_");
		var seq_no = arr_tmp[2];
		$('#pi_ans_'+seq_no).toggle("fast");
		$(this).toggleClass("on");
	});


	/*레프트메뉴 열기 닫기*/
	var sideMenu = $("#diLeftMenuList>ul");
	var sideMenuLi = $("#diLeftMenuList>ul>li");
	var sideMenuA = $("#diLeftMenuList>ul>li>a");
	var sideMenu_sub = $("#diLeftMenuList>ul>li>.dc2depth");
	var sideMenudep2A = $("#diLeftMenuList>ul>li>.dc2depth>li>a");

	sideMenuA.on("mouseover focus",function () {

		sideMenuLi.removeClass("over");
		sideMenuA.removeClass("on");
		sideMenudep2A.removeClass("on");
		sideMenu_sub.stop().slideUp("fast");

		$(this).addClass("on");
		$(this).parent().addClass("over");
		$(this).next(".dc2depth").addClass("on");
		$(this).next(".dc2depth").stop().slideDown("fast");

		if(sideMenuLi.hasClass("active") === true){
			//해당 depth에 active 클래스가 있는 경우 현재 위치해 있는 메뉴이기때문에 아래 소스는 실행시키지 않아야함
			$("#diLeftMenuList>ul>li.active>.dc2depth").stop().slideDown("fast");
		}

	});

	$("#diLeftMenuList").on("mouseleave",function () {

		sideMenudep2A.removeClass("on");
		sideMenuLi.removeClass("over");
		sideMenuA.removeClass("on");
		sideMenu_sub.removeClass("on");
		sideMenu_sub.stop().slideUp("fast");

		if(sideMenuLi.hasClass("active") === true){
			//해당 depth에 active 클래스가 있는 경우 현재 위치해 있는 메뉴이기때문에 아래 소스는 실행시키지 않아야함
			$("#diLeftMenuList>ul>li.active>.dc2depth").stop().slideDown("fast");
		}

	});

	sideMenudep2A.on("mouseover focus",function () {
		sideMenudep2A.removeClass("on");
		$(this).addClass("on");	
	});

	$("#diLeftMenuList>ul>li>.dc2depth>li").last().find("a").on("focusout",function () {
		$(sideMenu_sub).removeClass("on").stop().slideUp("fast");
		sideMenuLi.removeClass("over");
		sideMenuA.removeClass("on");
	});

});



$(window).on('load resize',function(){

	if($(window).width() < 1399){

		$( window ).scroll( function() {
			var footerOffset = $( '#diFooter' ).offset().top;
			var btnTopOffset = $( '#diTopGOWrap' ).offset().top;
			var position1 = $(window).scrollTop();
			var dcHeaderTop = $('.dcHeaderTop').innerHeight();

			//console.log('---' + dcHeaderTop);	
			//console.log('---' + footerOffset);
			//console.log('--->' + footerOffset1);
			//console.log(position1);
			//console.log(btnTopOffset);

			if ( position1 > dcHeaderTop ) {
				$( '.dcHeaderMenu' ).addClass('fixed');
				$( '.dcSubTitleBar' ).addClass('fixed');
				$( '.dcSearchBar' ).addClass('fixed');
			}else{
				$( '.dcHeaderMenu' ).removeClass('fixed');
				$( '.dcSubTitleBar' ).removeClass('fixed');
				$( '.dcSearchBar' ).removeClass('fixed');
			};

			if ( position1 > 0 ) {
				$( '#diTopGOWrap' ).fadeIn();
			}else{
				$( '#diTopGOWrap' ).fadeOut();
			};

		});
	}	else {

	}
});
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
//$(window).resize(function(){
//	location.reload();
//});

/*모바일 메뉴 스크립트*/
$(document).on('click', ".dcBtnAllMenuOpen",function(){
	$('.dcSiteMapWrap').show();
	$('.bgAllmenu').show();
});
$(document).on('click', ".dcBtnAllMenuClose",function(){
	$('.dcSiteMapWrap').hide();
	$('.bgAllmenu').hide();
});
//$(document).on('click', ".bgAllmenu",function(){
//	$('.dcSiteMapWrap').hide();
//	$('.bgAllmenu').hide();
//});

$(document).on("click",".dcSiteMapWrap .mo_sub_btn",function(event){
	$(this).siblings('.depth_wrap').stop(true, true).slideToggle();
	$(this).parent().toggleClass('on');
});

$(document).on("click",".dcSiteMapWrap .sub_link",function(event){
	$(this).siblings().stop(true, true).slideToggle();
	$(this).parent().toggleClass('on');
});

$(document).on("click",".dcSiteMapWrap .dc2depthWrap>li>a",function(event){
	$(this).siblings().stop(true, true).slideToggle();
	$(this).parent().toggleClass('on');
});



$(window).on('load resize',function(){

	if($(window).width() < 1399){

		//var left_width = 700; // 컨텐츠 화면넓이의 1/2 값에 퀵배너가 시작될 위치값을 더한 값
		//var currentLeft = ($(window).width() / 2) + left_width;
		//$("#diTopGOWrap").css('left', currentLeft);
		// 위로가기 버튼 픽스
		$( window ).scroll( function() {
			var footerOffset = $( '#diFooter' ).offset().top;
			var btnTopOffset = $( '#diTopGOWrap' ).offset().top;
			var position1 = $(window).scrollTop();
			var footerOffset1 = footerOffset - 976;

			//console.log('---' + footerOffset);
			//console.log('--->' + footerOffset1);
			//console.log(position1);
			//console.log(btnTopOffset);

			if ( position1 > 0 ) {
				$( '#diTopGOWrap' ).fadeIn();
			}else{
				$( '#diTopGOWrap' ).fadeOut();
			};

			//if ( position1 > footerOffset1 ) {
			//	$( '#diTopGOWrap' ).css('position','absolute').css('bottom','192'+"px");
			//}else{
			//	$( '#diTopGOWrap' ).css('position','fixed').css('bottom','30'+"px");
			//};

		});

	}	else {

		/*전체메뉴 열기*/
		$(document).on('click', ".dcBtnAllMenuOpen",function(){
			$('.dcAllSiteMapWrap').show();
		});
		$(document).on('click', ".dcBtnAllMenuClose",function(){
			$('.dcAllSiteMapWrap').hide();
		});

		// 웹접근성 관련 포커스 강제 이동
		tooltip();
		accessibilityFocus();

		//접근성 관련 포커스 강제 이동
		function accessibilityFocus() { 
			$(document).on('keydown', '[data-focus-prev], [data-focus-next]', function(e){
				var next = $(e.target).attr('data-focus-next'), 
						 prev = $(e.target).attr('data-focus-prev'),
						 target = next || prev || false; 
				
				if(!target || e.keyCode != 9) { 
					return;
				}
				
				if( (!e.shiftKey && !!next) || (e.shiftKey && !!prev) ) { 
					setTimeout(function(){
						$('[data-focus="' + target + '"]').focus();
					}, 1);
				}
			});
		} 

		function tooltip() {
			var openBtn = '[data-tooltip]',
					 closeBtn = '.tooltip-close';
			
			function getTarget(t) {
				return $(t).attr('data-tooltip');
			} 
			
			function open(t) {
				var showTarget = $('[data-tooltip-con="' + t + '"]');
				showTarget.show().focus();
				showTarget.find('.tooltip-close').data('activeTarget', t);
			} 
			
			function close(t) {
				var activeTarget = $('[data-tooltip-con="' + t + '"]'); 
				activeTarget.hide();
				$('[data-tooltip="' + t + '"]').focus(); 
			} 
			
			$(document) 
				.on('click', openBtn, function(e){
					e.preventDefault();
					open(getTarget(e.target));
				}) 
				.on('click', closeBtn, function(e) {
					e.preventDefault(); 
					close($(this).data('activeTarget')); 
				});
		}
		// 접근성 관련 포커스 강제 이동 끝

	}
});



jQuery(function($){



	/*게시판 상세페이지 인쇄관련*/
	$(".dcHeaderTop").find('button').on('click', function() {
		//Print ele4 with custom options
		$("#diWrap").print({
			//Use Global styles
			globalStyles : true,
			//Add link with attrbute media=print
			mediaPrint : true,
			//Custom stylesheet
			stylesheet : "/ko/css/print_all.css",
			//Print in a hidden iframe
			iframe : false,
			//Don't print this
			noPrintSelector : ".avoid-this",

			//Add this at top
			prepend : null,
			//Add this on bottom
			append : null
		});
	});

	/*게시판 상세페이지 인쇄관련*/
	$(".dcBbsViewWrap").find('button').on('click', function() {
		//Print ele4 with custom options
		$(".dcCon").print({
			//Use Global styles
			globalStyles : true,
			//Add link with attrbute media=print
			mediaPrint : true,
			//Custom stylesheet
			stylesheet : "/ko/css/print_bbs.css",
			//Print in a hidden iframe
			iframe : false,
			//Don't print this
			noPrintSelector : ".avoid-this",
			//Add this at top
			prepend : null,
			//Add this on bottom
			append : null
		});
		
		return false;
	});

	/*검색분류선택*/
	$(".selectBox01 select").change(function () {
		var changeTxt = $(this).find("option:selected").text();
		$(this).parent().find(".txt").text(changeTxt);
	});

	/*검색창 열기 닫기*/
	$(document).on('click', ".dcBtnSearchOpen",function(){
		$('.dcSearchBar').show();
		var searchTxt = document.getElementById('id_s3');
		searchTxt.focus();
	});
	$(document).on('click', ".dcBtnSearchClose",function(){
		$('.dcSearchBar').hide();
		$('.dcBtnSearchOpen').focus();
	});

	/*1차메뉴 열기 닫기*/
	var gnb = $("#diNav>ol");
	var gnbA = $("#diNav>ol>li>a");
	var gnb_sub = $("#diNav>ol>li>.dc2depthWrap");
	var dep2A = $("#diNav>ol>li>.dc2depthWrap>.basicWrapCenter>ul>li>a");
	var dep3A = $("#diNav>ol>li>.dc2depthWrap>.basicWrapCenter>ul>li>ul>li>a");

	gnb_sub.hide();

	gnbA.on("mouseover focus",function () {
		gnbA.removeClass("on");
		dep2A.removeClass("on");
		dep3A.removeClass("on");
		gnb_sub.stop().slideUp("fast");
		$(this).addClass("on");
		$(this).next(".dc2depthWrap").addClass("on");
		$(this).next(".dc2depthWrap").stop().slideDown("fast");
	});
	$("#diNav").on("mouseleave",function () {
		gnb_sub.stop().slideUp("fast");
		dep3A.removeClass("on");
		dep2A.removeClass("on");
		gnbA.removeClass("on");
		gnb_sub.removeClass("on");
	});
	dep2A.on("mouseover focus",function () {
		dep3A.removeClass("on");
		dep2A.removeClass("on");
		$(this).addClass("on");
	});
	dep3A.on("mouseover focus",function () {
		dep3A.removeClass("on");
		dep2A.removeClass("on");
		$(this).addClass("on");
		$(this).parent("li").parent("ul").prev("a").addClass("on");
	});
	$("#diNav>ol>li>.dc2depthWrap>.basicWrapCenter>ul>li>ul>li").last().find("a").on("focusout",function () {
		$(gnb_sub).removeClass("on").stop().slideUp("fast");
		gnbA.removeClass("on");
	})

	var allgnb = $(".dcSiteMapLi>ol");
	var allgnbA = $(".dcSiteMapLi>ol>li>a");
	var allgnb_sub = $(".dcSiteMapLi>ol>li>.dc2depthWrap");
	var alldep2A = $(".dcSiteMapLi>ol>li>.dc2depthWrap>ul>li>a");

	allgnbA.on("mouseover focus",function () {
		allgnbA.removeClass("on");
		alldep2A.removeClass("on");
		$(this).addClass("on");
		$(this).next(".dc2depthWrap").addClass("on");
	});
	$(".dcSiteMapLi").on("mouseleave",function () {
		alldep2A.removeClass("on");
		allgnbA.removeClass("on");
		allgnb_sub.removeClass("on");
	});
	alldep2A.on("mouseover focus",function () {
		alldep2A.removeClass("on");
		$(this).addClass("on");
	});
	$(".dcSiteMapLi>ol>li>.dc2depthWrap>ul>li").last().find("a").on("focusout",function () {
		$(allgnb_sub).removeClass("on").stop()
	});

	/*적합성평가문의 열기*/
	$(document).on('click', ".dcBtnQuesOpen",function(){
		$('.dcJeoKhapWrap').show();
		$('#diWrap').addClass('positionFixed');
	});
	$(document).on('click', ".dcBtnQuesClose",function(){
		$('.dcJeoKhapWrap').hide();
		$('#diWrap').removeClass('positionFixed');
	});


	/*메인 메뉴 롤링*/
	$(window).scroll(function(event){
		var x=$(this).scrollTop(),
			Cont_width=$('body').width(),
			side_height='',
			header_confirm=$('div').hasClass('dcHeader'),
			header_move=$("#diContents").offset(),
			footer_move=$("#diFooter").offset(),
			header_class=$('.tab_box').attr('class');
		if(header_confirm==true){
		  if(Cont_width>1000&&(GetIEVersion()>8||GetIEVersion()==0)){
			if(x>header_move.top){
			  side_height=$('.tab_box').innerHeight()
			  if(x>footer_move.top-side_height){
				$('.tab_box').removeClass().addClass('web_end');
			  }else{
				$('.tab_box').removeClass().addClass('web_move');
			  };
			}else if(x<header_move.top){
			  if(header_class=='web_move'){
				$('.tab_box').removeClass('web_move');
			  };
			};
		  }else{
			return false;
		  };
		}else{
		  header_class=$('#diContents').attr('class');
		  if(Cont_width>767&&(GetIEVersion()>8||GetIEVersion()==0)){
			if(x>header_move.top){
			  if(header_class!='web_move'){
				$('#diContents').removeClass().addClass('web_move');
			  };
			}else if(x<header_move.top){
			  if(header_class=='web_move'){
				$('#diContents').removeClass('web_move');
				$('#diSideMenu').removeClass('leftMenuMvEnd');
			  };
			};
		  }else{
			return false;
		  };

		};
	});

	
	/*메인 최신 게시판 탭 메뉴*/
	var tabA = $(".tabs>li>a");
	var tabS = $(".tabs>li>.dcBbsConList");

	tabA.on("click",function () {
			tabA.removeClass("on");
			tabS.hide();
			$(this).addClass("on");
			$(this).next(".dcBbsConList").show();
			return false;
	});

});




var glo_file_nm = ""; // 현재 파일명
$(document).ready(function()
{
  // GET 파라메터 값 가져오기
  /*
    - Get object of URL parameters '전체 파라미터를 가져올떄 ==> var allVars = $.getUrlVars();
    - Getting URL var by its nam '지정한 파라미터를 가져올떄 ==> var byName = $.getUrlVar('name');
  */
  $.extend({
    getUrlVars: function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function(name){
      return $.getUrlVars()[name];
    }
  });


  glo_file_nm = f_get_menu_code();    // 메뉴코드 찾기
  //f_get_left_menu_html(cur_menu_code);  // 레프트메뉴 호출

});

// 메뉴코드로 레프트메뉴 호출 - 1차메뉴코드명으로 되어있음
/*
function f_get_left_menu_html(cur_menu_code)
{
  var p_menu_cd = cur_menu_code.substr(0,2);
  $('.dcLeftMenu').load('/jeonpa/leftMenu/leftMenu'+p_menu_cd+'.html', function()
  {
    f_left_menu_sel(cur_menu_code);       // 레프트메뉴에 현재메뉴 선택
  });

}
*/

// 레프트메뉴의 현재메뉴 클래스변경처리
function f_left_menu_sel(cur_menu_code)
{
  $('.dc1depth').removeClass('active');
  $('.dc1depth>ul>li').removeClass('selected');

  var t_menu_cd = "";
  var url1 = "";
  var url2 = "";

  $('#diLeftMenuList .dc1depth').each(function(index,item)
  {
    url1 = $(this).children('a').attr('href');

    // 1차메뉴 찾아서 선택 클래스 넣기
    t_menu_cd = url1.substring(url1.lastIndexOf("/") + 1, url1.length);
    t_menu_cd = t_menu_cd.replace(/sub/g, '');
    t_menu_cd = t_menu_cd.replace(/.html/g, '');
    t_menu_cd = t_menu_cd.substr(0,4);
    //console.log(t_menu_cd);

    if(t_menu_cd == cur_menu_code.substr(0,4))
    {
      $(this).addClass('active');

      // 2메뉴 찾아서 선택클래스 넣기
      $(this).children('.dc2depth').children('li').each(function(index,item)
      {
        url2 = $(this).children('a').attr('href');
        //console.log(url2);

        t_menu_cd = url2.substring(url2.lastIndexOf("/") + 1, url2.length);
        t_menu_cd = t_menu_cd.replace(/sub/g, '');
        t_menu_cd = t_menu_cd.replace(/.html/g, '');

        if(t_menu_cd == cur_menu_code)
        {
          $(this).addClass('selected');
          return false;
        }
      });

      return false;
    }

  });

}

// URL에서 메뉴코드 찾기
function f_get_menu_code()
{
  var thisUrl = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

  thisUrl = thisUrl.split('?');
  thisUrl = thisUrl[0].replace(/sub/g, '');

  //console.log(thisUrl);
  return thisUrl;
}

// URL에서 메뉴코드 찾기
function f_get_file_name(t_url)
{
  var thisUrl = t_url.substring(t_url.lastIndexOf("/") + 1, t_url.length);

  thisUrl = thisUrl.split('?');
  thisUrl = thisUrl[0].replace(/sub/g, '');

  //console.log(thisUrl);
  return thisUrl;
}



/*상단으로 가기*/
$(document).on('click', "#diBtnTop",function(){
	$("html, body").animate({ scrollTop: 0 }, 200);
	return false;
});




jQuery(function($){



});
function GetIEVersion(){
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");
	if(Idx>0){// If IE, return version number.
		return parseInt(sAgent.substring(Idx+5,sAgent.indexOf(".",Idx)));
	}else if (!!navigator.userAgent.match(/Trident\/7\./)){// If IE 11 then look for Updated user agent string.
		return 11;
	}else{
		return 0; //It is not IE
	};
};



$(function() {

	var wrap = $("#wrap"); // 전체감싸기
	var tab = $("#snb .nav>ul"); // 서브왼쪽 메뉴 depth2
	var depth3 = tab.find(".depth3"); // 서브왼쪽 메뉴 depth3
	var depth4 = $(".depth4"); // 탭메뉴 depth4
	var depth5 = $("#depth5_menu_ul"); // 탭메뉴 depth5
	var contView = $(".content_body"); // 콘텐츠 영역
	var table = contView.find("table"); // 콘텐츠 속안에 테이블


	// sns
	var $sns = $(".sns");
	$sns.children("a").click(function() {
		$(this).parent().toggleClass("active");
		return false;
	});
	$sns.find(".close_btn").click(function() {
		$sns.removeClass("active");
		return false;
	});

	// cms에 직접작업한 inline 스타일 제거


	contView.find("*:not(col, .tb_contents *, #appMap *, #appMap1 *)").removeAttr("style");

	/* tabs */
	var tabsLiLength = depth4.find("li").length;
	if (tabsLiLength > 5) {
		depth4.addClass("row_br");
		lengthPer = tabsLiLength % 3;
		if (lengthPer == 0) depth4.addClass("li_col4");
	}

	/* xeicon 접근성 */
	//$("[class*='xi-']").attr("aria-hidden", "true");

	/* 테이블 캡션 - 기존의 summary를 캡션화하는 작업 */
	$('table').each(function() {
		var tableTitle = $(this).attr("summary");
		if ($(this).find("caption").length > 0) {// caption이 없을때
			$(this).find("caption").append(tableTitle);
		} else {// caption이 있을때
			$(this).prepend("<caption>" + tableTitle + "</caption>");
		}
		$(this).removeAttr("summary");

	});

	// table감싸기 - 모바일에서 표를 콘트롤 하기 위해
	var tableScroll = 0;
	table.each(function() {
		
		var elementClassNm = $(this).attr('class');
		
		//console.log("//////////"+elementClassNm);
		
		if (!$(this).hasClass("boardList")) { // 일반테이블일 경우
			$(this).find("tbody tr").each(function() {
				thNum = $(this).children("th").length;
				tdNum = $(this).children("td").length;
				cellNum = thNum + tdNum;// tr속 th + td갯수 합
				
				if (elementClassNm != 'width100') {
				    tableScroll = 1;
				}
				
				/*if (cellNum >= 3) {
					tableScroll = 1;// 한줄에 cell이 3개 이상인경우가 있으면 tableScroll값은 참
				}*/
			});
			if (tableScroll == 1) {
				$(this).wrap("<div class='table_wrap scroll'></div>");
				tableScroll = 0;
			} else {
				$(this).wrap("<div class='table_wrap'></div>");
			}
		}
	});

	// 링크안에 span태그로 감싸기 ie에서 아이콘까지 밑줄이 생기는 현상 없애기위해
	$(".content_body a[target='_blank']").each(function(){
		$(this).wrapInner("<span></span>");
	});


	/* faq 아코디언 */
	var faqList = $(".listFaq");
	faqList.find("li~li .question > a").attr("title", "비활성 답변");
	faqList.find("li:first-child .question > a").attr("title", "활성화된 답변");
	faqList.find(".question > a").on("click", function() {
		if ($(this).parent().parent().hasClass("active")) {
			$(this).attr("title", "비활성 답변");
		} else {
			$(this).parent().parent().siblings().find("a").attr("title", "비활성 답변");
			$(this).attr("title", "활성화된 답변");
		}
		$(this).parent().parent().toggleClass("active").siblings().removeClass("active");
		return false;
	});

	/* 첨부파일 아코디언 */
	$(".add_file_list .add_file li").eq(0).addClass("active");
	$(".add_file_list .add_file li").eq(0).find("span").text("첨부파일 닫기");
	$(".add_file_list .add_file li .file_preview").on("click",function(){
		$(this).parent().parent().toggleClass("active");
		if ($(this).parent().parent().hasClass("active")) {
			$(this).children("span").text("첨부파일 닫기");
		} else {
			$(this).children("span").text("첨부파일 보기");
		}
	});

	/* 해외질병 국가별질병정보 상세페이지 탭 */
	$(".country_tab > li > a").on("click", function() {
		$(this).parent().addClass("on").siblings().removeClass("on");
		$(this).attr("title","선택메뉴").parent().siblings().children().attr("title","");
		$($(this.hash)).show().siblings().hide();
		return false;
	});
	$("#left_menu_top > li").addClass('noChilden');
	$(".depth3").parent().addClass('hasChilden').removeClass('noChilden');
	
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


	// 모바일에서 이미지눌렀을때 이미지확대
	$(".figure").on("click", function() {
		wrap.addClass("fullscreen");
		if (!$(this).hasClass("active")) {
			$(this).append("<div class='close'><i class='xi-close'></i><span class='sr_only'>큰이미지 보기 닫기</span></div>");
		}
		$(this).addClass("active");
	});

	// 모바일에서 바탕눌렀을때 클래스해제
	contView.on("click focus", ".close", function() {
		wrap.removeClass("fullscreen");
		$(this).parent().removeClass("active");
		$(".close").remove();
	});
	// 모바일에서 바탕눌렀을때 클래스해제
	wrap.on("click focus", function() {
		$("#snb .nav>ul>li, .depth4>li, #depth5_menu_ul>li").removeClass("on");
	});

});

/*2024-04-11*/
var winWidth, winHeight, winPos;


$(function($) {
"use strict";
winWidth = $(window).width();
winHeight = $(window).height();
winPos = $(window).scrollTop();
	
/* 펼치기 접기 */
function openCloseToc() {
    if(document.getElementById('toc-content').style.display === 'block') {
      document.getElementById('toc-content').style.display = 'none';
      document.getElementById('toc-toggle').textContent = '보이기';
    } else {
      document.getElementById('toc-content').style.display = 'block';
      document.getElementById('toc-toggle').textContent = '숨기기';
    }
  }
	
/* faq */	
	$(".faqList dl dt a").on("click", function() {
		if($(this).parent().next().css("display") === "none") {
			$(".faqList dl dt a").removeClass('on');
			$(".faqList dl dd").slideUp(150);
			$(this).addClass('on');
			$(this).parent().next().slideDown(150);
		} else {
			$(".faqList dl dt a").removeClass('on');
			$(".faqList dl dd").slideUp(150);
		}
	});
	
	
	
		if( winPos > $(".gnbTopArea").height() + $(".gnbWrap").height() ) {
			if( $(".gnbWrap").hasClass("fixed") ) {
				
			} else {
				$(".gnbWrap").addClass("fixed");
				
				if( winWidth < 768 ) {
					$(".searchWrap").addClass("fixed");
				}
			}
		} else {
			if( $(".gnbWrap").hasClass("fixed") ) {
				$(".gnbWrap").removeClass("fixed");
				
				if( winWidth < 768 ) {
					$(".searchWrap").removeClass("fixed");
				}
			}
		}


	$(window).scroll(function() {
		winWidth = $(window).width();
		winPos = $(window).scrollTop();


		if( winPos > $(".gnbTopArea").height() + $(".gnbWrap").height() ) {
			if( $(".gnbWrap").hasClass("fixed") ) {
				
			} else {
				$(".gnbWrap").addClass("fixed");
				
				if( winWidth < 768 ) {
					$(".searchWrap").addClass("fixed");
				}
			}
		} else {
			if( $(".gnbWrap").hasClass("fixed") ) {
				$(".gnbWrap").removeClass("fixed");
				
				if( winWidth < 768 ) {
					$(".searchWrap").removeClass("fixed");
				}
			}
		}

	});

});


