function generateNumber() 
{
	var userEntered =parseFloat(document.getElementById("numberInput").value);
	for (z = 0; z <= userEntered; z++) 
	{
    document.getElementById("output").innerHTML += z + "</br>";
    console.log(z);
    }
	
}