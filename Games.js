let inst = document.getElementById("inst_id");

let fade = document.getElementById("game-play");

let game_container = document.getElementById("game-select-container");

let pikachu_select = document.getElementById("Pikachu");
let raboot_select = document.getElementById("Raboot");

let pikachu_text = document.getElementById("pikachu_text");
let raboot_text = document.getElementById("raboot_text");

let game = document.createElement('iframe');
game.setAttribute('allowtrasparency', 'true');
game.setAttribute('width', '485');
game.setAttribute('height', '402');
game.setAttribute('scrolling', 'no');
game.setAttribute('allowfullscreen', 'yes');

let game_content = document.createElement('span');
game_content.setAttribute('class', 'game-play-content');

let pikachu_content = 
`Instructions:

In 'My Pikachu', you just need to just groom, feed and play with a Pikachu gifted to you. Here are the instructions -

* Click on the PokePuff button to bring out a PokePuff and then click on the PokePuff to have Pikachu open his mouth and then drag the desert into its mouth.

* Click on the Ball button to bring out a ball, drag the ball to Pikachu to watch him play with the ball.

* Click on the groom to bring out a petting brush and drag it to Pikachu to have Pikachu's head brushed.

* Click on the left and right arrow buttons to switch between places - backyard, living room and the mountain side.

Hope you enjoy the game.

Note: The game can also be played in the mobile.

Credits:
* The theme music - Pokemon-Amie Main Theme.
* Pikachu's happy cry - Pokemon-Amie.
* Idea for the game - My Talking Tom and Pokemon-Amie.
`

let raboot_content = 
`Instructions:

In 'Raboot Dash', you have to control Raboot, Galar's Fire starter Scorbunny's first evolution. Raboot needs your help to destroy BadBots sent by an evil inventor.

* Use left and right keys to switch lanes in order to dodge bots and wood blocks. For mobile users, tap on Raboot to have him switch lanes.

* Use space button to launch an Ember attack on Badbots and wood blocks. For mobile users, use the button with letter E to launch the attack.
Note: This attack can destroy obstacles (Badbots and wooden blocks) in a line. 

* If you get hit by a BadBot or a block, the game immediately ends, so avoid them or blast them off!

* Run as far and fast as you can!

Note: This game is now playable in mobile devices (only in Scratch website, not this website). To switch lanes (for mobile users), tap on Raboot to have him switch lanes. To attack, there is is a new button with letter E, click this button to have Raboot launch the Ember attack.

Credits:

* Sonic Dash 2: Sonic Boom for the idea of an endless runner game and also for music.

*Pokemon - For character (Pokemon) Raboot. (Raboot matches Sonic in case of running and attacking, so this Pokemon was selected)

* Raboot is owned by Pokemon Company and Sonic is owned by SEGA. BadBots are made by me, inspiration from Dr. Eggman's Badniks.
`


pikachu_select.onclick = () =>
{
    for (let i = 0; i < 2; i++)
    {
        inst.removeChild(inst.children[i]);
    }
    
    fade.classList.toggle('game-play-anim');
    
    game.setAttribute('id', 'My_Pikachu');
    game.style.display = "inline-block";
    game.setAttribute('src', 'https://scratch.mit.edu/projects/425701603/embed');
    
    fade.appendChild(game);
    fade.appendChild(game_content);
    game_content.innerText = pikachu_content;

};

raboot_select.onclick = () =>
{
    for (let i = 0; i < 2; i++)
    {
        inst.removeChild(inst.children[i]);
    }
    
    fade.classList.toggle('game-play-anim');
    
    game.setAttribute('id', 'Raboot_Dash');
    game.style.display = "inline-block";
    game.setAttribute('src', 'https://scratch.mit.edu/projects/398632285/embed');
    
    fade.appendChild(game);
    fade.appendChild(game_content);
    game_content.innerText = raboot_content;
    
    game_content.style.backgroundColor = 'deepskyblue';
    game_content.style.color = 'darkblue';
};

