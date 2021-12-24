// const refs = {
//   detailsBtn: document.querySelectorAll('.details-btn'),
//   // lessBtn: document.querySelectorAll('.less-btn'),
//   cardBottom: document.querySelectorAll('.card-bottom')
// };

// refs.detailsBtn.forEach(e => e.addEventListener('click', onOpenBottomCard));
// // refs.lessBtn.forEach(e => e.addEventListener('click', onCloseBottomCard));

// function onOpenBottomCard() {
//   this.parentNode.parentNode.querySelector('.card-bottom').classList.toggle('open');
//   const moreBtn = this.parentNode.querySelector('.details-btn')
//   console.log(moreBtn);

//   if(moreBtn )
//     moreBtn.classList.toggle('less');
  

//   // if (moreBtn = "Детальніше") { 
//   //   moreBtn = "Приховати"; 
//   // } else {
//   //   moreBtn = "Приховати";
//   // }
  
// };

// function onCloseBottomCard() {
//   this.parentNode.parentNode.querySelector('.card-bottom').classList.remove('open');
//   // console.log(this.parentNode.querySelector('.details-btn'));
// }
// else {
  //     this.innerText === "Детальніше";
  //  }
  // if (this.parentNode.querySelector('.details-btn').textContent === 'Детальніше') {
  //   button.textContent = 'Детальніше';
  // }
  // else {
  //   button.textContent = 'Приховати';
  // }


const refs = {
  detailsBtn: document.querySelectorAll('.details-btn'),
  cardBottom: document.querySelectorAll('.card-bottom')
};
  
refs.detailsBtn.forEach(e => e.addEventListener('click', onOpenBottomCard));

function onOpenBottomCard() {
  this.parentNode.parentNode.querySelector('.card-bottom').classList.toggle('open');

  const moreBtn = this.parentNode.querySelector('.details-btn')
  console.log(moreBtn);

  moreBtn.classList.toggle('less');
  
};