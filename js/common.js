/**
 * Created by RaHsu on 2017/9/26.
 */

// 获取cookie并将其转化为js对象

function get_cookie(){
    var cookie = document.cookie;

    var cookie_obj={};
    var cookie_array = cookie.split(';');


    for(var i = 0;i < cookie_array.length;i++){
        var key = cookie_array[i].split('=')[0];
        var value = cookie_array[i].split('=')[1];

        cookie_obj[key] = value;
    }

    return cookie_obj;
}