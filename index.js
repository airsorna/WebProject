
//* WELCOME TEXT ANIMATIOM *//

const text = document.querySelector(".Welcome");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

//* Nav Bar *//
const NavBar = [
    {title: "Home", link: "http://127.0.0.1:5500/index.html"},
    {title: "Theory", link: "http://127.0.0.1:5500/theory.html"},
    {title: "Design", link: "http://127.0.0.1:5500/design.html"},
    {title: "Internet-Art", link: "http://127.0.0.1:5500/interArt.html"},
    


];

const navigation = document.getElementsByClassName("navigation");

for (var i = 0; i < navigation.length; i++) {
    let list = document.createElement("ul");

    for (var j = 0; j < NavBar.length; i++) {
        let listItemLink = document.createElement("a");
        listItemLink.innerText = NavBar[j].title;
        listItemLink.setAttribute("href", NavBar[j].link);
        let listItem = document.createElement("li");
        listItem.appendChild(listItemLink);
        list.appendChild(listItem);
    }
    navigation[i].appendChild(list);
}