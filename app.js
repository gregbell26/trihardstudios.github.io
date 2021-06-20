function fadeInImage(_ref){
    _ref.classList.add("app_loaded_img");

}


function changePage(_page){
    let pages = document.getElementsByTagName("body")[0].children;
    for(let i = 0; i < pages.length; i++){
        if(pages[i].classList.contains("page_active")) {
            pages[i].classList.remove("page_active");
            break;
        }
    }
    _page.classList.add("page_active");
}