
    var oUl = document.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var placeHoldetr = document.getElementsByClassName('placehoder')[0];
    var placeHolder2 = document.querySelector(".placehoder");
    console.log(placeHolder2);

    for(var i = 0; i < aLi.length;i++){
        var oLink = aLi[i].getElementsByTagName('a')[0];
        oLink.addEventListener("click", function(e){
            e.preventDefault();
            var source = this.getAttribute("href");
            setAttSrc(placeHoldetr,source);
        }, false);

    }

    function setAttSrc(el,source){
        el.setAttribute("src",source)
    }
