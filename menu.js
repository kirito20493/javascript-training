function onOverlayMenu() {
    document.getElementById("overlay-menu").style.display = "block";
    document.getElementById("overlay-search").style.display = "none";
}

function offOverlayMenu() {
    document.getElementById("overlay-menu").style.display = "none";
}
function onOverlaySearch() {
    document.getElementById("overlay-search").style.display = "block";
    document.getElementById("overlay-menu").style.display = "none";
}

function offOverlaySearch() {
    document.getElementById("overlay-search").style.display = "none";
}
// 

var mainMenu = document.querySelector('.main-menu');

var newsMenu = document.querySelector('.news-subMenu');
var issuesMenu = document.querySelector('.issues-subMenu');
var adminMenu = document.querySelector('.admin-subMenu');
var officesMenu = document.querySelector('.offices-subMenu');
var aboutMenu = document.querySelector('.about-subMenu');
var involvedMenu = document.querySelector('.involved-subMenu');

function mouseoverNews(){
    newsMenu.style.display = 'block';
    issuesMenu.style.display = 'none';
    adminMenu.style.display = 'none';
    officesMenu.style.display = 'none';
    aboutMenu.style.display = 'none';
    involvedMenu.style.display = 'none';
    mainMenu.style.borderRight = '1px solid rgb(218,218,218)';
}
function mouseoverIssues(){
    issuesMenu.style.display = 'block';
    newsMenu.style.display = 'none';
    adminMenu.style.display = 'none';
    officesMenu.style.display = 'none';
    aboutMenu.style.display = 'none';
    involvedMenu.style.display = 'none';
    mainMenu.style.borderRight = '1px solid rgb(218,218,218)';
}
function mouseoverAdmin(){
    issuesMenu.style.display = 'none';
    newsMenu.style.display = 'none';
    adminMenu.style.display = 'block';
    officesMenu.style.display = 'none';
    aboutMenu.style.display = 'none';
    involvedMenu.style.display = 'none';
    mainMenu.style.borderRight = '1px solid rgb(218,218,218)';
}
function mouseoverOffices(){
    officesMenu.style.display = 'block';
    newsMenu.style.display = 'none';
    issuesMenu.style.display = 'none';
    adminMenu.style.display = 'none';
    aboutMenu.style.display = 'none';
    involvedMenu.style.display = 'none';
    mainMenu.style.borderRight = '1px solid rgb(218,218,218)';
}
function mouseoverAbout(){
    issuesMenu.style.display = 'none';
    newsMenu.style.display = 'none';
    adminMenu.style.display = 'none';
    officesMenu.style.display = 'none';
    aboutMenu.style.display = 'block';
    involvedMenu.style.display = 'none';
    mainMenu.style.borderRight = '1px solid rgb(218,218,218)';
}
function mouseoverInvolved(){
    issuesMenu.style.display = 'none';
    newsMenu.style.display = 'none';
    adminMenu.style.display = 'none';
    officesMenu.style.display = 'none';
    aboutMenu.style.display = 'none';
    involvedMenu.style.display = 'block';
    mainMenu.style.borderRight = '1px solid rgb(218,218,218)';
}
function mouseoverContact(){
    issuesMenu.style.display = 'none';
    newsMenu.style.display = 'none';
    adminMenu.style.display = 'none';
    officesMenu.style.display = 'none';
    aboutMenu.style.display = 'none';
    involvedMenu.style.display = 'none';
    mainMenu.style.borderRight = 'none';
}
function mouseoverLive(){
    issuesMenu.style.display = 'none';
    newsMenu.style.display = 'none';
    adminMenu.style.display = 'none';
    officesMenu.style.display = 'none';
    aboutMenu.style.display = 'none';
    involvedMenu.style.display = 'none';
    mainMenu.style.borderRight = 'none';
}