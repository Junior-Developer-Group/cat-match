let modal = document.querySelector('#modal');
let modalButtons = document.querySelectorAll('.toggle-modal');

function toggleModal() {
  if (modal.style.display == 'block') {
    closeModal();
  } else {
    openModal();
  }
}

function openModal() {
  modal.style.display = 'block';

  // Focus on the modal
  modal.setAttribute('tabindex', '0');

}

function closeModal() {
  modal.style.display = 'none';
}

modalButtons.forEach((button) => (button.onclick = () => toggleModal()));

// Allow the user to close the modal instantly using Escape
// document.addEventListener('keydown', (event) => {
//   if (event.key == 'Escape' || event.key == 'Esc') {
//     closeModal();
//   }
// });

//Allow the user to close the modal by clicking outside modal window
// document.addEventListener('mouseup', (event) => {
//   if(!modal.contains(event.target)){
//     closeModal();
//   }
// });

