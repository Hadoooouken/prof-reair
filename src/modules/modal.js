export const modal = () => {
  const headerModal = document.querySelector('.header-modal');
  const closeButton = document.querySelector('.header-modal__close');
  const modalButton = document.querySelector('.button');
  const overlay = document.querySelector('.overlay');

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

  modalButton.addEventListener('click', () => {
    openModal(headerModal);
  });

  closeButton.addEventListener('click', () => {
    closeModal(headerModal, overlay);
  });

  const closeModalByOverlay = (e) => {
    if (e.target === overlay) {
      closeModal(headerModal, overlay);
    }
  };

  const closeModalByEsc = (e) => {
    if (headerModal.classList.contains('modal-opened') && e.key === 'Escape') {
      closeModal(headerModal, overlay);
    }
  };

  overlay.addEventListener('click', closeModalByOverlay);
};
