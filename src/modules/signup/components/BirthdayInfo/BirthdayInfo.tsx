import Button from '@core/ui/Button/Button'
import c from './BirthdayInfo.module.scss'

interface BirthdayInfoProps {
    onClose: () => void;
}

function BirthdayInfo({
    onClose
}: BirthdayInfoProps) {

    return (
        <div className={c.container}>
            <div className={c.header}>
                <h1 className={c.title}>Дни рождения</h1>

                <div className={c.closeWrapper}
                    onClick={onClose}>
                    <img src="/close.svg" className={c.close} />
                </div>
            </div>

            <img src="/birthday-cake.svg" className={c.cake} />

            <h1 className={c.subtitle}>Дни рождения в Nexo</h1>

            <p className={c.text}>
                Если вы укажете дату рождения, мы сможем лучше
                настраивать для вас функции и подбирать более
                актуальную рекламу, также эта информация
                нужна нам, чтобы обеспечивать безопасность всех
                пользователей Instagram. Дата вашего рождения будет
                указана в разделе настроек аккаунта "Личная информация".
            </p>

            <div className={c.buttonWrapper}>
                <Button isFilled={false}>Подробнее</Button>
            </div>
        </div>
    )
}

export default BirthdayInfo