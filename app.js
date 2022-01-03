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

function toggleSubSection(_button, _content){
    console.log(_button.innerText)
    if(_button.classList.contains("app_subsection_show")){
        _content.classList.remove("app_subsection_show")
        _button.classList.remove("app_subsection_show")
    }
    else {
        _content.classList.add("app_subsection_show")
        _button.classList.add("app_subsection_show")
    }
}