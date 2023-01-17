import { FC } from 'react';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import Mentors from './Mentors/Mentors';
import Front from './Front/Front';
import icon_star from '../../../public/Star_1.svg';
import style from './AboutPart.module.css';

const AboutPart: FC = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <OnContainerImg
                image={icon_star?.src}
                width={35}
                height={40}
                alt="ray"
                top={20}
                left={1400}
                right={0}
                bottom={0}
            />
            <OnContainerImg
                image={icon_star?.src}
                width={14}
                height={17}
                alt="ray"
                top={20}
                left={1000}
                right={0}
                bottom={0}
            />
            <OnContainerImg
                image={icon_star?.src}
                width={14}
                height={17}
                alt="ray"
                top={5}
                left={770}
                right={0}
                bottom={0}
            />
            <OnContainerImg
                image={icon_star?.src}
                width={14}
                height={17}
                alt="ray"
                top={20}
                left={400}
                right={0}
                bottom={0}
            />
            <h2 className={style.title}>About Us</h2>
            <div className={style.content}>
                <Mentors title={'Mentors'}/>
                <Front/>
            </div>
        </div>
    </div>
  )
};

export default AboutPart;