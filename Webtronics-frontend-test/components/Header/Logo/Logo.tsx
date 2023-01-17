import { FC } from 'react';
import Image from 'next/image';
import icon_logo from '../../../public/Logo.svg';

const Logo: FC = () => {
  return (
    <Image
        width={169}
        height={33}
        alt="Logo"
        src={icon_logo}
    />
  )
}

export default Logo