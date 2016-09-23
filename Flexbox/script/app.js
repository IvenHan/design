// 初始化导航状态 默认为收起为1,展开为-1
var navStatus = 1;

$(document).ready(function() {
    para();
});

function para() {
    var navTitleBar = $('.navTitleBar');
    var navTitleBtn =  $('.navTitleBtn');
    navTitleBtn.click(function () {
        console.log('fff');

    });
        // 判断导导航状态(如果收起){
        //     设置导航渐变背景渐变黑色 200ms
        //     设置导航文字渐变白色 200ms
        //     下滑显示菜单 200ms
        //     按钮变成 X 瞬间
        //     状态标示为展开
        // }否则{
        //     设置导航渐变背景渐变白色 200ms
        //     设置导航文字渐变黑色 200ms
        //     上滑收起菜单 200ms
        //     按钮变成 三 瞬间
        //     状态标示为收起
}

