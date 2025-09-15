function changeVisibility(btn) {
    const p = document.querySelector('.not-visible, .visible');
    if (!p) {
        return;
    }

    let toShow = p.classList.contains('not-visible');

    if (toShow) {
        p.classList.remove('not-visible');
        p.classList.add('visible');
        btn.innerHTML =  'Esconder';
        return
    }

    p.classList.add('not-visible');
    p.classList.remove('visible');
    btn.innerHTML =  'Mostrar';
}


function setBgColor(color) {
    document.body.style.backgroundColor = color;
}
