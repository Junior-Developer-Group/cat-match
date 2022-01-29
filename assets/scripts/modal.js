var modal = document.querySelector('#modal');
var modalButtons = document.querySelectorAll('.toggle-modal');
var lastFocussedElement;

function toggleModal() {
  if (modal.style.display == 'block') {
    closeModal();
  } else {
    openModal();
  }
}

function openModal() {
  modal.style.display = 'block';

  // Remember the last selected item on the page
  lastFocussedElement = document.activeElement;

  // Focus on the modal
  modal.setAttribute('tabindex', '0');
  modal.focus();
}

function closeModal() {
  modal.style.display = 'none';

  // Return the user to the last item they were looking at before opening the modal
  lastFocussedElement.focus();
}

modalButtons.forEach((button) => (button.onclick = () => toggleModal()));

// Allow the user to close the modal instantly using Escape
document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape' || event.key == 'Esc') {
    closeModal();
  }
});
