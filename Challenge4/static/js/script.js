

var allButtons = document.getElementsByTagName('button');
console.log(allButtons);

let copyAllButtons = [];

for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}


console.log(copyAllButtons);

function btnColorChange(buttonObj){
    //Deleting the css class which was giving the color to each buttons.
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
    }

    switch(buttonObj.value){
        case 'random':
            buttonsRandom();
            break;
        case 'reset':
            buttonsReset();
            break;
        default:
            buttonsColored(buttonObj);
            break;
    }
}

function buttonsRandom(){

}

function buttonsReset(){
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.add(copyAllButtons[i]);        
    }
}

function buttonsColored(buttonObj){
    switch(buttonObj.value){
        case "blue":
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.add('btn-primary');
            }
            break;
        case "red":
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.add('btn-danger');
            }
            break;
        case "green":
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.add('btn-success');
            }
            break;
        case "gray":
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.add('btn-secondary');
            }
            break;
    }
}