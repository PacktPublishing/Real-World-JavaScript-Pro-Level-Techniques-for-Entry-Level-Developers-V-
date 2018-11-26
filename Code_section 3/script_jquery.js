//jQuery has a function wrapper that lets you know the document is loaded
//this is similar to using body onload="somefunction()" as we have previously
$(document).ready(function() {
	//Selectors in jquery are exactly like using CSS
	$(".some_class"); //select the elements with "some_class" class
	$("#some_id"); // select an element with the id "some_id"
	$("a"); //select all <a> elements
	//jQuery also lets you easily iterate through a list using the .each() function
	$(".replace_content").each(function() {
		//When using each, you reference the specific individual item using $(this);
		$(this).html("Hello World"); //same as .innerHTML but to get the value use .html() to set, provide a parameter value
		$(this).css("color","rgba(200,0,0,1)"); //easy set CSS properties using css names
		//you can set MULTIPLE css properties at once:
		$(this).css({"font-size":"16px", "font-weight":"bold"});
		//You can also daisy-chain functions to make code a bit simpler to read:
		$(this).html("Here is my great text").css("color","rgba(0,0,200,1)").css("font-size","24px");		
		
		//You can also access properties as easily as setting them by removing arguments
		$(this).html(); //this will return the innerHTML of the element.
		$(this).css("color"); //will get the color.
	});

	//to set and get attributes you can use .attr() or .data() for data elements
	$("#some_button").attr("some_id"); // gives you "1234"
	$("#some_button").attr("data-price"); // gives you the string '3.99'
	$("#some_button").data("price"); // gives you the number 3.99
	
	//you can also add/remove classes VERY easy in jQuery
	$("#some_button").addClass("new_class_name");
	$("#some_button").removeClass("new_class_name");

	
	//the full jQuery API can be found: https://api.jquery.com/
	
	
	//There are two ways that you can add events.  Using named functions, like click or by using "bind" with the DOM event
	$("#some_button").click(function() {
		alert("I was clicked");
	});
		
	$("#some_button").bind("click",function() {
		alert("I was clicked and set using bind");
	});
	
	//Events can also be removed using .unbind:
	//$("#some_button").unbind("click"); //this will unbind BOTH the above actions.
	
	/* there are pre-defined functions for each of the common event type:
		change, click, mouseover, mouseout, keydown, load, change, etc
		but if one is not working, the bind method will work.
	*/
	$("#show_hide_cat").click(function() {
		if ($("#annoyed_cat").is(":visible")) {
			$("#annoyed_cat").hide();	
		} else {
			$("#annoyed_cat").show();				
		}
		//this can also be written even simpler with .toggle:
		
		//$("#annoyed_cat").toggle();
	});
	
	$("#fade_cat").click(function() {
		if ($("#annoyed_cat").is(":visible")) {
			$("#annoyed_cat").fadeOut();	
		} else {
			$("#annoyed_cat").fadeIn();				
		}
		//this can also be written even simpler with .toggle:
		//$("#annoyed_cat").fadeToggle();
	});

});