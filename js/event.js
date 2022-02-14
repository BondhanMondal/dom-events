function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//handle blue button click by setting function name

const blueButton = document.getElementById('make-blue-button');
//just save the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//handle event using annomous function
const greenButton = document.getElementById('make-green-button');
//annomious function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle by add eventListner

const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenrod);
function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//add eventListner

const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//direct shortcut

document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
