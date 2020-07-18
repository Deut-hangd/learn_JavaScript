window.onload = function(){

    /**
     * 键盘属性:
     *   onkeydown
     *         - 按键被按下
     *   onkeyup
     *         - 按键被松开
     *   键盘事件一般都会绑定给一些可以获取焦点的对象或document
     * 
     */

     document.onkeydown = function(){
         console.log("按键被按下");
     }

     document.onkeyup = function(){
         console.log("按键被松开");
     }
}