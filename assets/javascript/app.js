
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
 var recipeUrl = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=" + foodKey + "&app_key=" + foodAppKey + "&to=9";
var caloriesPer;
var fatPer;
var proteinPer;
var foodLink;
var foodPicture;
var foodName;
var index;

var caloriesPerArray=[];
var fatPerArray = [];
var proteinPerArray = [];
var foodLinkArray=[];
var foodPictureArray=[];
var foodNameArray=[];


 $("#recipeSearchBtn").on("click", function() {
     console.log("running");
       foodSearch = $("#recipeSearchInput").val().trim();
       recipeUrl = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=" + foodKey + "&app_key=" + foodAppKey + "&to=9";
       $.ajax({
         url: recipeUrl,
         method: 'GET'
       }).done(function(response) {
         for (var i = 0; i < response.hits.length; i++) {

             //get name picture and link from api
            foodName = response.hits[i].recipe.label;
            foodNameArray.push(response.hits[i].recipe.label);
            foodPicture = response.hits[i].recipe.image;
            foodPictureArray.push(response.hits[i].recipe.image);
            foodLink = response.hits[i].recipe.url;
            foodLinkArray.push(response.hits[i].recipe.url);
             
             
             //get nutrients and get per serving
             var calories = response.hits[i].recipe.calories;
             var protein = response.hits[i].recipe.totalNutrients.PROCNT.quantity;
             var fat = response.hits[i].recipe.totalNutrients.FAT.quantity;
             var recipeYield = response.hits[i].recipe.yield;
             caloriesPer = calories / recipeYield;
             caloriesPer = Math.round(caloriesPer);
             caloriesPerArray.push(Math.round(caloriesPer));
             proteinPer = protein / recipeYield;
             proteinPer = Math.round(proteinPer);
             proteinPerArray.push(Math.round(proteinPer));
             fatPer = fat / recipeYield;
             fatPer = Math.round(fatPer);
             fatPerArray.push(Math.round(fatPer));
             $("iframe").contents().find("#recipeWrapper").append("<div class='card recipeCard'> <a class='addBtn btn-floating halfway-fab waves-effect waves-light red addedBtn' data-index='" + i + "'><i class='material-icons'>add</i></a> <div class='card-image waves-effect waves-block waves-light'> <img class='activator recipeImg' src='" + foodPicture + "'></div> <div class='card-content'><span class='card-title activator grey-text text-darken-4 recipeName'>" + foodName + "<i class='material-icons right'>more_vert</i></span><div class='recipeCalories'><p>Cal: " + caloriesPer + "</p></div><div class='recipeProtein'><p>P: " + proteinPer + "</p></div><div class='recipeFat'><p>Fat: " + fatPer + "</p></div><p><a class='waves-effect waves-light btn directionBtn'>Recipe Directions</a></p><div class='card-reveal'><span class='card-title grey-text text-darken-4 recipeName'> " + foodName + "<i class='material-icons right'>close</i></span><p class='recipeDirections'>Here is some more information about this product that is only revealed once clicked on.</p></div></div>" );
          }
           addToMealPlan();


      });
     });

function addToMealPlan(){
    $("iframe").contents().find(".addedBtn").on("click", function(){
        index = $(this).attr("data-index");
        var photo = [];
        var name = [];
        photo.push(foodPictureArray[index]);
        name.push(foodNameArray[index]);
    })
}

 function allowDrop(ev){
   ev.preventDefault();
 }

 function drag(ev){
   ev.dataTransfer.setData("text", ev.target.id);
 }

 function drop(ev){
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
 }