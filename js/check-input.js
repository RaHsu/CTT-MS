/**
 * Created by rahsu on 2017/9/21.
 */
//验证方法集

// 验证输入是否为空
function isEmpty(obj) {
    if(obj ==='' || obj === null || obj === []){
        return false;
    }
    else {
        return true;
    }
}

// 验证输入是否为数字
function isNumber(obj){
    var pattern = /^[0-9]*$/;
    if(pattern.test(obj)===false){
        return false;
    }
    else{
        return true;
    }
}

// 输入检查
function checkInput(data){
    var i = 0,j = 0;
    var flag = true;

    //首先遍历每个表单元素
    for(i in data){
        //再判断要使用哪些方法来验证表单元素
        for(j = 0;j<data[i].check.length;j++){

            //判断一个表单数据是否为空
            if(data[i].check[j] === 'empty'){
                if(isEmpty(data[i].value)===false){
                    flag = false;
                    this.$Message.error(data[i].alertText.empty);
                    return false;
                }
            }

            // 判断一个表单数据是否为数字
            if(data[i].check[j] === 'number'){
                if(isNumber(data[i].value)===false){
                    flag = false;
                    this.$Message.error(data[i].alertText.number);
                    return false;
                }
            }

            // 待添加的函数
        }


    }
    if(flag === true){
        return true;
    }
}