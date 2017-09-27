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


// 查询某单个权限是否存在
function check_auth() {
    var send_cookie= get_cookie();
    var send_username = send_cookie.username;
    $.ajax({
        url : 'http://10.2.130.178/CTT-MS-server/checkauth',
        type : 'POST',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            console.log(result);
            var getData = JSON.parse(result);
            console.log("j:"+getData);
        }
    });




}