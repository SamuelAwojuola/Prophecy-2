//TO CHECK.ALL AND UN.CHECK.ALL
$(document).ready(function () {
	// Check or Uncheck All checkboxes
	$("#checkall").change(function () {
		var checked = $(this).is(':checked');
		if (checked) {
			$(".checkbox").each(function () {
				$(this).prop("checked", true);
			});
		} else {
			$(".checkbox").each(function () {
				$(this).prop("checked", false);
			});
		}
	});

	// Changing state of CheckAll checkbox 
	$(".checkbox").click(function () {

		if ($(".checkbox").length == $(".checkbox:checked").length) {
			$("#checkall").prop("checked", true);
		} else {
			$("#checkall").removeAttr("checked");
		}

	});
});

//TO HIDE/UN-HIDE CHECKED ROWS ON BUTTON CLICK
$(document).ready(function () {
	$('#mybutton').click(function () {
		$('table tr td:first-child :checkbox:not(:checked)').closest('tr').toggle('slow');
		//            $(this).text($(this).text() == 'Show All Rows' ? 'Show Only Selected Rows' : 'Show All Rows');
	});
});


//TO SHOW/HIDE ALL TABLE-ROWS BASED ON BUTTON CLICKED
$(function () {


	//TO CHECK BOXES BY CLICKING ON PARENT/CONTAINER <TD> or <LI>
	$("td").click(function (e) {
		var cb = $(this).find(":checkbox")[0];
		if (e.target != cb) cb.checked = !cb.checked;
		$(this).toggleClass("selected", cb.checked);
	});

	//TO HIDE/SHOW TARGET ON CHECKING/UN-CHECKING CHECKBOX
	$(".tablemenu").click(function () {
		var inputValue = $(this).attr("value");
		if ($(this).is(":checked")) {
			$("." + inputValue).show(25);
		} else {
			$("." + inputValue).hide(25);
		}
	});

	$('#showmain').click(function () {
		$('.tdsubhead').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.show();
			}, i * 25);
		});
		$('#showall').show();
		$('#showmain').hide();
		$('#summary').hide();
		$('#tablemenubutton1').hide();
		$('#tablemenubutton2').show();
		//		$('#guideheadings > h4:first-child').hide();
	});

	$('#showall, #tablemenubutton1').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.show();
			}, i * 25);
		});
		$('#showall').hide();
		$('#showmain').hide();
		$('#summary').show();
		$('#tablemenubutton1').hide();
		$('#tablemenubutton2').show();
		//		$('#guideheadings > h4:first-child ').hide();
		//		$('#guideheadings > h4:last-child').show();

	});

	$('#summary, #tablemenubutton2').click(function () {
		$('tr:not(:first-child)').each(function (i) {
			var elm = $(this);
			console.log(elm);
			setTimeout(function () {
				console.log("removing" + 1);
				elm.hide();
			}, i * 25);
		});
		$('#showall').hide();
		$('#showmain').show();
		$('#summary').hide();
		$('#tablemenubutton1').show();
		$('#tablemenubutton2').hide();
		//		$('#guideheadings > h4:first-child').show();

	});
});


//TABLE MENU CHECKBOXES


//TO CHECK & UNCHECK ALL .TABLEMENU CHECKBOXES ON SHOWALL/MAIN TIMELINE BUTTONS CLICK
$(document).ready(function () {
	// Check or Uncheck All checkboxes
	$("#showmain").click(function () {
		$(".tablemenu").prop('checked', true);

	});

	$("#showall, #tablemenubutton1").click(function () {
		$(".tablemenu").prop('checked', true);

	});

	$("#summary, #tablemenubutton2").click(function () {
		$(".tablemenu").prop('checked', false);
	});
});



//FOR THE SUB-TIMELINES
$(function () {
	$(".tdsubhead").dblclick(function () {
		var valueInput = $(this).attr("value");
		//		if ($(this).is(":checked")) {
		//			$("." + valueInput).show(50);
		//		} else {
		$("." + valueInput).not(':first').toggle(50);
		//		}
	});
});

$(document).ready(function () {
	$("#tablemenu, #tablemenuX").click(function () {
		$("#tablemenuDIV").toggle(200);
	});
});



//FOR BOTTOM DETAILS SECTION   
//$(document).ready(function () {
//	$(".Israel").click(function () {
//		$("#details").toggle(200);
//	});
//});



//$(function () {
//	$(".tdsubhead").click(function () {
//		var valueInput = $(this).attr("value");
//		$(".details" + valueInput).toggle(200);
//	});
//});


$(function () {
	$(".tdsubhead").click(function () {
		var valueInput = $(this).attr("value");
		var exempt = $(".details" + valueInput);
		$("#details>div").not(exempt).hide();
		$(exempt).toggle(200);
	});
});









//TO STYLE THE [ and ] OF BIBLE REFERENCES
var $test1 = $('.timelineTable').html();
$test1 = $test1.replace(/\[/gi, '<span class="format"><em>[</em></span>');
$('.timelineTable').html($test1);

var $test2 = $('.timelineTable').html();
$test2 = $test2.replace(/\]/gi, '<span class="format"><em>]</em></span>');
$('.timelineTable').html($test2);



//REFTAGGER FOR SCRIPTURE REFERENCES
//var refTagger = {
//    settings: {
//        bibleVersion: "NKJV",
//        roundCorners: true
//    }
//};
//(function (d, t) {
//    var g = d.createElement(t),
//        s = d.getElementsByTagName(t)[0];
//    g.src = "//api.reftagger.com/v2/RefTagger.js";
//    s.parentNode.insertBefore(g, s);
//}(document, "script"));

//INSTEAD OF REFTAGGER
BGLinks.version = "NKJV";
BGLinks.linkVerses();




//TO LOAD NAV FROM EXTERNAL HTML FILE
$(document).ready(function () {

	$('#titlebar').load("navigation.html");

});

//TO DELAY THE LOADING OF THE TIMELINE TABLE ON PAGE LOAD (I did this becasue the loading seemed jerky) 
$(document).ready(function () {

	$('.timelineTableContainer').delay(50).toggle();

});

//TO STYLE ACTIVE NAVIGATION LINK--not working!
$('li').click(function () {
	$(this).siblings().find('a').removeClass('focus');
	$(this).find('a').addClass('focus');
});

//FOR SHOWING THE TABLE ROWS ONE AFTER ANOTHER
//$("tr").hide();
//$("tr").each(function (index) {
//    $(this).delay(index * 3000).animate({
//        height: 'toggle'
//    }, "fast");
//});




//TO HIGHLIGHT COLUMNS
$(document).ready(function () {
	$('#timelineTable').tableHover({
		//		rowClass: 'hoverrow ',
		//		colClass: 'hover',
		//		cellClass: 'hovercell ',
		//		headRows: true,
		//		footRows: true,
		//		headCols: true,
		//		footCols: true,
		//		clickClass: 'click',
		ignoreCols: [1]
	});
});
