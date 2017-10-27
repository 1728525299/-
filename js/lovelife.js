/**
 * Created by Administrator on 2017/10/27.
 */
$(function () {
    var index=0;
    $('#loveLife .loveShopping .btm .lp').on('click',function () {
        index++;
        if (index>=2){
            index=1;
        }
        $('#loveLife .loveShopping .btm ul').animate({left:-560*index},1000,'swing');
    });
     $('#loveLife .loveShopping .btm .rp').on('click',function () {
        index--;
        if (index<=0){
            index=0;
        }
        $('#loveLife .loveShopping .btm ul').animate({left:560*index},1000,'swing');
    });
});