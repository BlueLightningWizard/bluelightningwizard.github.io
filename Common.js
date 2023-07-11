/*
Web-Page-View-Count (Start)
*/

let view_count = localStorage.getItem("page_view");
let web_view_count = document.getElementById("web-view-count");

if (view_count)
{
    view_count = Number(view_count) + 1;
    localStorage.setItem("page_view", view_count);
}

else
{
    view_count = 1;
    localStorage.setItem("page_view", 1);
}

web_view_count.innerHTML = view_count;

/*
Web-Page-View-Count (End)
*/