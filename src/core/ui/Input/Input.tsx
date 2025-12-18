import { useState, type ChangeEventHandler, type FocusEventHandler, type HTMLInputTypeAttribute } from 'react';
import c from './Input.module.scss'

interface InputProps {
    value: string;
    setValue: (e: string) => void;
    placeholder?: string;
    hidden?: boolean;
}

function Input({
    placeholder = "",
    hidden = false,
    value,
    setValue,
}: InputProps) {
    const [type, setType] = useState<HTMLInputTypeAttribute>(hidden ? "password" : "text");
    const [isFocus, setFocus] = useState(false);

    const focusHandler: FocusEventHandler<HTMLInputElement> = () => {
        setFocus(true);
    }
    const blurHandler: FocusEventHandler<HTMLInputElement> = () => {
        setFocus(false);
    }

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const changeType = () => {
        setType(prev => {
            return prev === "password" ? "text" : "password";
        })
    }

    return (
        <label className={c.wrapper}>
            <span className={[c.placeholder, (value ||isFocus) && c.active].join(" ")}>
            {placeholder}
            </span>

            <input
                onFocus={focusHandler}
                onBlur={blurHandler}
                value={value}
                onChange={onChange}
                className={[c.input, (value ||isFocus) && c.activeInput].join(" ")}
                type={type}
            />

            {
            (
                hidden && !!value.length
            )
                &&
                <div onClick={changeType}
                    className={c.showSecret}>
                    {
                        type === "password"
                        ? "Показать"
                        : "Скрыть"
                    }
                </div>
            }
        </label>
    )
}

export default Input