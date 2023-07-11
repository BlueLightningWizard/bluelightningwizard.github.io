/*
Slideshow (Auto + Nav) (Start)
*/

let n = 1;

const timer = setInterval(auto, 5000);

var prev_button = document.getElementById("prev");
var next_button = document.getElementById("next");

let pikachu_text = "Interact with your own Pikachu in this virtual pet game!";

let raboot_text = "Help Raboot destroy BadBots in this endless runner game!";

let blog_text = "To read my creator blogs, head to the 'Blog' page!";

let about_text = "To learn more about me, head to the 'About' page!";

let slide_text = document.getElementById("slideshow_content");
let slide_anchor = document.getElementById("slideshow_anchor");
let slide_image = document.getElementById("home_random_select");

slide_anchor.href = "Games.html";
slide_image.src = "My_Pikachu.png";

function auto()
{
    if (n == 1)
    {
        slide_text.style.color =  "#dadad8";
        slide_text.style.textDecorationColor = "#ff641c";
        
        slide_text.innerHTML = raboot_text;
        slide_anchor.href = "Games.html";
        slide_image.src = "Raboot_Dash.png";
    }
    
    else if (n == 2)
    {
        slide_text.style.color =  "#00c4f5";
        slide_text.style.textDecorationColor = "#000000";
        
        slide_text.innerHTML = blog_text;
        slide_anchor.href = "Blog.html";
        slide_image.src = "Blog_Icon.png";
    }
    
    else if (n == 3)
    {
        slide_text.style.color =  "#ff6363";
        slide_text.style.textDecorationColor = "#ef63ff";
        
        slide_text.innerHTML = about_text;
        slide_anchor.href = "About.html";
        slide_image.src = "About_Icon.png";
    }
    
    else if (n == 4)
    {
        slide_text.style.color =  "#fffb33";
        slide_text.style.textDecorationColor = "#a40000";
        
        slide_text.innerHTML = pikachu_text;
        slide_anchor.href = "Games.html";
        slide_image.src = "My_Pikachu.png";
    }
    
    n += 1;
    
    if (n == 5)
    {
        n = 1;
    }

}
   
prev_button.addEventListener("click", () =>
{ 
    n -= 1;
    
    if (n == 0)
    {
        n = 4;
        
        slide_text.style.color =  "#ff6363";
        slide_text.style.textDecorationColor = "#ef63ff";
        
        slide_text.innerHTML = about_text;
        slide_anchor.href = "About.html";
        slide_image.src = "About_Icon.png";
    }
    
    else if (n == 1)
    {
        slide_text.style.color =  "#fffb33";
        slide_text.style.textDecorationColor = "#a40000";
        
        slide_text.innerHTML = pikachu_text;
        slide_anchor.href = "Games.html";
        slide_image.src = "My_Pikachu.png";
    }
    
    else if (n == 2)
    {
        slide_text.style.color =  "#dadad8";
        slide_text.style.textDecorationColor = "#ff641c";
        
        slide_text.innerHTML = raboot_text;
        slide_anchor.href = "Games.html";
        slide_image.src = "Raboot_Dash.png";
    }
    
    else if (n == 3)
    {
        slide_text.style.color =  "#00c4f5";
        slide_text.style.textDecorationColor = "#000000";
        
        slide_text.innerHTML = blog_text;
        slide_anchor.href = "Blog.html";
        slide_image.src = "Blog_Icon.png";
    }

}
);

next_button.addEventListener("click", () =>
{
    n += 1;
    
    if (n == 5)
    {
        n = 1;
        
        slide_text.style.color =  "#fffb33";
        slide_text.style.textDecorationColor = "#a40000";
        
        slide_text.innerHTML = pikachu_text;
        slide_anchor.href = "Games.html";
        slide_image.src = "My_Pikachu.png";
    }
    
    else if (n == 2)
    {
        slide_text.style.color =  "#dadad8";
        slide_text.style.textDecorationColor = "#ff641c";
        
        slide_text.innerHTML = raboot_text;
        slide_anchor.href = "Games.html";
        slide_image.src = "Raboot_Dash.png";
    }
    
    else if (n == 3)
    {
        slide_text.style.color =  "#00c4f5";
        slide_text.style.textDecorationColor = "#000000";
        
        slide_text.innerHTML = blog_text;
        slide_anchor.href = "Blog.html";
        slide_image.src = "Blog_Icon.png";
    }
    
    else if (n == 4)
    {
        slide_text.style.color =  "#ff6363";
        slide_text.style.textDecorationColor = "#ef63ff";
        
        slide_text.innerHTML = about_text;
        slide_anchor.href = "About.html";
        slide_image.src = "About_Icon.png";
    }

}
);

/*
Slideshow (Auto + Nav) (End)
*/