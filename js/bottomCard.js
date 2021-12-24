const refs = {
  detailsBtn: document.querySelectorAll('.details-btn'),
  cardBottom: document.querySelectorAll('.card-bottom')
};
  
refs.detailsBtn.forEach(e => e.addEventListener('click', onOpenBottomCard));

function onOpenBottomCard() {
  this.parentNode.querySelector('.card-bottom').classList.toggle('open');
  
  const moreBtn = this.parentNode.querySelector('.details-btn')
  
  moreBtn.classList.toggle('less');

  if (moreBtn.classList.contains('less')) {
    moreBtn.textContent = 'Приховати';
  } else {
    moreBtn.textContent = 'Детальніше';
  }

};