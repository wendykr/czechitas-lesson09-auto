const imgElm = document.querySelector('img');

const move = (event) => {
    const tlacitko = event.key;

    if(tlacitko === 'ArrowRight') {
        imgElm.style.transform = 'rotateY(0deg)';
        imgElm.style.animation = 'to-right 5s forwards';
    }

    if(tlacitko === 'ArrowLeft') {
        imgElm.style.transform = 'rotateY(180deg)';
        imgElm.style.animation = 'to-left 5s forwards';
    }
  
    //console.log(event);
    console.log('keydown');
    console.log(tlacitko);
}

window.addEventListener('keydown', move);



