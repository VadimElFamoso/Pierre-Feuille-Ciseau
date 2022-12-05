const difficulty = document.getElementById('difficulty');
const human_choice = document.getElementsByClassName('fa-solid')
console.log(human_choice);

let i = 0
for(i ; human_choice.length - 1 ; i++){
    human_choice[i].addEventListener('click', function(){
        human_choice[i].style.color = 'red';
        return;
    })
}