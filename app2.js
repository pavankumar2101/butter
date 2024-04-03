const container = document.querySelector('.container');
const imgBefore = document.querySelector('.img-before');
const line = document.querySelector('.line');

container.addEventListener('mousemove', e => {

    imgBefore.style.width = `${e.layerX}px`;
    // imgBefore.style.left = `${e.layerX}px`;
    
    //this will give us the current position of the mouse in px
})