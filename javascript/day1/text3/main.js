/**
 * Created by haniven on 8/26/16.
 */
function showPic(element) {
    var souce = element.getAttribute('href');
    var placeholder = document.getElementsByClassName('placeholder')[0];
    placeholder.setAttribute('src',souce);
}