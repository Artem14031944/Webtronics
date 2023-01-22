import { FC } from 'react';
import Wrapper from './../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import GalleryMosaic from './GalleryMosaic/GalleryMosaic';
import style from './GalleryPart.module.css';

const GalleryPart: FC = () => {
  return (
    <Wrapper wrapperStyle={style.wrapper}>
      <Container>
        <Title title='Gallery'/>
        <GalleryMosaic/>
      </Container>
    </Wrapper>
  )
}

export default GalleryPart