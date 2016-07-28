# jquery笔记
## 语法
1. 选择元素
使用 ``$("")``来选择元素
2. 在页面加载完毕后执行

```javascript
$(document).ready(function{

});
```
## 效果
###### 显示赢藏

`$("p").hide()` 和 `$("p").show()`用于显示和隐藏
```javascript
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
```
speed 是效果的时间参数，callback 可选，是回调的函数名称。

`$("p").toggle()` 可以切换显示和隐藏
```javascript
$(selector).toggle(speed,callback);
```
###### d 
