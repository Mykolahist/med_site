const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]')
};
console.log(refs.openModalBtn);
refs.openModalBtn.addEventListener('click', onOpenModal)

function onOpenModal() {
  document.modal.classList.add('show-modal');
}