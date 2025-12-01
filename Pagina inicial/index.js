// Carrocel //
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}
function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0 
    }else{
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length -1
    }else{
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)

currentSlide = currentSlide + 1

// Botão

// Adicione este código ao seu arquivo index.js

// Selecionar elementos
const btnContato = document.querySelector('.btn-contato button');
const modal = document.getElementById('modalContato');
const fecharModal = document.querySelector('.fechar-modal');

// Abrir modal ao clicar no botão de contato
btnContato.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Fechar modal ao clicar no X
fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});