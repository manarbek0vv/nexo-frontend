import Button from '@core/ui/Button/Button'
import c from './BirthdayForm.module.scss'
import Select from '@core/ui/Select/ui/Select';
import type { BirthdayFormData } from '@modules/signup/model/types';
import { useState } from 'react';
import { getDaysArrayInMonth, MONTHS, YEARS } from '@modules/signup/model/lib';
import { useModal } from '@core/tools/ModalProvider/model/context';
import BirthdayInfo from '../BirthdayInfo/BirthdayInfo';

interface BirthdayFormProps {
    toBack: () => void;
    initialData: BirthdayFormData;
}

export function BirthdayForm({
    toBack,
    initialData,
}: BirthdayFormProps) {
    const [data, setData] = useState<BirthdayFormData>(initialData);
    const { openModal, closeModal } = useModal();

    const days = getDaysArrayInMonth(data.month, data.year);

    const handleOpen = () => {
        const modalID = openModal(BirthdayInfo, {
            onClose: () => closeModal(modalID)
        });
    }

    return (
        <div className={c.container}>
            <img className={c.cake} src='/birthday-cake.svg' />

            <span className={c.title}>Укажите дату вашего рождения</span>

            <span className={c.subtitle}>Эта информация не будет показываться в вашем общедоступном профиле.</span>

            <span onClick={handleOpen}
                className={c.blue}>
                Почему нужно указывать дату рождения?
            </span>

            <div className={c.selects}>
                <Select
                    options={MONTHS}
                    value={data.month}
                    setValue={(value) => setData(prev => ({ ...prev, month: parseInt(value) }))}
                />
                <Select
                    options={days}
                    value={data.day}
                    setValue={(value) => setData(prev => ({ ...prev, day: parseInt(value) }))}
                />
                <Select
                    options={YEARS}
                    value={data.year}
                    setValue={(value) => setData(prev => ({ ...prev, year: parseInt(value) }))}
                />
            </div>

            <span className={c.text}>Требуется ввести дату вашего рождения</span>

            <span className={c.text}>Укажите собственный день рождения, даже если вы создаете этот аккаунт для компании, домашнего животного и пр.</span>

            <div className={c.buttons}>
                <div className={c.buttonWrapper}>
                    <Button>Далее</Button>
                </div>
                <div className={c.buttonWrapper}>
                    <Button onClick={toBack} isFilled={false}>Назад</Button>
                </div>
            </div>
        </div>
    )
}