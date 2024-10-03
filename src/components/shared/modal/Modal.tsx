import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';

interface IModal {
  isOpen: boolean;
}

const Modal = ({ isOpen }: IModal) => {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  console.log('render');

  const modalContent = (
    <div
      className={styles.modalBackdrop}
      style={{ display: isVisible ? 'flex' : 'none' }} // Ensure it's centered with flexbox
      aria-modal="true"
      aria-hidden={!isVisible}
    >
      <div className={styles.modalContent} ref={modalRef}>
        {/* Modal Body Here */}
        <p>Modal Content</p>
        <button onClick={toggleModal}>Close Modal</button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('body') as HTMLElement // Ensure there's a 'modal-root' in your HTML
  );
};

export default Modal;
