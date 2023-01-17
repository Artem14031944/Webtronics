import { FC } from 'react';
import Image from 'next/image';
import OnContainerImg from '../../../OnContainerImg/OnContainerImg';
import icon_front from '../../../../public/FrontBigWord.svg';
import icon_star from '../../../../public/Star_1.svg';
import style from './Front.module.css';

const Front: FC = () => {
  return (
    <div className={style.container}>
         <OnContainerImg
            image={icon_star?.src}
            width={11}
            height={13}
            alt="ray"
            top={460}
            left={980}
            right={0}
            bottom={0}
          />
        <p className={style.text}>
            Front-end engineers work closely with designers to make websites beautiful, 
            functional, and fast. This Career Path will teach you not only the necessary 
            languages and technologies, but how to think like a front-end engineer, too.
        </p>
        <Image
            alt='Front'
            src={icon_front}
            width={757}
            height={185}
        />
    </div>
  )
}

export default Front