import { FC } from 'react';
import Container from '../../Container/Container';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import Title from '../../Title/Title';
import Mentors from './Mentors/Mentors';
import Front from './Front/Front';
import icon_star from '../../../public/Star_1.svg';
import style from './AboutPart.module.css';

const AboutPart: FC = () => {

  const stars = [
    {id: 1, image: icon_star?.src, width: 35, height: 40, alt:'star', top: 20, left: 1400, right: 0, bottom: 0},
    {id: 2, image: icon_star?.src, width: 14, height: 17, alt:'star', top: 20, left: 1000, right: 0, bottom: 0},
    {id: 3, image: icon_star?.src, width: 14, height: 17, alt:'star', top: 5, left: 770, right: 0, bottom: 0},
    {id: 4, image: icon_star?.src, width: 14, height: 17, alt:'star', top: 20, left: 400, right: 0, bottom: 0},
  ];

  return (
    <div className={style.wrapper}>
      <Container>
        {stars?.map((star) => <OnContainerImg key={star.id} props={star}/>)}
        <Title title={'About Us'}/>
        <div className={style.content}>
          <Mentors title={'Mentors'}/>
          <Front/>
        </div>
      </Container>
    </div>
  )
};

export default AboutPart;