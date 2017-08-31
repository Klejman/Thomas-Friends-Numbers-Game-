$(document).ready(function(){

$("#my_audio").get(0).play();//.prop('volume', 0.03);

//sound clips 
var audio = new Audio('assets/music/gameThemeSound.mp3')
var winToot = new Audio('assets/music/winToot.mp3');
var lossSound = new Audio('assets/music/ohNo.mp3');



// if(userScore == randomNum) {
// $("#my_audio")("src", "assets/music/winToot.mp3");

// }else if(userScore > randomNum) {
// $("#my_audio")("src", "assets/music/ohNo.mp3");
 
// }
});	