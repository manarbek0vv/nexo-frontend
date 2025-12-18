import { createContext, useContext } from "react";
import type { ModalContextValue } from "./types";

export const ModalContext = createContext<ModalContextValue>({
    closeModal: null,
    openModal: null,
});

export const useModal = () => useContext(ModalContext);