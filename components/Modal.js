const Modal = ({ isOpen, closeModal, text, title }) => {

    if (isOpen) {
        return (
            <div className="modal">
                <div className="modal__window">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="modal__close" onClick={closeModal}></span>
                </div>
            </div>
        )
    }
    return null;
}

export default Modal;
