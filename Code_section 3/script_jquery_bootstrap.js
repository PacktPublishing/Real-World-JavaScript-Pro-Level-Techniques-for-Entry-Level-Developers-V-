$(document).ready(function() {
	//add a click action to the submit button
	$("#validate_and_submit_button").click(function() {
		//run through each field and validate it.  Collecting errors to display
		var hasErrors = false;
		
		//There are many ways to validate forms, such as putting the validation
		//pattern directly in the field and iterating through those, but this example
		//will take a simpler approach by addressing each field individually
		
		//Lets confirm that each required field has been entered
		$("*[required]").each(function() {
			if ($(this).val() == "") {
				hasErrors = true;
				$(this).addClass("is-invalid");
			}
		});
		
		//validate the email address
		if (!isValidEmailAddress($("#email").val())) {
			hasErrors = true;
			$("#email").addClass("is-invalid");
		}
		
		//validate the credit card number - in this case, ensure that only numbers were entered
		if (!/[^0-9- ]+/.test($("#cc-number").val())) {
			hasErrors = true;
			$("#cc-number").addClass("is-invalid");
		}
		
		if (hasErrors) return false;
		return true;
	});
	
	/*
	$("*[required]").keydown(function() {
		if ($(this).hasClass("is-invalid")) {
			$(this).removeClass("is-invalid");
		}
	});
	*/
});

//this was taken from a wonderful stack-overflow answer https://stackoverflow.com/questions/2855865/validating-email-addresses-using-jquery-and-regex
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}