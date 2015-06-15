// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


/*  ****************** LIBRARIES *********************** */
function aboveAverage(val,min,max){
  if(val>(min+max)/2)
    return true;
  return false;
}
// function written by lostsource on github
function getImageLightness(imageSrc,callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;

    img.onload = function() {
        // create canvas
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);

        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        var data = imageData.data;
        var r,g,b,avg;

        for(var x = 0, len = data.length; x < len; x+=4) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];

            avg = Math.floor((r+g+b)/3);
            colorSum += avg;
        }

        var brightness = Math.floor(colorSum / (this.width*this.height));
        callback(brightness);
    }
}
/*  ****************** LIBRARIES *********************** */
// TODO: determine image of profile pic and see if it is dark or bright


$(".button-collapse").sideNav();

function ifSearchButton(e){
  var target =$(e.target)
  .closest(".button-search[data-activates='search']");
  return target.length;
};
function ifResetButton(e){
  var target =$(e.target)
  .closest('input[type="search"] ~ button[type="reset"]');
  return target.length;
};
function ifInOptionsWindow(e){
  var target =$(e.target)
  .closest('.card#options');
  return target.length;
};
function ifOptionsButton(e){
  var target =$(e.target)
  .closest(".button-options[data-activates='options']");
  return target.length;
};

$("body").click(function(e){
  // if clicked on search button
  if(ifSearchButton(e)){
  $("#search-form").addClass("active");
  $("#search").addClass("active");
  } else
  // if clicked on the reset button
  if(ifResetButton(e)){
    // clear search bar
    $("#search").val("");
    // hide the search bar
    $("#search-form.active").removeClass("active");
    $("#search.active").removeClass("active");
  } else
  // if clicked on anything that isnt the search or reset or the search bar
  if(e.target.id !="search" && !ifSearchButton(e) && !ifResetButton(e)){
  // hide the search bar
    $("#search-form.active").removeClass("active");
    $("#search.active").removeClass("active");
  }
  // if clicked on the options button
  if(ifOptionsButton(e)){
    // show the options window
  $(".card#options").addClass("active");
  } //if clicked on anything that isn't the options button or options window
  else if(!ifInOptionsWindow(e)){
    $(".card#options").removeClass("active");
  }
  // set the settings modal to open on click of settings button
  //$(".button-settings[href='#settings']").leanModal();
});
// set when the user starts changing the password, a second input appears asking the user to enter it a second time
$("#password-input #shown").keypress(function(){
  $("#password-input #hidden").removeClass("hide");
});
//$("#save-button").
/*$("a#save-button").hover(function(){
  console.log("hovered!");
});*/
function resetForm(id){
  $("form#"+id)[0].reset();
  // loop through all the elements
  $("form#"+id+" input").each(function(index){
    // if the input has a defined placeholder
    if($(this).attr('placeholder')!=undefined){
      // get the accompanying label
      var labelElement = $("form#"+id+" label").get(index);
      // add active to that label
      $(labelElement).addClass("active");
    }
  });
  $("form#"+id+" #password-input #hidden").addClass("hide");
}

/*var elem = $("a#save-button")[0];*/
$(".button-settings[href='#settings']").click(function(){
  /* The reason this click event is used to open the modal instead of using .leanModal is because when the settings button is placed on the sidebar, it requires 2 clicks in order to open the modal. This keeps it at one click only */
  $('#settings').openModal();
  // when the cancel or save button is clicked, the form is reset
  $("#cancel-button,#save-button").one("click",function(){
    // reset the form
    resetForm("settings-form");
  });
});


