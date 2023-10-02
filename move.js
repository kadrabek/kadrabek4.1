//global variables that I used within this javaScript

var intervalID = 0;
var change = 50;
//this is my function that will allow the button to move the image across the screen.
function Start()
{
    intervalID = setInterval(function() 
    {
        //this is how I change the status of the cat.
        document.getElementById("cat").innerHTML="Status of the cat: Judging you even harder!! How is that possible??"
        var image = document.getElementById("imgcat");
        var i = 0
        image.style.left = change+ "px";
        change +=2;
    },50);
}
//this is my function to stop the button by resetting the page.
function Stop()
{
    clearInterval(intervalID);
}
//these two functions are to let me toggle the buttons.
function intervalStart()
{
    //alert("start pushed");
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function intervalStop()
{
    //alert("stop pushed");
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}