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

// 设置iframe窗口高度
function set_height() {
    //document.getElementById('content').style.height = document.body.clientHeight;
    var screen_height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    document.getElementById('content').style.height = screen_height - 126 + "px";
    document.getElementById('sideMenu').style.height = screen_height - 98 + "px";
}

// 查询菜单项权限
function check_auth() {


    $.ajax({
        //url : '/CTT-MS-server/checkauth',
        url : 'http://10.2.130.178/CTT-MS-server/checkauth',
        type : 'POST',
        //dataType:"json",
        success:function (result) {
            spin.spinShow =false;

            console.log(result.state);
            if(result.state === 'error'){
                alert(result.message);
                window.location.href = "login.html";
            }
        },
        error:function () {
            alert('数据请求失败，请检查你的网络连接');
        }
    });




}

// 查询某项菜单项权限
function check_single_auth(auth) {

    $.ajax({
        //url : '/CTT-MS-server/checkauth',
        url : 'http://10.2.130.178/CTT-MS-server/checkauth',
        type : 'POST',
        //dataType:"json",
        success:function (result) {
            spin.spinShow =false;

            console.log(result.state);
            if(result.state === 'error'){
                alert(result.message);
                window.location.href = "login.html";
            }else{
                if(result[auth] === false ){
                    alert("你现在还没有该项权限，请于管理员联系");
                    history.go(-1);
                }
            }
        },
        error:function () {
            alert('数据请求失败，请检查你的网络连接');
        }
    });
}

// 将vue.data中的value提取出来
function extract_value(data) {
    var extracted_data = {};
    for(var key in data){
        extracted_data[key] = data[key].value;
    }
    return extracted_data;
}