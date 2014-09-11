var jcbys = jcbys || {};
jcbys.index = {
	init:function(){
		this.initDatePicker();
		this.intTab();
	},
	initDatePicker:function(){
		$( ".datepicker" ).datepicker({
			inline: true,
			showOtherMonths: true,
			showMonthAfterYear:1
		});
	},
	intTab:function(){
		$(".ic-box").each(function(){
			var _box = $(this),
				_tabitem = _box.find(".tab").find("li"),
				_tabbox = _box.find(".ic-list");

			_tabitem.on("click",function(){
				$(this).addClass("cur").siblings().removeClass("cur");
				_tabbox.hide().eq($(this).index()).show();
			});
		});
	},
	addToFavorite:function() {
		var a = window.location.href,
		b = "\u4eac\u4e1cJD.COM-\u7f51\u8d2d\u4e0a\u4eac\u4e1c\uff0c\u7701\u94b1\u53c8\u653e\u5fc3";
		document.all ? window.external.AddFavorite(a, b) : window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(b, a, "") : alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c!\n\u8bf7\u60a8\u4f7f\u7528\u83dc\u5355\u680f\u6216Ctrl+D\u6536\u85cf\u672c\u7ad9\u3002");
	},
	setHome:function(obj,url){
	    try{
	        obj.style.behavior='url(#default#homepage)';
	       obj.setHomePage(url);
	    }
	    catch(e){
	       if(window.netscape){
	          try{
	              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
	         }catch(e){
	              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
	          }
	       }else{
	        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
	       }
	    }
	}
}
jcbys.common = {
	init:function(){
		this.friendlink();
	},
	friendlink:function(){
		var _box = $("#friendlink"),
			_dropdownBtn = _box.find(".dropdown"),
			_dropdownList = _box.find(".droplist");
		
		_dropdownBtn.on("click",function(e){
			_dropdownList.toggleClass("hide");
			e.stopPropagation();
			$(document).on("click",function(){
				_dropdownList.addClass("hide");
			});
		});
	}
}
$(function(){
	jcbys.common.init();
})