import { useState, type ComponentType } from "react";
import type { ModalType } from "./model/types";
import { ModalContext } from "./model/context";
import Modal from "@core/ui/Modal/ui/Modal";

export interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider = ({
    children
}: ModalProviderProps) => {
    const [modals, setModals] = useState<ModalType[]>([]);
    
    let nextID = 0;

    const openModal = <P extends object>(
        component: ComponentType<P>,
        props: P
    ) => {
        const id = nextID++;
        const modal: ModalType<P> = { id, component, props };
        setModals(prev => [...prev, modal]);
        return id;
    };
    
    const closeModal = (id: number) => {
        setModals(prev => prev.filter(modal => modal.id !== id));
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            
            {
                modals.map(modal => {
                    const Component = modal.component;
                    const close = () => closeModal(modal.id);
                    
                    return <Modal onClose={close}>
                        <Component
                            key={modal.id}
                            {...modal.props}
                        />
                    </Modal>
                })
            }
        </ModalContext.Provider>
    )
}