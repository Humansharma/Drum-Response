//alert("hello");
// detect botton press
for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var buttonSound=this.innerHTML;
    makeSound(buttonSound);
    buttonAnimation(buttonSound);

});
}



   
   // alert("i got clicked!");



//detect keyboard press
    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
 


 function makeSound(c){
    if(c=='w')
    {
        var t=new Audio("sounds/tom-1.mp3");
        t.play();
    }
    if(c=='a')
    {
        var t=new Audio("sounds/tom-2.mp3");
        t.play();
    }
    if(c=='s')
    { 
        var t=new Audio("sounds/tom-3.mp3");
        t.play();
    }
    if(c=='d')
    {
        var t=new Audio("sounds/tom-4.mp3");
        t.play();
    }
    if(c=='j')
    {
        var t=new Audio("sounds/snare.mp3");
        t.play();
    }
    if(c=='k')
    {
        var t=new Audio("sounds/crash.mp3");
        t.play();
    }
    if(c=='l')
    {
        var t=new Audio("sounds/kick-bass.mp3");
        t.play();
    }
 }


 function buttonAnimation(curr){
  var active=document.querySelector("."+curr);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");
  },100);
  //

 }