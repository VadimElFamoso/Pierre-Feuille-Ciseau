const difficulty = document.getElementById('difficulty');
const pierre = document.getElementsByClassName('fa-hand-back-fist');
const feuille = document.getElementsByClassName('fa-hand');
const ciseau = document.getElementsByClassName('fa-hand-scissors');

const human_score = document.getElementById("human_score");
const cpu_score = document.getElementById("cpu_score");

//Arrays index :
const human_index = 0;
const cpu_index = 1;

//Scores : 
let human_score_result = 0;
let cpu_score_result = 0;

//Changement de couleur d'un élément : 
function changeColor(element, color){
  element.style.color = color;
}
 
function onClickElement(element){
  clickedElements = 0;

  element[human_index].addEventListener("click", function(){
    if(clickedElements == 0){
      changeColor(element[human_index], "green");
      let selectedElement = element[human_index];
      clickedElements++;
      randomVerifier(selectedElement, cpuChoice());
    }
    else{
      //Reset :
      pierre[0].style.color = "white";
      feuille[0].style.color = "white";
      ciseau[0].style.color = "white";
      changeColor(element[0], "white");
      let selectedElement = null;
      clickedElements--;
    }
  })
}

function randomVerifier(human_element, cpu_element){
let winningPairs = 0;

  winningCombinations.forEach(pairs => {
    if(pairs.element == human_element && pairs.beats == cpu_element){
      winningPairs++;
    }
  }); 
  
  if(winningPairs == 1){
    console.log("Vous avez gagné !");
    human_score_result++;
    human_score.innerHTML = human_score_result;
    return true;
  }
  else{
    console.log("Vous avez perdu !");
    cpu_score_result++;
    cpu_score.innerHTML = cpu_score_result;
    return false;
  }
}

function cpuChoice(){
  let cpu_random = Math.floor(Math.random() * 3);
  switch (cpu_random){
    case cpu_random = 0:
      //Reset :
      pierre[cpu_index].style.color = "white";
      feuille[cpu_index].style.color = "white";
      ciseau[cpu_index].style.color = "white";
      console.log("Pierre a été choisi par l'ordinateur");
      changeColor(pierre[cpu_index], "red");
      return pierre[cpu_index];

    case cpu_random = 1:
      //Reset :
      pierre[cpu_index].style.color = "white";
      feuille[cpu_index].style.color = "white";
      ciseau[cpu_index].style.color = "white";
      console.log("Feuille a été choisi par l'ordinateur");
      changeColor(feuille[cpu_index], "red");
      return feuille[cpu_index];

    case cpu_random = 2:
      //Reset :
      pierre[cpu_index].style.color = "white";
      feuille[cpu_index].style.color = "white";
      ciseau[cpu_index].style.color = "white";
      console.log("Ciseau a été choisi par l'ordinateur");
      changeColor(ciseau[cpu_index], "red");
      return ciseau[cpu_index];
  }
}

//Combinaisons gagnantes :
winningCombinations = [
  {
    element: pierre[human_index],
    beats: ciseau[cpu_index]
  },
  {
    element: feuille[human_index],
    beats: pierre[cpu_index]
  },
  {
    element: ciseau[human_index],
    beats: feuille[cpu_index]
  }
]

onClickElement(pierre);
onClickElement(feuille);
onClickElement(ciseau);













