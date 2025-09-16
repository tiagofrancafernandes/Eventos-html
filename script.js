function changeVisibility(btn) {
    const p = document.querySelector('.not-visible, .visible');
    if (!p) {
        return;
    }

    let toShow = p.classList.contains('not-visible');

    if (toShow) {
        p.classList.remove('not-visible');
        p.classList.add('visible');
        btn.innerHTML = 'Esconder';
        return;
    }

    p.classList.add('not-visible');
    p.classList.remove('visible');
    btn.innerHTML = 'Mostrar';
}

function setBgColor(color) {
    document.body.style.backgroundColor = color;
}

function setTextColor(color) {
    document.body.style.color = color;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('[until-load]').forEach((el) => {
        el.removeAttribute('until-load');
    });

    document.querySelectorAll('[ocultar]').forEach((el) => {
        let toHide = ['true', '1', 'on'].includes(String(el.getAttribute('ocultar') || '').toLowerCase());

        el.style.display = toHide ? 'none' : '';
    });

    document.querySelectorAll('[data-tipo-de-acao][data-acao-em="click"]').forEach((el) =>
        el.addEventListener('click', (event) => {
            let novaCor = event.target?.dataset?.novaCor || '';
            let tipoAcao = event.target?.dataset?.tipoDeAcao || '';

            if (!tipoAcao) {
                return;
            }

            if (tipoAcao === 'altera cor de FUNDO body') {
                setBgColor(novaCor);
                return;
            }

            if (tipoAcao === 'altera cor do TEXTO do body') {
                setTextColor(novaCor);
            }
        })
    );
});
