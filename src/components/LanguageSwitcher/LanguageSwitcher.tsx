import { useLanguage } from '../../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="nav-item flex items-center gap-1 rounded-full border border-primary/20 bg-dark-secondary/40 p-1">
      <button
        type="button"
        onClick={() => setLanguage('ru')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 ${
          language === 'ru'
            ? 'bg-primary text-dark'
            : 'text-gray-300 hover:text-primary'
        }`}
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-dark'
            : 'text-gray-300 hover:text-primary'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
