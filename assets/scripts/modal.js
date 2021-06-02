var modal = document.querySelector('#modal');
var modalButtons = document.querySelectorAll('.toggle-modal');

function toggleModal() {
  if (modal.open == true) {
    modal.open = false;
  } else {
    modal.open = true;
  }
}

modalButtons.forEach((button) => (button.onclick = () => toggleModal()));
