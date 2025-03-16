// components/Modal.tsx
import { useEffect, ReactNode } from 'react';

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    children: ReactNode;
    buttons?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, buttons }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            {title && (
                                <h3 className="text-base font-semibold text-gray-900" id="modal-title">
                                    {title}
                                </h3>
                            )}
                        </div>
                        <div className="mt-2 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 py-3">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
