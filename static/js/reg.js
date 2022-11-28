var apiUrl = 'https://p4jgxemgj9.execute-api.us-east-1.amazonaws.com/prod';

$(".formReset").click(function(){
	$("#userEmail").val('');
	$("#preparingData").hide();
	$("#successData").hide();
	$("#loadingScreen").fadeOut();
});

$("#inviteUserBtn").click(function() {		
	if($("#userEmail").val()) {
		var userEmail = $("#userEmail").val();
		if(!(userEmail.length > 5 && userEmail.includes("@") === true && userEmail.includes(".") === true)) { 
			alert("A valid email is required to complete the registration.");
		}
		else {
			$("#successData").hide();
			$("#loadingScreen").fadeIn();
			$("#preparingData").fadeIn();
			var firstName = $("#firstName").val();
			var lastName = $("#lastName").val();
			var companyName = $("#companyName").val();
			var country = $("#country").val();
			 // instantiate a headers object
            var myHeaders = new Headers();
            // add content type header to object
            myHeaders.append("Content-Type", "application/json");
            // using built in JSON utility package turn object to string and store in a variable
            var payload = JSON.stringify({"userEmail":userEmail,"firstName":firstName,"lastName":lastName,"companyName":companyName,"country":country});
            // create a JSON object with parameters for API call and store in a variable
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: payload,
                redirect: 'follow'
            };
            // make API call with parameters and use promises to get response           
			let response = fetch(apiUrl, requestOptions).then(
			function(value){
				$("#successData").fadeIn();
			},
			function(error){
				alert("Request-Error: " + response.text + ". Please try again or contact us at AWS.contact-me@castsoftware.com .");
				$("#loadingScreen").fadeOut();
			});
			$("#preparingData").hide();
		};
	}
});