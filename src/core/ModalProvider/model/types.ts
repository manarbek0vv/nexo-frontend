import type { ComponentType } from "react";

export interface ModalType<P = any> {
    id: number;
    component: ComponentType<P>;
    props: P;
}

export interface ModalContextValue {
    openModal: <P extends object>(component: ComponentType<P>, props: P) => number;
    closeModal: (id: number) => void;
}