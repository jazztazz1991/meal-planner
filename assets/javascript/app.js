  

// Daniel's page navigation along with menu collapse
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    $("#dashboard-wrapper").css("width", "250px");
    $("#content-wrapper").css("paddingLeft", "250px");
    $(".nav-closed").css("display", "none");
    $(".nav-open").css("display", "initial");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $("#dashboard-wrapper").css("width", "0px");
    $("#content-wrapper").css("paddingLeft", "0px");
    $(".nav-closed").css("display", "initial");
    $(".nav-open").css("display", "none");
}

$(".homeLink").on("click", function () {
  $(".homeLink").addClass("active-page");
  $(".mealLink").removeClass("active-page");
  $(".recipeLink").removeClass("active-page");
  $(".groceryLink").removeClass("active-page");
  $("#page-content").attr("src", "mainDashboard.html");
});

$(".mealLink").on("click", function () {
  $(".homeLink").removeClass("active-page");
  $(".mealLink").addClass("active-page");
  $(".recipeLink").removeClass("active-page");
  $(".groceryLink").removeClass("active-page");
  $("#page-content").attr("src", "MealPlanner.html");
});

$(".recipeLink").on("click", function () {
  $(".homeLink").removeClass("active-page");
  $(".mealLink").removeClass("active-page");
  $(".recipeLink").addClass("active-page");
  $(".groceryLink").removeClass("active-page");
  $("#page-content").attr("src", "recipes.html");
});

$(".groceryLink").on("click", function () {
  $(".homeLink").removeClass("active-page");
  $(".mealLink").removeClass("active-page");
  $(".recipeLink").removeClass("active-page");
  $(".groceryLink").addClass("active-page");
  $("#page-content").attr("src", "pantry.html");
});
// END Daniel's code


  var foodKey = "f9e3dbd1";
  var foodAppKey = "8d725288375b632e8ca8b8f5e89d9394";
  var foodSearch = "";
  var suggestedFood = ["pizza", "chicken marsala", "shrimp"];
  var recipeUrl = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=" + foodKey + "&app_key=" + foodAppKey + "&to=10";


  $("#foodBtn").on("click", function() {
  	foodSearch = $("#foodInput").val().trim();
  	recipeUrl = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=" + foodKey + "&app_key=" + foodAppKey;
  	$.ajax({
  	url: recipeUrl,
  	method: 'GET'
  	}).done(function(response) {
  	


  	// var foodPic = $("<img>");
   //  foodPic.attr("data-name", topics[i]);
   //  foodPic.attr("class", "foodImg");
   //  foodPic.attr("src", frozenImgUrl);
   //  $("#recipeSection").append(foodPic);
  	// console.log(foodSearch);
  	// console.log(response);
  	console.log(response);

  	for (var i = 0; i < response.hits.length; i++) {
  		console.log(response.hits[i].recipe.label);
  	

  	for (var j = 0; j < response.hits[j].recipe.ingredientLines.length; j++) {
  		console.log(response.hits[i].recipe.ingredientLines[j]);
  	}
  }



  	});
  });