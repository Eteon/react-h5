import React from 'react';
import { Radio, List } from 'antd-mobile';
import { localesKeys } from '@/locales';
import { getCurrentLanguage } from '@/utils/currentInfo';
import './index.less';

export default function SwitchLanguage() {
    const handleSwitchLanguage = (lang) => {
        window.localStorage.setItem('lang', lang);
        window.location.reload();
    };

    return (
        <List>
            {localesKeys.map(({ lang, label, icon }) => {
                const isChecked = getCurrentLanguage() === lang;
                return (
                    <Radio.RadioItem
                        key={lang}
                        checked={isChecked}
                        onChange={() => handleSwitchLanguage(lang)}
                        className={isChecked ? 'customize-list-checked' : ''}
                    >
                        {label}
                    </Radio.RadioItem>
                )
            })}
        </List>
    )
};