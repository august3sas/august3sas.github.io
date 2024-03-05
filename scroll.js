window.onscroll = function() {scrollFunction()} 
var header = document.getElementById("scrollHeader");
var sticky = header.offsetTop;
function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onload = function() {
    const header = document.getElementById("scrollHeader");
    const headerHeight = header.offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
};