let img = document.querySelector('#images-before-after');
let btn1 = document.querySelector('#btn-before');
let btn2 = document.querySelector('#btn-after');

btn1.addEventListener('click', () => {
    img.src = 'pictures/ArabSpringMap1.png';
})

btn2.addEventListener('click', () => {
    img.src = 'pictures/ArabSpringMap2.png';
    console.log("Done Btn After")
})
