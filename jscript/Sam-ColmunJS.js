// parseInt()

$(document).ready(function () {

	var ArrayOfAllTds = document.getElementsByTagName("td");
	var customIndex = 0;
	var customIndex = customIndex++;

	//TO ADD CUSTOM CLASSES TO THE <TD>
	for (var i = 0; i < ArrayOfAllTds.length; i++) {
		var tdsIndexInItsRow = ArrayOfAllTds[i].cellIndex;
		var TD = $("td")[i];

		//FOR FIRST <td> IN A ROW
		if (tdsIndexInItsRow == 0) {
			var colSpan = tdsIndexInItsRow + 1;
			var colClass = "col-" + colSpan;
			$(TD).addClass(colClass);
			customIndex = 1;
			//			alert(customIndex);



			//FOR IF THE FIRST <td> IN THE ROW HAS A "colspan" ATTRIBUTE
			if (TD.hasAttribute("colspan")) {
				var colSpan2 = $(TD).attr("colspan");

				for (var cI = 1; cI < colSpan2; cI++) {
					var colSpan = cI + 1;
					var colClass = "col-" + colSpan;
					$(TD).addClass(colClass);
					customIndex = customIndex + 1;
					//TO SAVE THE ORGINAL COLSPAN AS ANOTHER MADE-UP ATTRIBUTE
					$(TD).attr("originalcolspan", colSpan);

				}
			}
		}

		//FOR OTHER <td> IN A ROW
		else {

			var colSpan = customIndex + 1;
			var colClass = "col-" + colSpan;
			$(TD).addClass(colClass);
			customIndex = customIndex + 1;
			//			alert(customIndex);


			//FOR IF THE OTHER <td>s APART FROM THE FIRST IN THE ROW HAS A "colspan" ATTRIBUTE
			if (TD.hasAttribute("colspan")) {
				var colSpan2 = $(TD).attr("colspan");

				//TO SAVE THE ORGINAL COLSPAN AS ANOTHER MADE-UP ATTRIBUTE
				$(TD).attr("originalcolspan", colSpan2);

				for (var cI = 1; cI < colSpan2; cI++) {
					var colSpan = customIndex + 1;
					var colClass = "col-" + colSpan;
					$(TD).addClass(colClass);
					customIndex = customIndex + 1;
				}
			}
		}
	}

	//TO SHOW ONE COL-X AT A TIME ON BUTTON CLICK
	//NEXT BUTTON SHOWS PREVIOUS COLUMN
	var next = 0;
	var soloTD = customIndex + 1;
	$(".nextBtn").click(function () {
		next = next + 1;
		if (next < soloTD) {
			var col2show = ".col-" + next;
			//			$("td").hide();
			$("td").not("td:first-child").hide();
			$(col2show).show();
			$(col2show).attr("colspan", "1");

		} else if (next == soloTD) {
			$("td").show();
			next = 0;

			TableRebuild();
		}
	});

	//PREV BUTTON SHOWS PREVIOUS COLUMN
	$(".prevBtn").click(function () {
		if (next > 1) {
			var prevCol2show = ".col-" + --next;
			//			$("td").hide();
			$("td").not("td:first-child").hide();
			$(prevCol2show).show();
		}
		if (next == 1) {
			$("td").show();
			//			next = 0;
			TableRebuild();
		}
	});


	//TO ADD CUSTOM CLASSES TO THE <TD>
	$(".refreshBtn").click(function () {
		TableRebuild();
	});

	//FUNCTION FOR RESTORING THE ORIGINAL COLSPAN VALUES OF THE <TD>s
	function TableRebuild() {
		var ci = 0
		while (ci < ArrayOfAllTds.length) {
			//			var tdsIndexInItsRow = ArrayOfAllTds[i].cellIndex;
			var TDee = $("td")[ci];
			if (TDee.hasAttribute("originalcolspan")) {
				var OrgColSpan = $(TDee).attr("originalcolspan");
				$(TDee).attr("colspan", OrgColSpan);
				$("td").show();
				next = 0;
				eventcounter = 0;
				$("#eventcounter").hide();
			};
			ci = ci + 1;
		}
	}
});

//COUNTER ON BUTTON CLICK
var eventcounter = -1;

function nextCounter() {
	eventcounter += 1;
	//	$("#eventcounter1").hide();

	if (eventcounter < 1) {
		$("#eventcounter").hide();
	} else {
		document.getElementById("eventcounter").innerHTML = eventcounter;
		$("#eventcounter").show();
	}

};

function prevCounter() {
	eventcounter -= 1;
	//	$("#eventcounter1").hide();
	if (eventcounter < 1) {
		eventcounter = 0;
	} else {
		document.getElementById("eventcounter").innerHTML = eventcounter;
		$("#eventcounter").show();
	}
};
