const difficulty = document.getElementById('difficulty');
const pierre = document.getElementsByClassName('fa-hand-back-fist');
const feuille = document.getElementsByClassName('fa-hand');
const ciseau = document.getElementsByClassName('fa-hand-scissors');


//Changement de couleur d'un élément : 
function changeColor(element, color){
  element.style.color = color;
}
 
function onClickElement(element){
  clickedElements = 0;

  element[0].addEventListener("click", function(){
    if(clickedElements == 0){
      changeColor(element[0], "green");
      let selectedElement = element[0];
      clickedElements++;
      cpuChoice();
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

onClickElement(pierre);
onClickElement(feuille);
onClickElement(ciseau);

//Combinaisons gagnantes :
winningCombinations = [
  {
    element: pierre[0],
    beats: ciseau[1]
  },
  {
    element: feuille[0],
    beats: pierre[1]
  },
  {
    element: ciseau[0],
    beats: feuille[1]
  }
]

function randomVerifier(human_element, cpu_element){
  for(let i = 0 ; winningCombinations.length ; i++){
    if(winningCombinations[i].element == human_element && winningCombinations[i].beats == cpu_element){
      console.log("Vous avez gagné !");
      return hasWon = true;
    }
    else{
      console.log("Vous avez perdu !");
      return hasWon = false;
    }
  }
}

function cpuChoice(){
  let cpu_random = Math.floor(Math.random() * 3);
  switch (cpu_random){
    case cpu_random = 0:
      //Reset :
      pierre[1].style.color = "white";
      feuille[1].style.color = "white";
      ciseau[1].style.color = "white";
      console.log("Pierre a été choisi par l'ordinateur");
      changeColor(pierre[1], "red");
      return pierre[1];

    case cpu_random = 1:
      //Reset :
      pierre[1].style.color = "white";
      feuille[1].style.color = "white";
      ciseau[1].style.color = "white";
      console.log("Feuille a été choisi par l'ordinateur");
      changeColor(feuille[1], "red");
      return feuille[1];

    case cpu_random = 2:
      //Reset :
      pierre[1].style.color = "white";
      feuille[1].style.color = "white";
      ciseau[1].style.color = "white";
      console.log("Ciseau a été choisi par l'ordinateur");
      changeColor(ciseau[1], "red");
      return ciseau[1];
  }
}














