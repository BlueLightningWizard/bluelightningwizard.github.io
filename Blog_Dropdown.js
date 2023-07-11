let dropdown_post_button = document.getElementById("post_button");

let dropdown_post_content = document.getElementById("post_content");

let dropdown_post_content_list = ['[28 June, 2023] My first Finnish blog post!'/*, '[30 June, 2023] My first Finnish poem!'*/];

let dropdown_lang_button = document.getElementById("lang_button");

let dropdown_lang_content = document.getElementById("lang_content");

let dropdown_lang_content_list = ["EN", "FN"];

let post_num = "#P1";

dropdown_post_button.innerHTML = dropdown_post_content_list[0];
dropdown_lang_button.innerHTML = dropdown_lang_content_list[1];

for (let i = 0; i < dropdown_post_content_list.length; i++)
{
    let add = document.createElement('div');
    add.setAttribute("id", "#P"+(i+1));
    dropdown_post_content.appendChild(add);
    add.innerHTML = dropdown_post_content_list[i];
}

for (let i = 0; i < dropdown_lang_content_list.length; i++)
{
    let add = document.createElement('div');
    add.setAttribute("id", "#L"+(i+1));
    dropdown_lang_content.appendChild(add);
    add.innerHTML = dropdown_lang_content_list[i];
}

dropdown_post_content.addEventListener("click", (e) =>
{
    if (e.target.id == "#P1")
    {
        dropdown_lang_button.style.display = "inline-block";
        dropdown_lang_button.innerHTML = dropdown_lang_content_list[1];
        dropdown_post_button.innerHTML = dropdown_post_content_list[0];
        post_num = e.target.id;
    }
}
);

dropdown_lang_content.addEventListener("click", (e) =>
{
    if (e.target.id == "#L1")
    {
        if (post_num == "#P1")
        {
            dropdown_lang_button.innerHTML = dropdown_lang_content_list[0];
        }
    }
    
    else if (e.target.id == "#L2")
    {
        if (post_num == "#P1")
        {
            dropdown_lang_button.innerHTML = dropdown_lang_content_list[1];
        }
    }
}
);