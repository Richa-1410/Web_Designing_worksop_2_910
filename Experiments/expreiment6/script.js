// Selecting elements
let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");
//change heading text
document.getElementById("changeTextBtn").onclick = function() {
    heading.innerText = input.value;
};   //inner text fr text replace

input.onchange = function(){
    console.log("Input changed: " ,input.value);
};

document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.fontFamily="Arial";
});
//change font size
document.getElementById("fontBtn").addEventListener("click", function() {
    heading.style.fontSize = "40px";
});
