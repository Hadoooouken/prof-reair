export const modal = () => {
  const headerModal = document.querySelector('.header-modal');
  const closeButton = document.querySelector('.header-modal__close');
  const modalButton = document.querySelector('.button');
  const overlay = document.querySelector('.overlay');
  const documentsSection = document.querySelector('#documents');

  const imageModal = document.querySelector('.image-popup');
  const imageModalImage = imageModal.querySelector('.popup__image');

  const openModal = (modal) => {
    overlay.classList.add('overlay--opened');
    modal.classList.add('modal-opened');
    window.addEventListener('keydown', closeModalByEsc);
  };

  const closeModal = (modal) => {
    overlay.classList.remove('overlay--opened');
    modal.classList.remove('modal-opened');
    window.removeEventListener('keydown', closeModalByEsc);
  };

  const closeModalByOverlay = (e) => {
        const openedModal = document.querySelector('.modal-opened');
    if (e.target === overlay) {
      closeModal(openedModal);
    }
  };

  const closeModalByEsc = (e) => {
    const openedModal = document.querySelector('.modal-opened');
    if (openedModal && e.key === 'Escape') {
      closeModal(openedModal);
    }
  };

  modalButton.addEventListener('click', (e) => {
    openModal(headerModal);
  });

  closeButton.addEventListener('click', () => {
    closeModal(headerModal);
  });

  overlay.addEventListener('click', closeModalByOverlay);

  function openImageModal(card) {
    imageModalImage.src = card.href;

    openModal(imageModal);
  }

  documentsSection.addEventListener('click', (e) => {
    e.preventDefault();

    const cardImg = e.target.closest('.sertificate-document');
    if (!cardImg) return;
    openImageModal(cardImg);
  });


console.log(imageModalImage);
};
