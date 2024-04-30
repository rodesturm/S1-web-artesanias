const btn = document.querySelector('#btn-color');
const seccion_productos = document.querySelector('body');
let isOriginalColor = true;

const btnHideShow = document.getElementById('btn-hide-show');
const informacionSection = document.getElementById('informacion');
const paragraphs = informacionSection.querySelectorAll('p');
let isHidden = false;

//CAMBIO DE COLOR BOTÓN Y FONDO

btn.style.backgroundColor = '#28844b';


btn.addEventListener('click', () => {
    if (isOriginalColor) {
        btn.style.backgroundColor = '#6a5850';
        btn.style.transition = '.5s ease';
        seccion_productos.style.backgroundColor = '#f2f2f2';
        seccion_productos.style.backgroundColor = '#FDF1F1';
        seccion_productos.transition = '.5s ease';
        isOriginalColor = false;
    } else {
        btn.style.backgroundColor = '#28844b';
        seccion_productos.style.backgroundColor = '#f2f2f2';
        isOriginalColor = true;
    }
});

//MOSTRAR/OCULTAR TEXTO

btnHideShow.addEventListener('click', () => {
  if (isHidden) {
    // muestra los párrafos
    paragraphs.forEach(paragraph => paragraph.style.display = 'flex');
    btnHideShow.textContent = 'Ocultar texto';
    isHidden = false;
  } else {
    // oculta los párrafos
    paragraphs.forEach(paragraph => paragraph.style.display = 'none');
    btnHideShow.textContent = 'Mostrar texto';
    isHidden = true;
  }
});