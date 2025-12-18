import Button from '@core/ui/Button/Button'
import c from './SignUpForm.module.scss'
import Input from '@core/ui/Input/Input'
import { useState, type FormEventHandler } from 'react';
import type { onNextArgument, SignUpFormData } from '@modules/signup/model/types';

interface SignUpFormProps {
    initialData: SignUpFormData;
    onNext: (data: onNextArgument) => void;
}

export function SignUpForm({
    initialData,
    onNext,
}: SignUpFormProps) {
    const [data, setData] = useState<SignUpFormData>(initialData);
    
    const isDisabled = 
            !data.email.length
            || !data.password.length
            || !data.name.length
            || !data.username.length

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onNext(data);
    }

    return (
        <form onSubmit={onSubmit} className={c.container}>
            <h1 className={c.title}>Nexo</h1>

            <h2 className={c.subtitle}>
                Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
            </h2>

            <div className={c.buttonWrapper}>
                <Button>Войти через Facebook</Button>
            </div>

            <div className={c.lineWrapper}>
                <div className={c.line} />
                <span className={c.text}>или</span>
                <div className={c.line} />
            </div>

            <div className={c.inputs}>
                <Input setValue={(e) => setData(prev => ({...prev, email: e}))} value={data.email} placeholder='Эл. адрес' />
                <Input setValue={(e) => setData(prev => ({...prev, password: e}))} value={data.password} placeholder='Пароль' hidden />
                <Input setValue={(e) => setData(prev => ({...prev, name: e}))} value={data.name} placeholder='Имя и фамилия' />
                <Input setValue={(e) => setData(prev => ({...prev, username: e}))} value={data.username} placeholder='Имя пользователя' />
            </div>

            <div className={c.buttonWrapper}>
                <Button disabled={isDisabled}>Регистрация</Button>
            </div>
        </form>
    )
}