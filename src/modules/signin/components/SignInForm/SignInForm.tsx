import Input from '@core/ui/Input/Input'
import c from './SignInForm.module.scss'
import Button from '@core/ui/Button/Button'
import { initialData, type SignInData } from '@modules/signin/model/types';
import { useState } from 'react';

export function SignInForm() {
    const [data, setData] = useState<SignInData>(initialData);

    const isDisabled = !data.emailname.length
                    || !data.password.length;

    return (
        <div className={c.container}>
            <h1 className={c.title}>Nexo</h1>

            <div className={c.inputs}>
                <Input setValue={e => setData(prev => ({...prev, emailname: e}))}
                    value={data.emailname} placeholder='Имя пользователя или эл. адрес' />
                <Input setValue={e => setData(prev => ({...prev, password: e}))}
                    value={data.password} placeholder='Пароль' hidden />
            </div>

            <div className={c.buttonWrapper}>
                <Button disabled={isDisabled}>Войти</Button>
            </div>

            <div className={c.lineWrapper}>
                <div className={c.line} />
                <span className={c.text}>или</span>
                <div className={c.line} />
            </div>

            <div className={c.facebook}>Войти через Facebook</div>

            <div className={c.forget}>Забыли пароль?</div>
        </div>
    )
}