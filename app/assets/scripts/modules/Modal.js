import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    openModal() {
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    events() {
       this.openModalButton.click(this.openModal.bind(this));
       this.closeModalButton.click(this.closeModal.bind(this));
       $(document).keyup(this.keyPressHandler.bind(this));
    }
}

export default Modal;