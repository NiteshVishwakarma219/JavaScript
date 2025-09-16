/*

Event Handling --> Actions or occurrences that happen in the DOM or browser
types of events
1. Mouse Events -- click, dblclick, mousemove, mouseover, mouseout
2. Keyboard Events -- keydown, keypress, keyup
3. Form Events -- submit, change, focus, blur
4. Window Events -- load, resize, scroll

*/

document.querySelector("#title").onclick = function(e) {
    alert("Button clicked!");
    console.log(e);
};


/* ###################################################################################### */

// Event Listeners -- > Best Method we always use this

document.querySelector("#title").addEventListener("click", function(e) {
    alert("Title clicked!");
    console.log(e);
});

 // 1. event bubbling --->The event starts at the element you clicked and moves up to its ancestors or parents.
document.querySelector("#title").addEventListener("click", function(e) {
    alert("Title clicked!");
    console.log(e);
}, false);

    // if don't want to go up the DOM tree or parents
    // we can use stopPropagation()
document.querySelector("#title").addEventListener("click", function(e) {
    alert("Title clicked!");
    console.log(e);
    e.stopPropagation();
});

// 2. event capturing --->The event starts at the top of the page and moves down to the element you clicked.
document.querySelector("#title").addEventListener("click", function(e) {
    alert("Title clicked!");
    console.log(e);
}, true);