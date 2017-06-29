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

database.ref().on("child_added", function(childSnapshot, prevChildKey){       
    var foodNamePicked = childSnapshot.val().foodName;
            var foodImgPicked = childSnapshot.val().foodPic;
    var recipeUrl = childSnapshot.val().url;
            
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
                $("#box1").html(divs[ind]);
                console.log("switch1");
                break;
            case 2:
                $("#box2").html(divs[ind]);
                console.log("switch2");
                break;
            case 3:
                $("#box3").html(divs[ind]);
                console.log("switch3");
                break;
            case 4:
                $("#box4").html(divs[ind]);
                console.log("switch4");
                break;
            case 5:
                $("#box5").html(divs[ind]);
                console.log("switch5");
                break;
               }
    })
}



 