import { FC } from 'react';
import Wrapper from './../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import GalleryMosaic from './GalleryMosaic/GalleryMosaic';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import img_ray from '../../../public/point_1.png';
import icon_star from '../../../public/Star_1.svg';
import style from './GalleryPart.module.css';

const GalleryPart: FC = () => {

  const images = [ 
    {id: 1, image: icon_star?.src, width: 35, height: 40, alt:'star', top: 0, left: 350, right: 0, bottom: 0}, 
    {id: 2, image: icon_star?.src, width: 14, height: 14, alt:'star', top: 900, left: 380, right: 0, bottom: 0}, 
    {id: 3, image: icon_star?.src, width: 24, height: 24, alt:'star', top: 620, left: 1080, right: 0, bottom: 0}, 
    {id: 4, image: icon_star?.src, width: 14, height: 14, alt:'star', top: 860, left: 800, right: 0, bottom: 0}, 
    {id: 5, image: img_ray?.src, width: 550, height: 450, alt:'ray', top: 500, left: 0, right: 0, bottom: 0}, 
  ];

  return (
    <Wrapper wrapperStyle={style.wrapper}>
      {images.map((image) => <OnContainerImg key={image.id} props={image}/>)}
      <Container>
        <Title title='Gallery'/>
        <GalleryMosaic/>
      </Container>
    </Wrapper>
  )
}

export default GalleryPart