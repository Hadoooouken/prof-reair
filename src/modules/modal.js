export const closeModal = (modal) => {
  const overlay = document.querySelector('.overlay');

  if (!modal) return;
  overlay.classList.remove('overlay--opened');
  modal.classList.remove('modal-opened');
  window.removeEventListener('keydown', closeModalByEsc);
};

const closeModalByEsc = (e) => {
  const openedModal = document.querySelector('.modal-opened');
  if (openedModal && e.key === 'Escape') {
    closeModal(openedModal);
  }
};

export const modal = () => {
  const headerModal = document.querySelector('.header-modal');
  const serviceCardContainer = document.querySelector('.service-slider__track');
  const closeButtonAll = document.querySelectorAll('.close-modal');
  const modalButton = document.querySelector('.button');
  const overlay = document.querySelector('.overlay');
  const documentsSection = document.querySelector('#documents');
  const servicesModal = document.querySelector('.services-modal');
  const imageModal = document.querySelector('.image-popup');
  const imageModalImage = imageModal.querySelector('.popup__image');

  const openModal = (modal) => {
    overlay.classList.add('overlay--opened');
    modal.classList.add('modal-opened');

    window.addEventListener('keydown', closeModalByEsc);
  };

  const closeModalByOverlay = (e) => {
    const openedModal = document.querySelector('.modal-opened');

    if (e.target === overlay) {
      closeModal(openedModal);
    }
  };

  const openImageModal = (card) => {
    imageModalImage.src = card.href;
    openModal(imageModal);
  };

  modalButton.addEventListener('click', () => {
    openModal(headerModal);
  });

  closeButtonAll.forEach((button) => {
    button.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-opened');

      if (modal) {
        closeModal(modal);
      }
    });
  });

  overlay.addEventListener('click', closeModalByOverlay);

  serviceCardContainer.addEventListener('click', (e) => {
    if (e.target.closest('.service-button')) {
      openModal(servicesModal);
    }
  });

  documentsSection.addEventListener('click', (e) => {
    e.preventDefault();

    const cardImg = e.target.closest('.sertificate-document');

    if (!cardImg) return;

    openImageModal(cardImg);
  });
};
