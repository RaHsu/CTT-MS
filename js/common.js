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
// 设置cookie
function set_cookie(cookie,value) {
    document.cookie = cookie+'='+value;
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


    jQuery.ajax({
        url : server+url.check_auth,
        type : 'POST',
        dataType:"json",
        async:false,
        data:send_with_cookie_data(),
        success:function (result) {
            console.log(result);
            if(result.state === 'error'){
                alert(result.message);
                window.location.href = "login.html";
            }else if(result.state === "success"){
                menu_auth = trans_auth_to_display(result);
            }
        },
        error:function () {
            console.log('检查权限请求失败');
            alert('数据请求失败，请检查你的网络连接');

            window.location.href = "login.html";
        }
    });




}

// 查询某项菜单项权限
function check_single_auth(auth) {

    $.ajax({
        url : server+url.check_auth,
        type : 'POST',
        dataType:"json",
        async:false,
        success:function (result) {
            trans_auth_to_display(result);
            console.log(result.state);
            if(result.state === 'error'){
                alert(result.message);
                window.location.href = "login.html";
            }else{
                if(result[auth] === false ){
                    alert("你现在还没有该项权限，请与管理员联系");
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

// 在ajax的data中添加cookie
function send_with_cookie_data(key,data) {
    if(key){
        return "cookie="+get_cookie().username+"&"+key+'='+JSON.stringify(data);
    }else{
        return "cookie="+get_cookie().username;
    }

}

// 设置cookie
function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

// 将权限的0，1表示转为真值表示
function trans_auth_to_display(obj){
    for(var auths in obj){
        if(obj[auths] === 1||obj[auths] === '1'){
            obj[auths] = true;
        }
        if(obj[auths] === 0||obj[auths] === '0'){
            obj[auths] = false;
        }
    }
    return obj;
}

// 将权限的真值表示表示转为0,1
function trans_auth_to_submit(obj){
    for(var auths in obj){
        if(obj[auths] === true){
            obj[auths] = 1;
        }
        if(obj[auths] === false){
            obj[auths] = 0;
        }
    }
}

// 获取地区并将数据填充到选择器中(级联选择器中的数据统一叫area_data)
function get_area() {
    var that = this;
    jQuery.ajax({
        url : server+url.get_area,
        data: send_with_cookie_data(),
        type : 'POST',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            if(result.state === 'error'||result.state === 'warning'){
                table.$Message.error(result.message);
            }
            else{
                console.log("成功请求到地区数据");
                that.area_data = result;
            }

        },
        error:function () {
            table.$Message.warning('连接服务器失败，请检查你的网络连接');
        }
    });
}

// 获取材料大类并将数据填充到选择器中(选择器中的数据统一叫category_data)
function get_category() {
    var that = this;
    jQuery.ajax({
        url : server+url.get_category,
        data: send_with_cookie_data(),
        type : 'POST',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            if(result.state === 'error'||result.state === 'warning'){
                table.$Message.error(result.message);
            }
            else{
                console.log("成功请求到材料大类数据");
                that.category_data = result;
            }

        },
        error:function () {
            table.$Message.warning('连接服务器失败，请检查你的网络连接');
        }
    });
}

// 延时跳转函数
function jump(href) {
    window.location.href = href;
}