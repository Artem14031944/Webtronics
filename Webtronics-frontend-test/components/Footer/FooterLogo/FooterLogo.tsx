import { FC } from 'react';
import Image from 'next/image';
import icon_logo from '../../../public/Logo.svg';
import style from './FooterLogo.module.css';


const FooterLogo: FC = () => {
  return (
    <div className={style.container}>
      <Image
        src={icon_logo}
        alt={'logo'}
        width={169}
        height={33}
      />
      <p className={style.text}>
        Wisconsin Ave, Suite 700<br/>
        Chevy Chase, Maryland 20815
      </p>
    </div>
  )
};

export default FooterLogo;