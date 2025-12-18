import type { ReactNode } from 'react';
import c from './Container.module.scss';

interface ContainerProps {
    children: ReactNode;
}

function Container({
    children
}: ContainerProps) {

    return (
        <div className={c.container}>
            {children}
        </div>
    )
}

export default Container;