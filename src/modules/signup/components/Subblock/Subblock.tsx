import { Link } from 'react-router'
import c from './Subblock.module.scss'

export function Subblock() {

    return (
        <div className={c.alter}>
            Есть аккаунт?
            <Link to="/auth/sign-in">Вход</Link>
        </div>
    )
}