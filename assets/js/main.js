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


// Back to top

let btnToTop = document.getElementById('btnToTop');

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop>20){
        btnToTop.style.display = 'block';
    }
    else{
        btnToTop.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
function toTopFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}