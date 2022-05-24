import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Characters List Page": "Characters List Page",
      "Character Details": "Character Details",
      "Language": "Language",
      "Back": "Back",    
      "Name": "Name",    
      "Nickname": "Nickname",      
      "Birthday": "Birthday",    
      "Occupation": "Occupation",    
      "Status": "Status",    
      "Appearance": "Appearance",    
      "Portrayed": "Portrayed",    
      "Category": "Category",  
      "Random quote": "Random quote",    
      "Update quote": "Update quote",     
    }
  },
  es: { 
    translation: {
      "Characters List Page": "Página de lista de personajes",
      "Character Details": "Detalles del personaje",
      "Language": "Idioma",
      "Back": "Volver",
      "Name": "Nombre",    
      "Nickname": "Apodo",      
      "Birthday": "Fecha de nacimiento",    
      "Occupation": "Trabajo",    
      "Status": "Estado",    
      "Appearance": "Apariencia",    
      "Portrayed": "Retratado/a",    
      "Category": "Categoría", 
      "Random quote": "Cita aleatoria", 
      "Update quote": "Actualizar cita",         
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;