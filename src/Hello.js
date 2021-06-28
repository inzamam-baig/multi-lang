import { useTranslation } from 'react-i18next'
const Hello = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h4>{t('hello.label')}</h4>
        </div>
    )
}

export default Hello;
