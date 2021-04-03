
var header_nav = document.getElementById('header-nav')
var sticky = header_nav.offsetTop;
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
    headerScroll();
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

// click search tour and hotel

let btnSearch = document.querySelector('button.search-btn[search="active"]')
let btnHotel = document.querySelector('button.search-btn[search=""]')
let form1 = document.querySelector('form.wp-search-content[form="active"]')
let form2 = document.querySelector('form.wp-search-content[form=""]')

btnSearch.onclick = function changeBoxSearch(){
    // form.classList.add("active");
    btnHotel.classList.remove('btn--active')
    btnSearch.classList.add('btn--active')
    form1.classList.add('active','show')
    form2.classList.remove('active','show')
}

btnHotel.onclick = function changeBoxSearch(){
    btnSearch.classList.remove('btn--active')
    btnHotel.classList.add('btn--active')
    form2.classList.add('active','show')
    form1.classList.remove('active','show')
}

console.log(form1)
console.log(form2)


