import { FC } from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import Container from './../../Container/Container';
import Title from '../../Title/Title';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import img_ray from '../../../public/point_1.png';
import icon_star from '../../../public/Star_1.svg';
import style from './ProgrammingPart.module.css';

const ProgrammingPart = () => {

  const images = [ 
    {id: 1, image: icon_star?.src, width: 35, height: 40, alt:'star', top: 15, left: 10, right: 0, bottom: 0}, 
    {id: 2, image: img_ray?.src, width: 350, height: 350, alt:'ray', top: 12, left: 20, right: 0, bottom: 0}, 
  ];

  return (
    <Wrapper>
        <Container>
            {images.map((image) => <OnContainerImg key={image.id} props={image}/>)}
            <Title titleStyle={style.title} title={'Programming technologies'}/>
            <p className={style.text}>
                By the end, you’ll have the portfolio and interview 
                skills you need to start your new career.
            </p>
        </Container>
    </Wrapper>
  )
};

export default ProgrammingPart;