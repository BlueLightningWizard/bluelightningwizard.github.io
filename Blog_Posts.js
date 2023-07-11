let blog = document.getElementById("blog_container");

let dropdown_post_content_1 = document.getElementById("post_content");

let dropdown_lang_content_1 = document.getElementById("lang_content");

let post_num_1 = "#P1";

let p1_fn = 
`Terve ja Tervetuloa!

Sininen Velho täällä!
Olen Intiasta, mutta oppian suomeaa. Osaan nyt kirjoitta vähän suomeaa!

Ole hyvää!

=============
Suomi on kaunis mutta melko kylma maa, ja liian kaukana intiasta.

Suomi on vaikea mutta kaunis kieli.

Suomalainen ovat todella rehellinen ja  hiljainen.  He puhuvat suomeaa.

Mutta moni suomalainen osaavat puhuu myös englantia.
=============

Tuo on kaikki!

Kiitos lukeaa!
Hei hei!`;

let p1_en = 
`Hello and welcome!

Blue Wizard here!
I am an Indian, but I'm learning Finnish. I can, now, write some Finnish!

Here you go!

=============
Finland is a beautiful but pretty cold country, and too far from India.

Finnish is a difficult, but beautiful language.

Finns are really honest and quiet. They speak Finnish.

But most Finns can also speak English.
=============

That's all!

Thanks for reading!
Bye Bye!`;

blog.innerHTML = p1_fn;

dropdown_post_content_1.addEventListener("click", (e) =>
{
    if (e.target.id == "#P1")
    {
        blog.innerHTML = p1_fn;
    }

    post_num_1 = e.target.id;
}
);

dropdown_lang_content_1.addEventListener("click", (e) =>
{
    if (e.target.id == "#L1")
    {
        if (post_num_1 == "#P1")
        {
            blog.innerHTML = p1_en;
        }
    }
    
    else if (e.target.id == "#L2")
    {
        if (post_num_1 == "#P1")
        {
            blog.innerHTML = p1_fn;
        }
    }
}
);