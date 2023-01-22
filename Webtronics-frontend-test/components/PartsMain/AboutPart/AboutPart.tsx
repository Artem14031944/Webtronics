import { FC } from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import Title from '../../Title/Title';
import Mentors from './Mentors/Mentors';
import Front from './Front/Front';
import icon_star from '../../../public/Star_1.svg';
import style from './AboutPart.module.css';

const AboutPart: FC = () => {

  const images = [
    {id: 1, image: icon_star?.src, width: 35, height: 40, alt:'star', top: 20, left: 1250, right: 0, bottom: 0},
    {id: 2, image: icon_star?.src, width: 14, height: 17, alt:'star', top: 20, left: 880, right: 0, bottom: 0},
    {id: 3, image: icon_star?.src, width: 14, height: 17, alt:'star', top: 5, left: 615, right: 0, bottom: 0},
    {id: 4, image: icon_star?.src, width: 14, height: 17, alt:'star', top: 50, left: 200, right: 0, bottom: 0}, 
    {id: 5, image: icon_star?.src, width: 14, height: 17, alt:'star', top: 700, left: 970, right: 0, bottom: 0},  
  ];

  return (
    <Wrapper wrapperStyle={style.wrapper}>
      <Container>
        {images?.map((image) => <OnContainerImg key={image.id} props={image}/>)}
        <Title title={'About Us'}/>
        <div className={style.content}>
          <Mentors title={'Mentors'}/>
          <Front/>
        </div>
      </Container>
    </Wrapper>
  )
};

export default AboutPart;