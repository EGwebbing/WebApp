// The script is based on the tutorials' code

// the function upload the data of the question to the database; 
// the data is processed by the server (NodeJSserver.js file)
function uploadData() {
	// the alert notify that the data will be uploaded
	alert('Data will be uploaded to the database');
	// the variables take the values from the QuestionForm.html
	var question = document.getElementById("question").value;
	var q1 = document.getElementById("q1").value;
	var q2 = document.getElementById("q2").value;
	var q3 = document.getElementById("q3").value;
	var q4 = document.getElementById("q4").value;
	var correct_answer = document.getElementById("correct_answer").value;
	var lat = document.getElementById("lat").value;
	var lng = document.getElementById("lng").value;
	// the variable stores all the values within a string that will be processed by the server and uploaded on the databse
	var postString = "question="+question+"&q1="+q1+"&q2="+q2+"&q3="+q3+"&q4="+q4+"&correct_answer="+correct_answer+"&lat="+lat+"&lng="+lng;
	console.log(postString);
	processData(postString);
}

var client;
// create the code to get the postString data using an XMLHttpRequest
function processData(postString) {
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30279/uploadData',true); // creating the POST request
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}

// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
	// this function listens out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
		// change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = "Data uploaded correctly";
	}
}


