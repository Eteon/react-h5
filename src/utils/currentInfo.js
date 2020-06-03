import intl from 'react-intl-universal';

export function getCurrentLanguage() {
    return intl.options.currentLocale;
};
