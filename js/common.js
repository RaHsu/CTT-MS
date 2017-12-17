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



// 查询某项菜单项权限
function check_single_auth(auth) {

    jQuery.ajax({
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
        type : 'POST',dataType:'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            if(result.state === 'error'||result.state === 'warning'){
                that.$Message.error(result.message);
            }
            else{
                console.log("成功请求到地区数据");
                that.area_data = result;
            }

        },
        error:function () {
            that.$Message.warning('连接服务器失败，请检查你的网络连接');
        }
    });
}

// 获取材料大类并将数据填充到选择器中(选择器中的数据统一叫category_data)
function get_category() {
    var that = this;
    jQuery.ajax({
        url : server+url.get_category,
        data: send_with_cookie_data(),
        type : 'POST',dataType:'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            if(result.state === 'error'){
                that.$Message.error(result.message);
                setTimeout("jump('login.html')",1500);
            }else if(result.state === 'warning'){
                that.$Message.error(result.message);
            }
            else{
                console.log("成功请求到材料大类数据");
                that.category_data = result;
            }

        },
        error:function () {
            that.$Message.warning('连接服务器失败，请检查你的网络连接');
        }
    });
}

// 获取生产厂家并将数据填充到选择器中(选择器中的数据统一叫manufacturer_data)
function get_manufacturer() {
    var that = this;
    jQuery.ajax({
        url : server+url.get_manufacturer,
        data: send_with_cookie_data(),
        type : 'POST',dataType:'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            if(result.state === 'error'||result.state === 'warning'){
                that.$Message.error(result.message);
            }
            else{
                console.log("成功请求到厂家数据");
                that.manufacturer_data = result;
            }

        },
        error:function () {
            that.$Message.warning('连接服务器失败，请检查你的网络连接');
        }
    });
}

// 获取管理员所属的仓库并将数据填充到选择器中(选择器中的数据统一叫storehouse_data)
function get_user_storehouse() {
    var that = this;
    jQuery.ajax({
        url : server+url.get_user_store_house,
        data: send_with_cookie_data(),
        type : 'POST',dataType:'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            if(result.state === 'error'||result.state === 'warning'){
                that.$Message.error(result.message);
            }
            else{
                console.log("成功请求到仓库数据");
                that.storehouse_data = result;
                that.search_storehouse = result[0].label;
            }

        },
        error:function () {
            that.$Message.warning('连接服务器失败，请检查你的网络连接');
        }
    });
}





// 延时跳转函数
function jump(href) {
    window.parent.location.href = href;
}

// ifreme的转跳函数
function inner_jump(href) {
    window.location.href = href;
}
// 格式化日期时间的函数
function formatDateTime(date) {
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if(month>=1 && month<=9){
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + '-' + month + '-' + strDate
        + " " + date.getHours() + ':' + date.getMinutes()
        + ':' + date.getSeconds();

    return currentDate;
}
// 格式化日期函数
function formatDate(date) {
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if(month>=1 && month<=9){
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + '-' + month + '-' + strDate;

    return currentDate;
}

// 将日期减一并格式化日期
function formatDate_sub(date){
    if(date === ''){
        return date;
    }
    var date_sub = new Date();
    date_sub.setTime(Date.parse(date) - 24*60*60*1000);
    return formatDate(date_sub);
}

//将日期加一并格式化日期
function formatDate_plus(date){
    if(date === ''){
        return date;
    }
    var date_plus = new Date();
    date_plus.setTime(Date.parse(date) + 24*60*60*1000);
    return formatDate(date_plus);
}

// 将字符串转化为date对象的函数
function trans_string_to_date(string) {
    string = string.replace(/-/g,"/");
    var trans_date = new Date(string);
    return trans_date;
}

// 比较两个时间是否相差一个小时
function is_between_an_hour(nowDate,date) {
    if(Date.parse(nowDate) - Date.parse(date) < 1000*60*60){
        return true;
    }else{
        return false;
    }
}

// 把要打印的数据提取出来
function extract_print_data(data,header){
    var return_data=[];
    // 将表头插入第一行
    return_data.push(extract_header(header));

    // 提取出所有表头关键字(除去“操作”)
    var keys=[];
    for(var k=0;k<header.length;k++){
        if(header[k].key !== 'action'){
            keys.push(header[k].key);
        }

    }

    for(var i=0;i<data.length;i++){
        var every_data = [];
        for(var j = 0;j<keys.length;j++){
            every_data.push(data[i][keys[j]]);
        }
        return_data.push(every_data);
    }
    return return_data;
}

// 把表头提取出来
function extract_header(header){
    var return_data = [];
    for(var i=0;i<header.length;i++){
        if(header[i].key !== 'action'){
            return_data.push(header[i].title);
        }

    }
    return return_data;
}