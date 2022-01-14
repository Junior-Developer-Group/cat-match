var modal = document.querySelector('#modal');
var modalButtons = document.querySelectorAll('.toggle-modal');
var lastFocussedElement;
var body = document.getElementById("top");

function toggleModal() {
  if (modal.style.display == 'block') {
    closeModal();
  } else {
    openModal();
  }
}

function openModal() {
  modal.style.display = 'block';
  body.classList += "bg-modal";

  // Remember the last selected item on the page
  lastFocussedElement = document.activeElement;

  // Focus on the modal
  modal.setAttribute('tabindex', '0');
  modal.focus();
}

function closeModal() {
  modal.style.display = 'none';
  body.classList = "";

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

// Allow the user to close the modal by clicking outside the modal
//if(modal.style.display === 'block'){
//    body.addEventListener('click', (event) => {
//        var modalClicked = modal.contains(event.target);
//        if(!modalClicked){
//            console.log('clicked')
//        }
//    });
//}
