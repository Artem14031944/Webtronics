import React from 'react';
import Wrapper from './../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import Question from './Question/Question';
import QuestionAccordion from './QuestionAccordion/QuestionAccordion';
import style from './AskedPart.module.css';

const AskedPart = () => {
  return (
    <Wrapper wrapperStyle={style.wrapper}>
      <Container>
        <Title 
          title={'Frequently Asked Questions'} 
          titleStyle={style.title}
        />
        <div className={style.content}>
          <Question/>
          <QuestionAccordion/>
        </div>
      </Container>
    </Wrapper>
  )
};

export default AskedPart;