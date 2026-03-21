import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon, Select } from '@/sharedComponents';
import { LANG_ICON } from '@/constants';
import { languages } from './';

export const Lang: FC = () => {
  const { i18n } = useTranslation();

  const onDropDownItemSelect = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      buttonContent={<Icon path={LANG_ICON} />}
      items={languages}
      onSelectItem={onDropDownItemSelect}
    />
  );
};
