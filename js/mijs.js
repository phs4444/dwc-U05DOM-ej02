'use strict';
function cargarMenu() {
    //elemento nav inicial lo añadimos al body
    let nav = document.createElement('nav');
    document.body.appendChild(nav);
    nav.style.backgroundColor = 'cadetblue';
    let ul = document.createElement('ul');

    //primer elemento ico HOME
    let ico = document.createElement('li');
    ico.appendChild(document.createTextNode('HOME'));
    ul.appendChild(ico);

    //segundo elemento MENUS
    let menus = document.createElement('li');
    menus.appendChild(document.createTextNode('MENUS'));

    //función para automatizar
    const crearLIMenu = (textoNodo, elementoULPadre, clase, link = '#') => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', link);
        a.appendChild(document.createTextNode(textoNodo));
        a.classList.add(clase);
        li.appendChild(a);
        return elementoULPadre.appendChild(li);
    }

    //menú 2do nivel
    let menu1 = crearLIMenu('Menu1', menus, 'desplegable');
    let menu2 = crearLIMenu('Menu2', menus, 'desplegable');
    ul.appendChild(menus);

    //3ro y 4to elemento
    let settings = crearLIMenu('SETTINGS', ul);
    let contact = crearLIMenu('CONTACT', ul);
    nav.appendChild(ul);
}
window.onload = cargarMenu;