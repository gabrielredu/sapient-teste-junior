// jQuery
// $(document).ready(function() {
  // code
// });

// Vanilla JS

window.onload = function() {
  const menu = document.querySelector('#menu')
  const menuButton = document.querySelector('#menu-button');
  const videoCover = document.querySelector('#video-cover');
  const videoPlayer = document.querySelector('#video-player');
  const accordionList = document.querySelectorAll('.item')
  const wikipediaContent = document.querySelector('.extract');
  const modalButton = document.querySelector('#button-modal');
  const modal = document.querySelector('.modal-wiki');
  const closeModal = document.querySelector('#close-modal');

  function toggleClassActiveOnElement (element) {
    element.classList.toggle('-active');
  }

  function addClassInactiveOnElement (element) {
    element.classList.toggle('-inactive');
  }

  function openCloseModal () {
    modal.classList.toggle('modal-wiki-active');
  }

  menuButton.addEventListener('click', () => {
    toggleClassActiveOnElement(menu);
  })

  videoPlayer.addEventListener('click', () => {
    addClassInactiveOnElement(videoCover);
  })

  accordionList.forEach(item => {
    item.addEventListener('click', () => {
      toggleClassActiveOnElement(item);
    })
  })

  fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein&origin=*')
    .then(response => response.json())
    .then(json => {
      const extract = json.query.pages[736].extract;
      wikipediaContent.innerHTML = extract;
    })

  modalButton.addEventListener('click', openCloseModal);

  closeModal.addEventListener('click', openCloseModal);
};