// DOM Manipulation --> Document Object Model (DOM) manipulation is a way to interact with and modify the structure, style, and content of a web page using JavaScript.

// Selecting Elements
// 1.Selecting Elements with ID
const title = document.getElementById("title"); // title = id name>
console.log(title);

// 2.Selecting Elements with Class Name
const headings = document.getElementsByClassName("heading"); // heading = class name
console.log(headings);

// 3.Selecting Elements with Tag Name
const paragraphs = document.getElementsByTagName("p"); // p = tag name
console.log(paragraphs);

// 4.Selecting Elements using Query Selector --> best method
const mainTitle = document.querySelector("#title");
                     // or
const mainTitle1 = document.querySelectorAll("#title");
console.log(mainTitle);



/* ######################################################################################## */

// Attributes

const title1 = document.getElementById("title");

// 1. Getting an Attribute Value
const titleAttr = title1.getAttribute("id");
console.log(titleAttr);

// 2. Setting an Attribute Value
title1.setAttribute("class", "new-heading");
console.log(title1);

// Style
title1.style.color = "blue";
title1.style.fontSize = "24px";

/* ######################################################################################## */

// Creating and Inserting Elements

// 1. Creating a New Element
const newHeading = document.createElement("h2");
newHeading.textContent = "This is a new heading";
console.log(newHeading);

// 2. Inserting the New Element into the DOM
const container = document.getElementById("container");
container.appendChild(newHeading);

/* ######################################################################################## */

// Removing Elements

// 1. Removing an Element from the DOM
const headingToRemove = document.getElementById("heading-to-remove");
headingToRemove.remove();

// 2. Removing an Element by Selector
const headingToRemove1 = document.querySelector(".heading-to-remove");
headingToRemove1.remove();

// 3. Removing an Element by Class Name
const headingsToRemove = document.getElementsByClassName("heading-to-remove");
while (headingsToRemove.length > 0) {
    headingsToRemove[0].remove();
}

// 4. Removing an Element by Tag Name
const paragraphsToRemove = document.getElementsByTagName("p");
while (paragraphsToRemove.length > 0) {
    paragraphsToRemove[0].remove();
}

// 5. Removing an Element by ID
const headingToRemove2 = document.getElementById("heading-to-remove");
headingToRemove2.remove();


/* ######################################################################################## */

// innerHTML
const container1 = document.getElementById("container"); // container = <div id="container"></div>

// 1. Getting innerHTML
const containerContent1 = container1.innerHTML;
console.log(containerContent1);

// 2. Setting innerHTML
container1.innerHTML = "<p>This is new content</p>";
console.log(container1.innerHTML);

// inner text

// 1. Getting innerText
const containerText1 = container1.innerText;
console.log(containerText1);

// 2. Setting innerText
container1.innerText = "This is new text content";


// text content
// 1. Getting textContent
const containerTextContent1 = container1.textContent;
console.log(containerTextContent1);

// 2. Setting textContent
container1.textContent = "This is new text content";

/* ######################################################################################## */

