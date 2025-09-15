function changeVisibility() {
    const p = document.querySelector('.not-visible, .visible');
    if (!p) return;
    p.classList.toggle('not-visible');
    p.classList.toggle('visible');
    let btn = document.getElementsByClassName('secret')[0];
    if (p.classList.toggle('visible')){

        btn.innerHTML =  'Esconder'
    } else {
        btn.innerHTML =  'Mostrar'

    }
}


function setBgColor(color) {
    document.body.style.backgroundColor = color;
}
