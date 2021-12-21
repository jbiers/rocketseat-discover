/*
    target nodes with css-style selectors
    div.display
    .display
    #container > .display
    div#container > div.display
*/

//    DOM - DOCUMENT OBJECT MODEL

/*
    or target node by its relationship to the current one.
*/

const container = document.querySelector("#container");

console.dir(container.firstChildElement);

const controls = document.querySelector(".controls");

console.dir(controls.prviousElementSibling);