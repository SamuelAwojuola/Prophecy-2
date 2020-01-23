	$(document).ready(function () {
		//	$("td:last-child").delay(1000).hide(1000);
		//		$("td:last-child").delay(1000).addClass("col-2");

		//		Create a col-NUMBER class from colspan attribute--WORKING!
		//		var colSpan = $("#col-Test").attr("colspan");
		//		var colClass = "col-" + colSpan;
		//		// alert(colClass);
		//		$("#col-Test").delay(1000).addClass(colClass);

		//		var tCell = $("td");
		// var colSpan = $("td").attr("colspan");
		// var colClass = "col-" + colSpan;
		// $(tCell).delay(1000).addClass(colClass);

		var colT = document.getElementById("#col-Test");

		if (colT.hasAttribute("colspan")) {
			//			var colSpan = $("#col-Test").attr("colspan");
			alert("Hello!");
		}
		//		//		alert("NO");

		//		var x = $("#col-Test").hasAttribute("colspan")
		//		if (x == true) {
		//			var colSpan = $(this).attr("colspan");
		//			alert(x);
		//		} else {
		alert("NO");
		//		}
	});


	//To test wether an <td> has the colspan attribute or not. 


	$(document).ready(function () {
		var colT = document.getElementById("col-Test");
		if (colT.hasAttribute("colspan")) {
			alert("Hello!");
		}
	});

	//OR

	$(document).ready(function () {
		//you must add [0] to the $("#col-Test") making it $("#col-Test")[0] or it will not work
		if ($("#col-Test")[0].hasAttribute("colspan")) {
			alert("Hello!");
		}
	});



	//-------------------------------------------------------------------------

	$(document).ready(function () {
		var ArrayOfAllTds = document.getElementsByTagName("td");
		for (var i = 0; i < ArrayOfAllTds.length; i++) {
			var tdsIndexInItsRow = ArrayOfAllTds[i].cellIndex;
			var x = i;
			var y = tdsIndexInItsRow + 1;
			var TD = $("td")[x];
			if (TD.hasAttribute("colspan")) {
				var colSpan = $(TD).attr("colspan");
				var colClass = "col-" + colSpan;
			} else {
				var colSpan = y;
				var colClass = "col-" + colSpan;
			}
			$(TD).addClass(colClass);
			$(TD).append(" col-<strong>" + colSpan + "</strong>.");
		}
	});









	//-----------------------------------------
	var xI = 1;

	var col2show = ".col-" + xI;
	$("td").show();
	$("td").not(col2show).hide();

	var xI = xI + 1;
	//			alert(col2show);
	});


	//----------------------------------------------------------------------------------------------------------

	$(document).ready(function () {
		$(".toggle").each(function () {
			var rs = $(this);
			rs.data("originalRowSpan", rs.attr("rowspan"));
		});
		$(".toggle").attr("rowspan", "1");
		$("th.toggle").click(function () {
			$(this).parent().nextUntil("tr.master").toggleClass("toggled");
			var crs = $(this).attr("rowspan");
			$(this).attr("rowspan", (crs == 1) ? $(this).data("originalRowSpan") : "1");
		});
	});
