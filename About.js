let personal = document.getElementById("personal");
let website = document.getElementById("website");

let about = document.getElementById("about_container");

let personal_about = 
`<h2>Q1. What's your (real) name?</h2>
As of now, I refrain from revealing my real name. However, I may reveal it in the future.
Instead, my nickname 'BlueLightningWizard' is currently being used for displaying my work.

<h2>Q2. What are you currently doing?</h2>
I will be pursuing my B.E. in 'Computer Engineering' (third year), with honours in Artificial Intelligence and Machine Learning (first year), in a short while.

<h2>Q3. What are your favourite activities to do?</h2>
My favourite activities include making up stories in my mind (though I am too lazy to type/write XD), listening to music, watching manga videos, and reading blogs of my interest. I am currently learning Finnish, using Duolingo, too.

<h2>Q4. For how long have you been using the nickname 'BlueLightningWizard'?</h2>
This nickname has been in use since 2019, when it was first (and still is) used as the username for my Scratch account.

<a href = https://scratch.mit.edu/users/BlueLightningWizard/ style = 'color: darkblue'> Check it out to access games that haven't been linked to this website! </a>

<h2>Q5. How did you come up with the above mentioned nickname?</h2>
The idea behind this nickname traces back to 2016, when I first received my first tablet. One of the first games installed was an RPG game 'Angry Birds Epic', in which the titular birds equip themselves with classes (magical wear) and weapons to battle the pigs.

One of my favourite classes was Chuck's 'Lightning Bird' (a blue, long wizard hat with a curvy lightning bolt protruding from its tip). In addition, wizardry has long been one of my favourite fantasy themes.

When creating my Scratch account back in late 2019, I hadn't made a proper nickname by then.

Thus, with my interest in wizardry and the magical wear in mind, I ended up forming this nickname:

* Blue - From the color of the 'Lightning Bird' hat, and being favourite color.
* Lightning - From the lightning bolt attached to the same hat.
* Wizard - From the design of the hat and interest in the fictional field.

<h2>Q6. What is your mascot?</h2>
My mascot is an otter penguin (hybrid between an otter and a penguin, in Nickleodeon's 'Avatar' franchise), wearing a blue wizard hat with a lightning bolt symbol, and a blue t-shirt.

<h2>Q7. How did you come up with your mascot?</h2>
Since childhood, penguins have been one of my favourite birds. In 2020, while revisiting 'Avatar: The Last Airbender' online, several years since last watching it on TV, I discovered the otter penguins.

Due to my fondness for penguins and wizardry, in addition to a similar facial feature present in otter penguins, I created this mascot, to represent myself.`
;

let website_about = 
`<h2>Q1. What was your purpose for creating this website?</h2>
This website has been created in preparation for an upcoming subject 'Internet Programming' to be taught in my upcoming semester (Third Year/ Fifth Semester) of B.E. Computer Engineering.

It has, also, been created as a portfolio for my coming final (fourth) year, with plans to present future personal projects in this website.

<h2>Q2. Has the website being developed using a website editor?</h2>
No.

This website has been, proudly, developed from scratch using a simple text editor, due to the following reasons:

* To give myself a headstart for web development by learning HTML, CSS and JavaScript and developing my own website with the knowledge gained, since the subject requires writing code on exam paper, rather than typing on a laptop.
* Since, most code editors (like VS Code) automatically provide suggested code, I decided to use a text editor since, during early days, there were no such exclusive editors but default text editors.

<h2>Q3. Has the website being coded to work on all devices?</h2>
No.

This website has been, currently, designed for laptops and PCs, following the laptop-first approach. Since I am, currently, just a rookie in web development, it will take time to be coded for mobile devices in the future.

<h2>Q4. Are all your projects (games), developed using Scratch, embedded in this website?</h2>
No.

Out of the 7 shared projects in Scratch, only two of them ('Raboot Dash' and 'My Pikachu') currently meet the standards to be embedded in this website.

<a href = https://scratch.mit.edu/users/BlueLightningWizard/ style = 'color: darkblue'>Check my Scratch account to access games that haven't been linked to this website!</a>`
;

personal.style.color = "white";
website.style.color = "lightblue";
about.innerHTML = personal_about;

personal.addEventListener("click", () =>
{
    personal.style.color = "white";
    website.style.color = "lightblue";
    
    about.innerHTML = personal_about;
}
);

website.addEventListener("click", () =>
{
    personal.style.color = "lightblue";
    website.style.color = "white";
    
    about.innerHTML = website_about;
}
);

