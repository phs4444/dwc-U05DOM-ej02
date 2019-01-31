'use strict';
function cargarMenu() {
  //elemento nav inicial lo añadimos al body
  let nav = document.createElement('div');
  document.body.appendChild(nav);
  nav.classList.add('navbar');
  // nav.style.backgroundColor = 'cadetblue';

  //función para automatizar
  const crearElementoMenu = (tipo, elementoPadre, textoNodo, clase, link = '#') => {
    let el = document.createElement(tipo);
    if (textoNodo != '') {
      el.appendChild(document.createTextNode(textoNodo));
    }
    if (tipo == 'a' || tipo =='A') {
      el.setAttribute('href', link);
    }
    el.classList.add(clase);
    return elementoPadre.appendChild(el);
  }

  //creo elemento Home
  let home = crearElementoMenu('a', nav, 'HOME');

  //contenedor botón MENÚS y contenido dropdown
  let contDropDown = crearElementoMenu('div', nav, '', 'dropdown');
  //segundo elemento: MENUS
  let menus = crearElementoMenu('button', contDropDown, 'MENUS', 'dropbtn');
  menus.setAttribute('onclick', 'myFunction()');
  //contenedor menú 2do nivel
  let contDropDownContent = crearElementoMenu('div', contDropDown, '', 'dropdown-content');
  contDropDownContent.setAttribute('id', 'myDropdown');
  let menu1 = crearElementoMenu('a', contDropDownContent, 'Menu1');
  let menu2 = crearElementoMenu('a', contDropDownContent, 'Menu2');


  //3ro y 4to elemento
  let settings = crearElementoMenu('a', nav, 'SETTINGS');
  let contact = crearElementoMenu('a', nav, 'CONTACT');


}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

window.onload = cargarMenu;