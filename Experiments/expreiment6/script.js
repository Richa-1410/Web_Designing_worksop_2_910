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
//show hide paragraph
let isvisible = true;
document.getElementById("toggleBtn").onclick = function() {
    if(isvisible){
        para.style.display = "none";   //hide
        //heading.style.display = "none";
        isvisible = false;
    }
    else{
        para.style.display = "block";  //show
        //heading.style.display = "block"; //show
        isvisible = true;
    }
};
//reset
document.getElementById("resetBtn").onclick = function() {
   location.reload();  //reload the page
};
//mouse events
heading.onmouseover = function() {
    heading.style.color = "red";
};
heading.onmouseout = function() {
    heading.style.color = "black";
}