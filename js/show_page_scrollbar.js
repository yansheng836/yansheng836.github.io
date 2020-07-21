// 当页面滚动超过一屏时，在顶部显示页面滚动条
window.onscroll=function(){
	// clientWidth * 进度% = 宽度
	var clientWidth = document.body.clientWidth;
	var scrollWidth = document.body.scrollWidth;
	var clientHeight = document.body.clientHeight;
	var scrollHeight = document.body.scrollHeight;
	var scrollTop = document.body.scrollTop;

	// 先算出高度比例，然后显示在顶部的宽度上
	var rate = scrollTop/(scrollHeight-clientHeight);
	var scroll_width = scrollWidth * rate;

	var scrollbar = document.getElementById("scrollbar-top");
	/*
	scrollbar.style.width =  scroll_width+'px';
	console.log("clientWidth:"+clientWidth);
	console.log("scrollWidth:"+scrollWidth);
	console.log("clientHeight:"+clientHeight);
	console.log("scrollHeight:"+scrollHeight);
	console.log("scrollTop:"+scrollTop);

	console.log("scroll_width:"+scroll_width+"\n");
	*/
}
