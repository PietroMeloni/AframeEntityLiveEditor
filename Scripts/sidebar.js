/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "28%";
    document.getElementById("main").style.marginLeft = "28%";
    document.getElementById("mySidenav").style.minWidth = "250px";
    //document.getElementById("menu").style.marginLeft = "28%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidenav").style.minWidth = "0";
   // document.getElementById("menu").style.marginLeft = "0";
}