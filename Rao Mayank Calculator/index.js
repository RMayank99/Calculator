let screen = $("#screen");
let buttons = $("button");
$("button").click(function(){
      $("button").css("outline","none");
});
var screenValue="";
$(document).click(function(event){
          let buttonText = event.target.innerText;
          console.log(buttonText);
          if(buttonText == "X"){
                buttonText = "*";
                screenValue = screenValue + buttonText;
                screen.val(screenValue);
          }else if(buttonText == "C"){
                $("input").css("border","5px solid red");
                screenValue = "";
                screen.val(screenValue);
          }else if (buttonText == '=') {
                screenValue = eval(screenValue);
                screen.val(screenValue);
                $("input").css("border","5px solid green");
                
          }else{
            $("input").css("border","5px solid grey");
                screenValue = screenValue + buttonText;
                screen.val(screenValue);
          }
});

function date(){
      var dat = new Date();
      var store = dat.getFullYear();
      console.log(store);
      return store;
    }

document.querySelector("#date").innerHTML = window.date();


