const locales = {
    'en': {
        message: require('@/locales/en_US.js'),
        label: 'English',
        icon: 'a',
    },
    'zh': {
        message: require('@/locales/zh_CN.js'),
        label: '简体中文',
        icon: '',
    }
};

// 优先获取浏览器语言, 其次使用localstorage语言
// 当时当获取当的浏览器语言不在国际化语言中时, 默认使用 zh
const lang = localStorage.getItem('lang');
const bowserLang = (navigator.languages && navigator.languages[0])
    || navigator.language;
let currentLocale = lang || bowserLang;

if (!Reflect.has(locales, currentLocale)) {
    currentLocale = 'zh';
};

export const localesKeys = Object.keys(locales)
    .flatMap(langItem => ({
        lang: langItem,
        label: locales[langItem].label,
        icon: locales[langItem].icon
    }));

export default locales[currentLocale].message.default;
export { currentLocale };