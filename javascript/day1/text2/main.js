function showPic(element) {
    var souce = element.getAttribute('href');
    var placehoder = document.getElementsByClassName('placehoder');
    placehoder[0].setAttribute('src',souce);
}