import { Link } from 'react-router'
import c from './Subblock.module.scss'

export function Subblock() {

    return (
        <div className={c.alter}>
            У вас нет аккаунта?
            &nbsp;
            <Link to="/auth/sign-up">Зарегистрироваться</Link>
        </div>
    )
}