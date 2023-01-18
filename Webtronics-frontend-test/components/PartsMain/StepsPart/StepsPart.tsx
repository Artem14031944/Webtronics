import { FC } from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import StepsLine from './StepsLine/StepsLine';
import style from './StepsPart.module.css';

const StepsPart: FC = () => {
  return (
    <Wrapper wrapperStyle={style.wrapper}>
      <Container>
        <Title title={"Steps"}/>
        <StepsLine/>
      </Container>
    </Wrapper>
  )
};

export default StepsPart;