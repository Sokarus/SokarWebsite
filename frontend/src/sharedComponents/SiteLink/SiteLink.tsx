import { type FC } from 'react';
import { Image, Button } from '@/sharedComponents';
import { type SiteLinkProps } from './types';

export const SiteLink: FC<SiteLinkProps> = ({ image, link }) => {
    return (<Button content={<Image src={image} width={20} height={20} />} link={link} target={'_blank'} style={"Ghost"} />);
};
