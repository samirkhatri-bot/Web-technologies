

document.querySelector('.menu').onclick=function(e){
    let n = document.querySelector('.nav');
    let b = document.querySelector('.menu');

    n.classList.toggle('is-active');
    b.classList.toggle('is-active');
    e.preventDefault();
}