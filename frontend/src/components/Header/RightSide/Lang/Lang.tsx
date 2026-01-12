import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { type FC } from 'react';
import { Button, Icon, DropDown } from '@/sharedComponents';
import { LANG_ICON } from '@/constants';
import { languages } from './';

export const Lang: FC = () => {
  const { i18n } = useTranslation();
  const [isDropDownOpened, setDropDownOpened] = useState<boolean>(false);

  const onDropDownOpen = () => setDropDownOpened(true);
  const onDropDownClose = () => setDropDownOpened(false);
  const onDropDownItemSelect = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <>
      <Button onClick={onDropDownOpen} content={<Icon path={LANG_ICON} />} style="Icon" />
      <DropDown
        isOpened={isDropDownOpened}
        onClose={onDropDownClose}
        items={languages}
        onSelect={onDropDownItemSelect}
      />
    </>
  );
};
