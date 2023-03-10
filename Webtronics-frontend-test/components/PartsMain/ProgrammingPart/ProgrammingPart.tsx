import { FC } from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import Container from './../../Container/Container';
import Title from '../../Title/Title';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import Technologies from './Technologies/Technologies';
import img_ray from '../../../public/point_1.png';
import icon_star from '../../../public/Star_1.svg';
import style from './ProgrammingPart.module.css';

const ProgrammingPart = () => {

  const images = [ 
    {id: 1, image: icon_star?.src, width: 35, height: 40, alt:'star', top: 0, left: 1350, right: 0, bottom: 0}, 
    {id: 2, image: img_ray?.src, width: 450, height: 450, alt:'ray', top: 0, left: 1110, right: 0, bottom: 0}, 
    {id: 3, image: img_ray?.src, width: 550, height: 450, alt:'ray', top: 220, left: 100, right: 0, bottom: 0}, 
  ];

  return (
    <Wrapper wrapperStyle={style.wrapper}>
      {images.map((image) => <OnContainerImg key={image.id} props={image}/>)}
      <Container>
        <Title titleStyle={style.title} title={'Programming technologies'}/>
        <p className={style.text}>
          By the end, you’ll have the portfolio and interview 
          skills you need to start your new career.
        </p>
        <Technologies/>
      </Container>
    </Wrapper>
  )
};

export default ProgrammingPart;