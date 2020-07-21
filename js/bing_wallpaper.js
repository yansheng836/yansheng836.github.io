/* 必应每日壁纸（只有电脑端），https://codepen.io/yansheng836/pen/GRRGRdm */
// 屏幕分辨率的宽,这里假设大于960为电脑端，小于为手机端
var width = window.screen.width

function bing_wallpaper() {
	if (width >= 960) {
        var body = document.getElementsByTagName("body")[0];
		body.style.background = "linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),url('https://api.uixsj.cn/bing/bing.php') no-repeat 0% 0%/ cover"; 
    } else {
        return;
    }
}
bing_wallpaper();
