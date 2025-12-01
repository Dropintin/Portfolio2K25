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