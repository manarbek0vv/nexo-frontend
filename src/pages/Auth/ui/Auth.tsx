import c from './Auth.module.scss';
import { Outlet } from 'react-router';

function Auth() {

    return (
        <div className={c.wrapper}>
            <Outlet />
        </div>
    )
}

export default Auth