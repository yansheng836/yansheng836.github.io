/* 每天换一张壁纸（王者荣耀的英雄皮肤图片,367张）*/
// 1.先求出今年1月1日的日期
var nowDate = new Date();
var year = nowDate.getFullYear();
var firstDayStr = year + "-01-01 00:00:00";

// 2.计算间隔天数
var firstDay = new Date(firstDayStr);
var days = (nowDate - firstDay) / 1000 / 60 / 60 / 24;
var daysNum = Math.floor(days);
//console.log("daysNum:" + daysNum);

// 屏幕分辨率的宽,这里假设大于960为电脑端，小于为手机端
var width = window.screen.width

// 选项1：只替换电脑端的壁纸，不替换手机端的
function changePC() {
    // 3.获得对应天数的背景图片地址(读取json文件，取出对于天数的图片地址)
    var jsonUrl = "";
    if (width > 960) {
        jsonUrl = "http://blog12.qiniu.yansheng.xyz/wzry_wallpaper367.json";
    } else {
        return;
    }

    var xhr = new XMLHttpRequest();
    /*设置请求方法与路径*/
    xhr.open("get", jsonUrl, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        var imgUrl = "";
        /*XHR对象获取到返回信息后执行*/
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 将字符串转为json对象
            var json = JSON.parse(xhr.responseText);
            // console.log("json[1]:" + json[1]);
            imgUrl = json[daysNum];
            // console.log("imgUrl:" + imgUrl);
            // 遍历
            /*for (var i in json) {
                console.log(i, json[i]);
                break;
            }*/

            // 4.切换背景
            var body = document.getElementsByTagName("body")[0];
            // console.log("body:" + body);

            // body.style.background='#df8080';
            body.style.background = "linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),url('" +
                imgUrl + "') no-repeat 0% 0%/ cover";
        } else if (xhr.status == 404) {
            console.log("请求json数据时发生错误，状态码为：" + xhr.status);
        }
    }
}

// 选项2：只替换手机端的壁纸，不替换电脑端的
function changeMobile() {

    // 3.获得对应天数的背景图片地址(读取json文件，取出对于天数的图片地址)
    var jsonUrl = "";
    if (width < 960) {
        jsonUrl = "http://blog12.qiniu.yansheng.xyz/wzry_mobile_367.json";
    } else {
        return;
    }

    var xhr = new XMLHttpRequest();
    /*设置请求方法与路径*/
    xhr.open("get", jsonUrl, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        var imgUrl = "";
        /*XHR对象获取到返回信息后执行*/
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            imgUrl = json[daysNum];
            // console.log("imgUrl:" + imgUrl);

            // 4.切换背景
            var body = document.getElementsByTagName("body")[0];
            body.style.background = "linear-gradient(rgba(255,255,255,.7),rgba(255,255,255,.7)),url('" + imgUrl +
                "')  no-repeat fixed top";
        } else if (xhr.status == 404) {
            console.log("请求json数据时发生错误，状态码为：" + xhr.status);
        }
    }
}

// 选项3：手机端和电脑端都替换:方法1和2
