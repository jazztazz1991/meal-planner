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


database.ref().on("child_added", function(childSnapshot, prevChildKey){       
    var foodNamePicked = childSnapshot.val().foodName;
            var foodImgPicked = childSnapshot.val().foodPic;
            console.log("===");
            console.log(foodNamePicked);
            console.log("===");
            $("#recipeSection").append("<div class='mealPlanRecipes' > <img id='recipe" + childSnapshot.val().key + "' draggable='true' ondragstart='drag(event)' src='" + foodImgPicked + "'><p>" + foodNamePicked + "</p></div>");
        })




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