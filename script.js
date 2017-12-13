function hoverbutton(){
document.getElementById("bttn").style.backgroundColor= "#080";
}

function hover(){
document.getElementById("bttn").style.backgroundColor= "#00bc8a";
}

function showsub(){
    document.getElementById("click").style.visibility = "visible";
    
}

function hide(){
    document.getElementById("click").style.visibility = "hidden";
    
}

var n=0;
function Hoverd(){
    n = n+1;
    document.getElementById("imghover").innerHTML = n;
    
    
}
function ClickSocail(){
    document.getElementById("clk").style.color = "#f50";
}



function login(){
	var name = prompt("Enter Name:");
	if (name == "draz"){
	     window.location = "htmlfile.html"
       }
	else{
		alert("wrong name");
	}
	
	
	

}