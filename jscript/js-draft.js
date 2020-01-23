var function1 = function () {

	var r = $.Deferred();

	// Do your whiz bang jQuery stuff here
	$('#showall').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.show(1000);
			}, i * 250);
		});
	});

	return r;

};

var function2 = function () {

	// Do your whiz bang jQuery stuff here
	$('#showall').hide();
	$('#showmain').show();

};

// Now call the functions one after the other using the done method
function1().done(function2());





var functionOne = function () {

	var r = $.Deferred();

	// Do your whiz bang jQuery stuff here
	$('#showmain').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.hide(1000);
			}, i * 250);
		});
	});

	return r;

};

var functionTwo = function () {

	// Do your whiz bang jQuery stuff here
	$('#showmain').hide();
	$('#showall').show();
};

// Now call the functions one after the other using the done method
functionOne().done(functionTwo());



//TO SHOW/HIDE ALL TABLE-ROWS EXCEPT FOR THE FIRST
$(function () {
	$('#showall').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.show(1000);
			}, i * 250);
		});
		$('tr:not(:first-child)').promise().done(function () {
			$('#showall').hide();
			$('#showmain').show();
		});
	});

	$('#showmain').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.hide(1000);
			}, i * 250);
		});
		$('#showmain').hide();
		$('#showall').show();
	});
});




//TO HIDE/SHOW TARGET ON CHECKING/UN-CHECKING CHECKBOX
//$(function () {
//	$("#yahwehcheck").click(function () {
//		if ($(this).is(":checked")) {
//			$(".yahweh").show();
//			//			$("#AddPassport").hide();
//		} else {
//			$(".yahweh").hide();
//			//			$("#AddPassport").show();
//		}
//	});
//});

//$(document).ready(function () {
//	$('.tablemenu').click(function () {
//		var inputValue = $(this).attr("value");
//		$("." + inputValue).toggle();
//	});
//});
