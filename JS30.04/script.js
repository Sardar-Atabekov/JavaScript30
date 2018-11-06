
alert('For the eyes as uncomfortable');


var games = [
    { Name: "Warcraft III: Reign of Chaos", company: "Blizzard Entertainment", release: 2003, genre: "strategy"},
    { Name: "Warcraft III: The Frozen Throne", company: "Blizzard Entertainment", release: 2003, genre: "strategy"},
    { Name: "World of Warcraft", company: "Blizzard Entertainment", release: 2004 , genre: "MMORPG"},
    { Name: "World of Warcraft: The Burning Crusade", company: "Blizzard Entertainment", release: 2007, genre: "MMORPG"},
    { Name: "World of Warcraft: Wrath of the Lich King", company: "Blizzard Entertainment", release: 2008, genre: "MMORPG"},
    { Name: "World of Warcraft: Cataclysm", company: "Blizzard Entertainment", release: 2010, genre: "MMORPG"},
    { Name: "World of Warcraft: Mists of Pandaria", company: "Blizzard Entertainment", release: 2012, genre: "MMORPG"},
    { Name: "World of Warcraft: Warlords of Draenor", company: "Blizzard Entertainment", release: 2013, genre: "MMORPG"},
    { Name: "World of Warcraft: Legion", company: "Blizzard Entertainment", release: 2016, genre: "MMORPG"},
    { Name: "World of Warcraft: Battle for Azeroth", company: "Blizzard Entertainment", release: 2018, genre: "MMORPG"},
    { Name: "Civilization V: Complete Edition ", company: "2K Games", release: 2014, genre: "strategy"},
    { Name: "Sid Meier's Civilization VI ", company: "2K Games", release: 2016, genre: "strategy"},
    { Name: "Sid Meier’s Civilization V", company: "2K Games", release: 2010, genre: "strategy"},
    { Name: "Civilization Revolution 2", company: "2K Games", release: 2014, genre: "strategy"},
    { Name: "Assassin’s Creed IV: Black Flag", company: "Ubisoft", release: 2013, genre: "Action-adventure"},
    { Name: "Assassin’s Creed Rogue", company: "Ubisoft", release: 2014, genre: "Action-adventure"},
    { Name: "Assassin’s Creed Unity", company: "Ubisoft", release: 2014, genre: "Action-adventure"},
    { Name: "Assassin’s Creed Syndicate", company: "Ubisoft", release: 2015, genre: "Action-adventure"},
    { Name: "Assassin’s Creed Odyssey", company: "Ubisoft", release: 2018, genre: "Action-adventure"},
];

var lists = document.querySelectorAll(".list");
var buttons = document.querySelectorAll("button");

function addContent(content, container) {
    if(!container.classList.contains("press")) {
        for(var i = 0; i < content.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = `${i + 1}. ${content[i].Name}    Компания  - ${content[i].company}<br>`
            container.appendChild(p);
        }   
        container.classList.add("press");
    }
}

function removeContent(content, container) {
    if(container.classList.contains("press")) {
        container.innerHTML = "";
        container.classList.remove("press");
    }
}

buttons[0].addEventListener("click", function() {
    var content =  games.sort((a, b) => a.Name > b.Name? 1 : -1);
    var container = lists[0];
        
    removeContent(content, container);
    addContent(content, container);
    document.body.style.backgroundImage='url("images/fon1.jpg")';
     document.body.style.transition='.5s';

});



buttons[1].addEventListener("click", function() {
    var content =  games.sort((a, b) => a.company > b.company ? 1 : -1);   
    var container = lists[0];
    
    removeContent(content, container);
    if(!container.classList.contains("press")) {
        for(var i = 0; i < content.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = `${i + 1}. Разработчик ${content[i].company}   - ${content[i].Name}  <br>`
            container.appendChild(p);
        }   
        container.classList.add("press");
     document.body.style.backgroundImage='url("images/ec27e2d5.jpeg")';
      document.body.style.transition='.5s';
    }
});

buttons[2].addEventListener("click", function() {
    var content =  games.sort((a, b) => b.release < a.release ? 1 : -1);// or  a.release < b.release ? 1 : -1
    var container = lists[0];
    
    removeContent(content, container);
    if(!container.classList.contains("press")) {
        for(var i = 0; i < content.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = `${i + 1}. ${content[i].Name} Компания ${content[i].company} - <b>${content[i].release}</b><br>`
            container.appendChild(p);
        }   
        container.classList.add("press");
        document.body.style.backgroundImage='url("images/Odyssey_screen.jpg")';
         document.body.style.transition='.5s';
    }
});

buttons[3].addEventListener("click", function() {
    var content =  games.filter( games => ( games.genre.indexOf("strategy") !== -1 ));
    var container = lists[1];

    removeContent(content, container);
    addContent(content, container);
    document.body.style.backgroundImage='url("images/civ-6-cover.jpg")';
     document.body.style.transition='.5s';
});

buttons[4].addEventListener("click", function() {
    var content =  games.filter( games=> ( games.genre.indexOf("Action-adventure") !== -1 ));
    var container = lists[1];

    removeContent(content, container);
    addContent(content, container);
    document.body.style.backgroundImage='url("images/ubicom-assassins_creed_franchise-animus-search-thumb_mobile_278378.jpg")';
     document.body.style.transition='.5s';
});

buttons[5].addEventListener("click", function() {
    var content =  games.filter( games => ( games.genre.indexOf("MMORPG") !== -1 ));
    var container = lists[1];

    removeContent(content, container);
    addContent(content, container);
    document.body.style.backgroundImage='url("images/p1_2157306_ae6e591f.jpg")'; 
    document.body.style.transition='.5s';
});