import { type FC } from 'react';
import { SiteLink } from '@/sharedComponents';
import { Lang } from './Lang';

import './RightSide.scss';

export const RightSide: FC = () => {
  return (
    <div className="RightSideWrapper">
      <SiteLink image={'https://storage.yandexcloud.net/sokar/sokar-website/sites/spotify.svg'} link={'https://open.spotify.com/artist/0kBZGOWgoEH3QVTUDz3L7s'} />
      <SiteLink image={'https://storage.yandexcloud.net/sokar/sokar-website/sites/soundcloud.svg'} link={'https://soundcloud.com/sokar_music'} />
      <SiteLink image={'https://storage.yandexcloud.net/sokar/sokar-website/sites/youtube.svg'} link={'https://www.youtube.com/@Sokar_Music'} />
      <SiteLink image={'https://storage.yandexcloud.net/sokar/sokar-website/sites/instagram.svg'} link={'https://www.instagram.com/sokar.music/'} />
      <Lang />
    </div>
  );
};
