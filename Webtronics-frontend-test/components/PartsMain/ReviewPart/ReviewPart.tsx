import { FC } from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import Slider from './Slider/Slider';
import style from './ReviewPart.module.css';

const ReviewPart: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title  title='Review' titleStyle={style.title}/>
        <Slider/>
      </Container>
    </Wrapper>
  )
};

export default ReviewPart;