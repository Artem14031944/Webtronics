import { FC } from 'react';
import Wrapper from './../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import Form from './Form/Form';
import style from './FormPart.module.css';

const FormPart: FC = () => {
  return (
    <Wrapper wrapperStyle={style.wrapper}>
      <Container containerStyle={style.container}>
        <Title  title='Contact  us' titleStyle={style.title}/>
        <p className={style.text}>Do you have any kind of help please contact with us.</p>
        <Form/>
      </Container>
    </Wrapper>
  )
};

export default FormPart;