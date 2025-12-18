import { createPortal } from 'react-dom';
import c from './Modal.module.scss'
import { useEffect } from 'react';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

function Modal({
    children,
    onClose,
}: ModalProps) {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        }
        window.addEventListener('keydown', handleEsc)

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        }
    }, [])

    return createPortal(
        <div className={c.container}
            onClick={onClose}>
            <div className={c.safer}
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    )
}

export default Modal