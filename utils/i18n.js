import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json'; // Importar traducción en inglés
import esTranslation from './locales/es.json'; // Importar traducción en español

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: enTranslation },
		es: { translation: esTranslation },
	},
	lng: 'es', // Idioma por defecto
	fallbackLng: 'en', // Si no se encuentra una traducción, usa inglés
	interpolation: {
		escapeValue: false, // React ya escapa los valores automáticamente
	},
});

export default i18n; // Asegúrate de exportarlo para usarlo en otros archivos
