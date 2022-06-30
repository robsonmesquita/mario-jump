const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
let reiniciar = document.querySelector('.reiniciar')
let cont = 0;
const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
       
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)
   
    if (pipePosition  <= 97 && pipePosition > 0 && marioPosition < 100) {

     pipe.style.animation = 'none';
     pipe.style.left = `${pipePosition}px`;

     mario.style.animation = 'none';
     mario.style.bottom = `${marioPosition}px`;

     mario.src = './assets/img/game-over.png';
     mario.style.width = '75px';
     mario.style.marginleft = '50px'

     
     if(reiniciar.style.display === 'block') {
         reiniciar.style.display = 'none'
     } else {
         reiniciar.style.display = 'block'
     }

    

     clearInterval(loop);

    } 

    cont++;
    score.innerHTML = `score: ${cont}`

},10 );
document.addEventListener('keydown', jump);