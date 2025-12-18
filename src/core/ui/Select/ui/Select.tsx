import type { SelectOption } from '../model/types';
import c from './Select.module.scss';

interface SelectProps {
    options: SelectOption[];
    value: SelectOption["value"];
    setValue: (v: string) => void;
}

function Select({
    options,
    value,
    setValue
}: SelectProps) {

    return (
        <select
            value={value}
            className={c.container}
            onChange={(e) => setValue(e.target.value)}>
            {
                options.map(option =>
                    <option
                        key={option.value}
                        title={option.title}
                        className={c.option}
                        value={option.value}>
                        {option.title}
                    </option>
                )
            }
        </select>
    )
}

export default Select