let color = 'black';
let click = true;

function createSquares(size){
let container = document.querySelector('.container');
let squares = container.querySelectorAll('div');
squares.forEach((div) => div.remove());
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;
    for( let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        container.appendChild(square); 

    }
}

createSquares(16)

function changeSize(input){
    if(input >=2 && input <= 100){
    createSquares(input)
    }else{
        let cajaCambio = document.querySelector('#CambioTamaño');
        let aviso = document.createElement('p') ;
        aviso.textContent = 'Tiene que ser un numero entre 2 y 100!';
        cajaCambio.appendChild(aviso);
    }
}

function  colorSquare()  {
    if(click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function reset () {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', () =>{
    click = !click;
})