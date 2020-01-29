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
				eventcounter = -1;
				next = 0;
				$("#eventcounter").hide();
			};
			ci = ci + 1;
		}
	}

	//TO SHOW ONE COL-X AT A TIME ON BUTTON CLICK

	//COLUMN SHOW SOLO
	//NEXT BUTTON SHOWS NEXT COLUMN
	var next = 0;
	var soloTD = customIndex;
	$(".nextBtn").click(function () {
		next = next + 1;
		var col2show = ".col-" + next;

		if (next < soloTD) {
			$("td").not("td:first-child").hide();
			$(col2show).show();

		} else if (next == soloTD) {
			$("td").show();
			TableRebuild();
		}
	});

	//PREV BUTTON SHOWS PREVIOUS COLUMN
	$(".prevBtn").click(function () {
		if (next > 1) {
			var prevCol2show = ".col-" + --next;
			$("td").not("td:first-child").hide();
			$(prevCol2show).show();
		}
		if (next == 1) {
			$("td").show();
			TableRebuild();
		}
	});

	//COLUMN SHOW NOT-SOLO (PRESERVING THE PRIVIOUSLY SHOWN COLUMN)
	//NEXT BUTTON SHOWS NEXT COLUMN
	var next = 0;
	var soloTD = customIndex;
	$(".nextBtn2").click(function () {
		next = next + 1;
		var col2show = ".col-" + next;

		if (next == 1) {
			$("td").not("td:first-child").hide();
			$(col2show).show();
		}
		if (next < soloTD) {
			$(col2show).show();
			$("td").removeClass("colhighlight");
			$(col2show).not("td:first-child").addClass("colhighlight");

		} else if (next == soloTD) {
			$("td").show();
			TableRebuild();
		}
	});

	//PREV BUTTON SHOWS PREVIOUS COLUMN
	$(".prevBtn2").click(function () {
		if (next > 1) {
			var prevCol2show = ".col-" + --next;
			$("td").not("td:first-child").hide();
			$(prevCol2show).show();
			//TO HIGHLIGHT THE COLUMN
			$("td").removeClass("colhighlight");
			$(prevCol2show).not("td:first-child").addClass("colhighlight");
		}
		if (next == 1) {
			$("td").show();
			TableRebuild();
		}
	});


	//TO ADD CUSTOM CLASSES TO THE <TD>
	$(".refreshBtn").click(function () {
		TableRebuild();
		$("td").removeClass("colhighlight");
	});

});

//COUNTER ON BUTTON CLICK
var eventcounter = -1;

function nextCounter() {
	eventcounter = eventcounter + 1;
	//	$("#eventcounter1").hide();

	if (eventcounter < 1) {
		$("#eventcounter").hide();
	} else {
		document.getElementById("eventcounter").innerHTML = eventcounter;
		$("#eventcounter").show();
	}

};

function prevCounter() {
	eventcounter = eventcounter - 1;
	//	$("#eventcounter1").hide();
	if (eventcounter < 1) {
		eventcounter = 0;
	} else {
		document.getElementById("eventcounter").innerHTML = eventcounter;
		$("#eventcounter").show();
	}
};


//TO SWAP THE COLUMN NAVIGATION BUTTONS
function colSolo() {
	$(".one-eventpertime-nav-top1").hide();
	$(".one-eventpertime-nav-top2").show();
	TableRebuild();
}

function colPreviousPreserve() {
	$(".one-eventpertime-nav-top1").show();
	$(".one-eventpertime-nav-top2").hide();
	TableRebuild();
}
