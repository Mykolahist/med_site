const refs = {
  openModalBtn: document.querySelectorAll('.repeat-btn'),
  closeModalBtn: document.querySelector('.close-btn'),
  modal: document.querySelector('.backdrop')
};

refs.openModalBtn.forEach(e => e.addEventListener('click', toggleModal));
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('show');
}