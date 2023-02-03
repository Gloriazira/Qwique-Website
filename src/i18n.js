import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from './translation/en.json';
import common_fr from './translation/fr.json';


const resources ={
    en: {
        translation: common_en
    },
    fr: {
        translation: common_fr
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    keySeperator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;