import { FC } from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import StepsLine from './StepsLine/StepsLine';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import img_ray from '../../../public/point_1.png';
import icon_star from '../../../public/Star_1.svg';
import style from './StepsPart.module.css';

const StepsPart: FC = () => {

  const images = [ 
    {id: 1, image: icon_star?.src, width: 35, height: 40, alt:'star', top: 0, left: 1350, right: 0, bottom: 0}, 
    {id: 2, image: icon_star?.src, width: 14, height: 14, alt:'star', top: 620, left: 1050, right: 0, bottom: 0}, 
    {id: 3, image: icon_star?.src, width: 24, height: 24, alt:'star', top: 470, left: 1460, right: 0, bottom: 0}, 
    {id: 4, image: icon_star?.src, width: 14, height: 14, alt:'star', top: 860, left: 1340, right: 0, bottom: 0}, 
    {id: 5, image: icon_star?.src, width: 14, height: 14, alt:'star', top: 440, left: 300, right: 0, bottom: 0}, 
    {id: 6, image: img_ray?.src, width: 550, height: 450, alt:'ray', top: 250, left: 100, right: 0, bottom: 0}, 
  ];

  return (
    <Wrapper wrapperStyle={style.wrapper}>
      {images.map((image) => <OnContainerImg key={image.id} props={image}/>)}
      <Container>
        <Title title={"Steps"}/>
        <StepsLine/>
      </Container>
    </Wrapper>
  )
};

export default StepsPart;