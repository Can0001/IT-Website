const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const actionBtn = document.querySelector('.action_btn');
const searchBox = document.querySelector('.search_box');
const searchInput = document.querySelector('.search_box input');
const closeSearchBtn = document.querySelector('.close_search');
const dropdownActionBtn = document.querySelector('.dropdown_menu .action_btn');  


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars'; 
}


actionBtn.onclick = function(event) {
    event.preventDefault();  
    searchBox.classList.add('active'); 
    searchInput.focus();  
}


closeSearchBtn.onclick = function() {
    searchBox.classList.remove('active'); 
}


if (dropdownActionBtn) {
    dropdownActionBtn.onclick = function(event) {
        event.preventDefault();  
        searchBox.classList.add('active'); 
        searchInput.focus();  
    }
}
