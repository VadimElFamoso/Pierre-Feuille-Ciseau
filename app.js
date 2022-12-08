const difficulty = document.getElementById('difficulty');
const pierre = document.getElementsByClassName('fa-hand-back-fist');
const feuille = document.getElementsByClassName('fa-hand');
const ciseau = document.getElementsByClassName('fa-hand-scissors');



function humanChoice(type){
  if(!type){
    return console.log("Erreur : Le type fourni dans la fonction onClickDetection n'est pas valide");
  }
  for(let i = 0 ; i <= type.length - 1 ; i++){
    type[i].addEventListener('click', function(){
      type[i].style.color = 'green';
      let triggered = true;
    })
  }
}

function cpuChoice(){
  let cpu_random = Math.floor(Math.random() * 3);
  switch (cpu_random){
    case cpu_random = 1:
      console.log("Pierre a été choisi par l'ordinateur");
      
      break;
    case cpu_random = 2:
      console.log("Feuille a été choisi par l'ordinateur");
      break;
    case cpu_random = 3:
      console.log("Ciseau a été choisi par l'ordinateur");
      break;
    
  }
}












  




//const human_choice = document.getElementById('human_container').getElementsByClassName('fa-solid');
//const cpu_choice = document.getElementById('cpu_container').getElementsByClassName('fa-solid');







