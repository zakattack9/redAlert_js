console.log("Sanity Check");

function hello(){
  //alert("YOUR COMPUTER HAS BEEN INFECTED WITH A VIRUS!!!");
  console.log("hello");
  var changeDiv = document.getElementById("divElement");
  changeDiv.innerHTML = "Why'd you click it?";
  console.log(changeDiv);
}

function varVarBinks(){
  var classElements = document.getElementsByClassName("firstPeriod");
  console.log(classElements);
  classElements[0].innerHTML = "shwat";  
}