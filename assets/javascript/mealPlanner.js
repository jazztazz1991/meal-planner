  var config = {
    apiKey: "AIzaSyDL6UB_tJtkTUOf5-iXcpu6DoQ-QZKRX-w",
    authDomain: "chicken-mcthugget.firebaseapp.com",
    databaseURL: "https://chicken-mcthugget.firebaseio.com",
    projectId: "chicken-mcthugget",
    storageBucket: "chicken-mcthugget.appspot.com",
    messagingSenderId: "1085240631351"
  };
  firebase.initializeApp(config);



var database = firebase.database();
var divs = [];
var index = 0;
var dayOfWeek = 0;
var holdName = [];
var holdPhoto = [];
//var holdUrl = [];
var holdKey = [];

database.ref().on("child_added", function(childSnapshot, prevChildKey){       
    var foodNamePicked = childSnapshot.val().foodName;
            var foodImgPicked = childSnapshot.val().foodPic;
    var recipeUrl = childSnapshot.val().url;
    
    holdName.push(foodNamePicked);
    holdPhoto.push(foodImgPicked);
    //holdurl.push(recipeUrl);
    holdKey.push(childSnapshot.val().key)
            
        var holdDiv = "<div class='mealPlanRecipes' id='recipe" + childSnapshot.val().key + "'> <img  data-index='" + index + "' src='" + foodImgPicked + "' class='chooseMeal'><p>" + foodNamePicked + "</p></div>";
    
    divs.push(holdDiv);
    $("#recipeSection").html(divs);
    index++;
        })


$("#box1").on("click", function(){
  dayOfWeek = 1;
    console.log(dayOfWeek);
    mealChoice();
})
$("#box2").on("click", function(){
  dayOfWeek = 2;
    console.log(dayOfWeek);
    mealChoice();
})
$("#box3").on("click", function(){
  dayOfWeek = 3;
    console.log(dayOfWeek);
    mealChoice()
})
$("#box4").on("click", function(){
  dayOfWeek = 4;
    console.log(dayOfWeek);
    mealChoice()
})
$("#box5").on("click", function(){
  dayOfWeek = 5;
    console.log(dayOfWeek);
    mealChoice()
})
function mealChoice(){
    console.log("mealChoice Running");
    $(".chooseMeal").on("click", function(){
        console.log("function running");
        var ind = $(this).attr("data-index");
        console.log(ind);
        switch(dayOfWeek){
            case 1:
                $("#box1").html("<div class='storedRecipe'><img  data-index='" + ind + "' src='" + holdPhoto[ind] + "' class='chooseMeal'><p class'foodNameSelected'>" + holdName[ind] + "</p></div>");
                break;
            case 2:
                $("#box2").html("<div class='storedRecipe'><img  data-index='" + ind + "' src='" + holdPhoto[ind] + "' class='chooseMeal'><p class'foodNameSelected'>" + holdName[ind] + "</p></div>");
                break;
            case 3:
                $("#box3").html("<div class='storedRecipe'><img  data-index='" + ind + "' src='" + holdPhoto[ind] + "' class='chooseMeal'><p class'foodNameSelected'>" + holdName[ind] + "</p></div>");
                break;
            case 4:
                $("#box4").html("<div class='storedRecipe'><img  data-index='" + ind + "' src='" + holdPhoto[ind] + "' class='chooseMeal'><p class'foodNameSelected'>" + holdName[ind] + "</p></div>");
                break;
            case 5:
                $("#box5").html("<div class='storedRecipe'><img  data-index='" + ind + "' src='" + holdPhoto[ind] + "' class='chooseMeal'><p class'foodNameSelected'>" + holdName[ind] + "</p></div>");
                break;
               }
    })
}



 