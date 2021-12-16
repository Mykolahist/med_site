const refs = {
  dropdownBtn: document.querySelector('.menu-btn'),
  menuList: document.querySelector('.menu-list')
};

refs.dropdownBtn.addEventListener('click', onOpenDropdown)

function onOpenDropdown() {
  refs.menuList.classList.toggle('show');
}