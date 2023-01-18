import React from 'react'; 
import Wrapper from '../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import img_ray from '../../../public/point_1.png';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import TitleOne from './TitleOne/TitleOne';
import TitleTwo from './TitleTwo/TitleTwo';
import style from './FacePart.module.css';

const FacePart = () => {

  const rays = [
    {id: 1, image: img_ray?.src, width: 250, height: 300, alt:'ray', top: 400, left: 1180, right: 0, bottom: 0},
    {id: 2, image: img_ray?.src, width: 450, height: 450, alt:'ray', top: 310, left: 150, right: 0, bottom: 0},
  ];

  return (
    <Wrapper wrapperStyle={style.wrapper}>
      <Container containerStyle={style.container}>
        {rays?.map((ray) => <OnContainerImg key={ray.id} props={ray}/>)}
        <TitleOne/>
        <TitleTwo/>
      </Container>
      <div className={style.blur}/>
    </Wrapper>
  )
};

export default FacePart;