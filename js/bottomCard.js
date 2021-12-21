const refs = {
  detailsBtn: document.querySelectorAll('.details-btn'),
  lessBtn: document.querySelectorAll('.less-btn'),
  cardBottom: document.querySelectorAll('.card-bottom')
};

refs.detailsBtn.forEach(e => e.addEventListener('click', onOpenBottomCard));
refs.lessBtn.forEach(e => e.addEventListener('click', onCloseBottomCard));

function onOpenBottomCard() {
  this.parentNode.parentNode.querySelector('.card-bottom').classList.add('open');
  // this.parentNode.querySelector('.details-btn').classList.add('close');
};

function onCloseBottomCard() {
  this.parentNode.parentNode.querySelector('.card-bottom').classList.remove('open');
  // console.log(this.parentNode.querySelector('.details-btn'));
}