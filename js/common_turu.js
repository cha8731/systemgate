var winWidth, winHeight, winPos;


$(function($) {
"use strict";
winWidth = $(window).width();
winHeight = $(window).height();
winPos = $(window).scrollTop();

	
$(function() { 
    /*$(".off").hover(function(){ 
       $(this).find("img").attr("src", $(this).find("img").attr("src").replace("off.png", "on.png")); 
       $(this).find("p").css("color", "#fff" ); 
       $(this).find("span").css("color", "#fff" ); 
    }, function(){
       $(this).find("img").attr("src", $(this).find("img").attr("src").replace("on.png", "off.png")); 
					  $(".text").find("p").css("color", "#000" ); 
					  $(".text").find("span").css("color", "#494949" ); 
    });*/ 
	
});
	

	
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
	

$(".openLoginPopup").on(
"click",
function(e) {
e.preventDefault();
var targetID = $(this).attr("data-target");
var winWidth = $(window).width();
$(".mask").fadeIn(150);
$(".loginPopupContent").removeClass("opened");
$("#" + targetID).addClass("opened");

setTimeout(function() {
$(".loginpopupWrapper").attr("tabindex", "0").show()
.focus();
if (winWidth < 768) {
$(".loginpopupWrapper").height(winHeight - 20)
.addClass('phoneSize');
}
}, 150);

});

$(".btnClose, .mask").on("click", function(e) {
e.preventDefault();
var targetID = $(".loginPopupContent.opened").attr("id");
$(".loginPopupContent").removeClass("opened");
$(".loginpopupWrapper").hide();
$(".loginpopupWrapper").removeClass('phoneSize');
$(".mask").fadeOut(150);

setTimeout(function() {
$(".openLoginPopup").each(function() {
if ($(this).attr("data-target") === targetID) {
$(this).focus();
}
});
$(".loginpopupWrapper").removeAttr("tabindex");
}, 150);

});

$(window).resize(function() {
var winWidth = $(window).width();
if (winWidth >= 768) {
$(".loginpopupWrapper").height('auto').removeClass('phoneSize');
} else {
$(".loginpopupWrapper").addClass('phoneSize');
}

});
	

	
	/*go top*/
	$("#top").click(function(){
		$("html, body").animate({scrollTop:0}, 500);
	});
	
	
	$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var sct2 = $(document).height();
	
	/*nav position*/
	if(sct <= 345) {
		$("#nav").removeClass("active");
	} else {
		$("#nav").addClass("active");
	}
	
	/*top button position*/
	if(sct >= 100) {
		$("#top").fadeIn(300);
		$("#top").css("bottom","50px");
		if(sct >= (sct2 - 1000)) {
			$("#top").css("bottom","258px");
		}
	} else {
		$("#top").hide();
	}
});

		
	/////////////////////////////////   Main Menu   ///////////////////////////////////
	var $gnb = $('#gnb');
	var athrCd = $('#athrCd').val()

	$gnb.find('a').on('focusin mouseover', function(){
//		alert($('#athrCd').val());
		if(athrCd == '100002' || athrCd == '100004' || athrCd == '100005' || athrCd == '100006' || athrCd == '999999'){
			$("#dimed").fadeIn(300);
			$gnb.addClass('active');
			$(this).parents('li').addClass('on').siblings().removeClass('on');
		}
	});
	$gnb.on('focusout mouseleave', function(){
			$("#dimed").fadeOut(300);
			$gnb.removeClass('active');
			$gnb.find('li').removeClass('on');
	});
				
			
	$('.login').mouseenter(function(){
        $('.moreLogin').stop().slideDown(300);
    });

	  $('.login').mouseleave(function(){
        $('.moreLogin').stop().slideUp(300);
    });

		 $('.moreLogin').mouseenter(function(){
        $('.moreLogin').stop().slideDown(300);
   });

	  $('.moreLogin').mouseleave(function(){
        $('.moreLogin').stop().slideUp(300);
   });

	
				
  $('.workChange').mouseenter(function(){
        $('.moreWork').stop().slideDown(300);
    });

    $('.workChange').mouseleave(function(){
        $('.moreWork').stop().slideUp(300);
    });

	$('.moreWork').mouseenter(function(){
        $('.moreWork').stop().slideDown(300);
   });

	  $('.moreWork').mouseleave(function(){
        $('.moreWork').stop().slideUp(300);
   });

  $('.workChange1').mouseenter(function(){
        $('.moreWork1').stop().slideDown(300);
    });

    $('.workChange1').mouseleave(function(){
        $('.moreWork1').stop().slideUp(300);
    });

	$('.moreWork1').mouseenter(function(){
        $('.moreWork1').stop().slideDown(300);
   });

	  $('.moreWork1').mouseleave(function(){
        $('.moreWork1').stop().slideUp(300);
   });
	
	  $('.workChange2').mouseenter(function(){
        $('.moreWork2').stop().slideDown(300);
    });

    $('.workChange2').mouseleave(function(){
        $('.moreWork2').stop().slideUp(300);
    });

	$('.moreWork2').mouseenter(function(){
        $('.moreWork2').stop().slideDown(300);
   });

	  $('.moreWork2').mouseleave(function(){
        $('.moreWork2').stop().slideUp(300);
   });

// alarm_wrap 20210827 start //
  $('.alarm_box').mouseenter(function(){
        $('.moreAlarm').stop().slideDown(300);
    });

    $('.alarm_box').mouseleave(function(){
        $('.moreAlarm').stop().slideUp(300);
    });

	$('.moreAlarm').mouseenter(function(){
        $('.moreAlarm').stop().slideDown(300);
   });

	  $('.moreAlarm').mouseleave(function(){
        $('.moreAlarm').stop().slideUp(300);
   });

$('.login').focusin(function(){
$('.moreLogin').stop().slideDown();
});

$('.moreLogin').focusin(function(){
$('.moreLogin').stop().slideDown();
}).focusout(function(){
	$(".moreLogin").stop().slideUp();
});
	
	
	/* file upload */	
	$('.fileBox').each(function(){
		$(this).find('.btnFile > .addFile02').change(function(){
			var _this = $(this).val();
			$(this).parent().prev('.addFile').val(_this);
		});
	});
	
	$(".attchFileReset").on("click",function(){
		var fileId = $(this).attr('id');
		var resetFileId = fileId.replace(/[^0-9]/g,""); //���� index page ID ��
		
		if($.browser.msie){
			//ie �϶� input[type=file] init.
			$("#atch_"+resetFileId).replaceWith($("#atch_"+resetFileId).clone(true));
			$("#atch_"+resetFileId).val("");
		}else{
			$("#atch_"+resetFileId).val("");
		}
		$("#atch_"+resetFileId+"_label").val("");
	});	

/* select for email */
	$(document).on("change", ".emailBox .selectBox select", function() {
		var sel_val = $(this).find('>option:selected').val();
		if ( sel_val === 'self' ) {
			$(".inputEmail2 input[type='text']").val('').focus();
		} else {
			$(".inputEmail2 input[type='text']").val(sel_val);
		}
	});
	
	
	/* step on/off  202007 �߰� */														
 $(".step_onoff").click(function(){
   var subCont = $(".stepBox");
     if( subCont.is(":visible") ){
         subCont.slideUp();
									$(".step_onoff").removeClass('on');
         }else{
         subCont.slideDown();
									$(".step_onoff").addClass('on');
      }
  });
	
	 $(".step_onoff2").click(function(){
   var subCont2 = $(".stepBox2");
     if( subCont2.is(":visible") ){
         subCont2.slideUp();
									$(".step_onoff2").removeClass('on');
         }else{
         subCont2.slideDown();
									$(".step_onoff2").addClass('on');
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


$(document).ready(function () {
"use strict";
    //gnb
    $(".nav_box").on('mouseenter focusin', function () {
        $(".twoDBg").slideDown(300);
        $(".nav_box li .twoD").slideDown(300);
    });
    $(".nav_box").on('mouseleave', function () {
        $(".twoDBg").stop().slideUp(300);
        $(".nav_box li .twoD").stop().slideUp(300);
    });

    $('.mobile_gnb_open_btn').click(function () {
        if ($(this).is('.is-active')) {
            $(this).removeClass('is-active');
            $(".mobile_gnb_list").removeClass('on');
            $(".family_link_m").removeClass('on');
            $(".header_wrap .header h1").removeClass('on');
            $("html, body").css({
                "height": "100%"
            });
            $(".mobile_gnb_list .gnb_area .oneD.depth").eq(mOneDNum).removeClass("on");
            $(".mobile_gnb_list .gnb_area .twoD").eq(mOneDNum).hide();
            mOneDNum = -1;
        } else {
            $(this).addClass('is-active');
            $(".mobile_gnb_list").addClass('on');
            $(".family_link_m").addClass('on');
            $(".header_wrap .header h1").addClass('on');
            $("html, body").css({
                "height":"100%",
                "overflow-y": "auto"
            });
        }
    });

    var mOneDNum = -1;
    $(".mobile_gnb_list .gnb_area .oneD.depth").each(function (i) {
        $(this).click(function () {
            if (mOneDNum !== i) {
                $(".mobile_gnb_list .gnb_area .oneD.depth").eq(mOneDNum).removeClass("on");
                $(".mobile_gnb_list .gnb_area .twoD").eq(mOneDNum).slideUp(300);
                mOneDNum = i;
                $(".mobile_gnb_list .gnb_area .oneD.depth").eq(mOneDNum).addClass("on");
                $(".mobile_gnb_list .gnb_area .twoD").eq(mOneDNum).slideDown(300);
            } else {
                $(".mobile_gnb_list .gnb_area .oneD.depth").eq(mOneDNum).removeClass("on");
                $(".mobile_gnb_list .gnb_area .twoD").eq(mOneDNum).slideUp(300);
                mOneDNum = -1;
            }
        });
    });
    
	/*go top*/
	$("#a2").click(function(){
		$("html, body").animate({scrollTop:0}, 0);
	});
	
	
	$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var sct2 = $(document).height();
	
	/*nav position*/
	if(sct <= 345) {
		$("#nav").removeClass("active");
	} else {
		$("#nav").addClass("active");
	}
	
	/*top button position*/
	if(sct >= 100) {
		$("#a2").fadeIn(700);
		$("#a2").css("top","280px");
		if(sct >= (sct2 - 1500)) {
			$("#a2").css("top","15%");
		}
	} else {
		$("#a2").hide();
	}
});
    
});

function getReserveInfo(target) {
    var tbody = target.parentNode;
    var trs = tbody.getElementsByTagName('tr');
    var textColor = "000";
    var orgTColor = "#000";
 
    for ( var i = 0; i < trs.length; i++ ) {
        if ( trs[i] != target ) {
        	trs[i].classList.remove('ck');
            trs[i].style.color = textColor;
        } else {
        	trs[i].classList.add('ck')
            trs[i].style.color = orgTColor;
        }
    }
}