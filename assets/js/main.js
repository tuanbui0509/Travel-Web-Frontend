window.onscroll = function(){
    headerScroll();
}

var header_nav = document.getElementById('header-nav')
var sticky = header_nav.offsetTop;
console.log(sticky)

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerScroll(){
    if (window.pageYOffset > sticky) {
        header_nav.classList.add('sticky')
    }
    else {
        header_nav.classList.remove('sticky')
    }
}

