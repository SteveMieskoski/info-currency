$(document).ready(function () {

	console.log();
	if($("#surveyCheck").text() === 'false'){
		$('#survey-button-two').addClass("hide-surveys");
	}

	if($('#surveyCheckOne').text() === 'false'){
		$('#survey-button-one').addClass("hide-surveys");
	}

	$('#showCompletedSurveys').on('click', function(){
		$('#survey-button-two').removeClass("hide-surveys");
		$('#survey-button-one').removeClass("hide-surveys");
	});

	$(".nextPage").on("click", function () {
		if ($("input[value=man]:checked").val() === "man") {
			console.log("man")
		}

		else if ($("input[value=woman]:checked").val() === "woman") {
			console.log("click")
		}

	});

	var surveyData = {age: '25-34', income: '$40-50k', sex: null, household: null, zip: null};


	//Switcher function:
	$(".rb-tab").click(function () {
		//Spot switcher:
		$(this).parent().find(".rb-tab").removeClass("rb-tab-active");
		$(this).addClass("rb-tab-active");
		surveyData[$(this).attr("name")] = $(this).attr("data-value");
		console.log($(this).attr("data-value"), $(this).attr("name"))
	});


	console.log(window.location.origin);
	$('.Demographic').on('click', function (evt) {
		evt.preventDefault();
		var results = $('.demoForm')[0].elements;
		surveyData["sex"] = results["gender"].value;
		surveyData["household"] = results["household"].value;
		surveyData["zip"] = $('#zip-code')[0].valueAsNumber;

		/*console.log(results[prop]);
		console.log(results[prop]);*/

		var id = $('.demoUserId').text();
		$.post(window.location.origin + '/update/' + id, surveyData);
	})

	$(".InterestsButton").on('click', function (event) {
		event.preventDefault();
		var interestSurvey = {};
		var interestData = $(".interestForm  input");
		interestData.each(function () {
			if ($(this).prop("name") === "food") {
				interestSurvey["fashion"] = $(this).prop("checked");
			} else {
				interestSurvey[$(this).prop("name")] = $(this).prop("checked");
			}

			console.log($(this).prop("checked"));
			console.log($(this).prop("name"))
		});
		console.log(interestSurvey);
		var id = $('.demoUserId').text();
		$.post(window.location.origin + '/update/' + id, interestSurvey);
	})
	//$.post("")
// if user age = null, then display demographic survey and hide the interest survey

// else if user movies = null, then display interest survey and hide demographic survey

// else write out Check back in for additional surveys and see if your information has been purchased


});
