$(document).ready(function(){

$("#my_audio").get(0).play();//.prop('volume', 0.03);

//sound clips 
var audio = new audio ('assets/music/gameThemeSound.mp3').prop('volume', 0.5);
var winToot = new audio ('assets/music/winToot.mp3');
var lossSound = new audio ('assets/music/ohNo.mp3');



// if(userScore == randomNum) {
// $("#my_audio")("src", "assets/music/winToot.mp3");

// }else if(userScore > randomNum) {
// $("#my_audio")("src", "assets/music/ohNo.mp3");
 
// }
});	