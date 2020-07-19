
// 定义获取指定样式函数
function getStyle(obj, name){
    if(window.getComputedStyle){
        return getComputedStyle(obj, null)[name];
    }else{
        return obj.currentStyle[name];
    }
};

window.onload = function(){
    var box1 = document.getElementById("box1");
    var result = getStyle(box1, "backgroundColor");
    alert(result);
};

