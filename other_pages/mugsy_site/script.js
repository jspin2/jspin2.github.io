const trig = document.querySelector('#trigger');

const display_text = document.querySelector('#result');

let h = document.querySelector('#height').value;


trigger.onclick=function(){
  h=document.querySelector('#height').value;
  let mugsyHeight= 53;
  let amount=0;

  amount=h/mugsyHeight;
  if (amount===0){
    display_text.textContent="That's not a height.";
  }else{
  display_text.textContent="You are " + amount + " Mugsys tall";
}
}
