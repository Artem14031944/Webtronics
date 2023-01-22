import { FC } from 'react';
import Image from 'next/image';
import icon_linken from '../../../public/linken.svg';
import icon_twiter from '../../../public/social_1.svg';
import icon_fox from '../../../public/social_2.svg';
import icon_facebook from '../../../public/social_3.svg';
import style from './FooterSocial.module.css';

interface Isocial {
    id: number;
    icon: string;
};

const FooterSocial: FC = () => {

  const social = [
    {id: 1, icon: icon_facebook.src},
    {id: 3, icon: icon_fox.src},
    {id: 2, icon: icon_twiter.src},
    {id: 4, icon: icon_linken.src},
  ];

  return (
    <div className={style.container}>
      <h3 className={style.title}>Social media</h3>
      {social?.map((item: Isocial) => (
        <Image 
          key={item.id}
          src={item.icon}
          alt={item.icon}
          width={20}
          height={20}
        />
      ))}
    </div>
  )
};

export default FooterSocial;