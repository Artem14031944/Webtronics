import { FC } from 'react';
import Wrapper from './../../Wrapper/Wrapper';
import Container from '../../Container/Container';
import Title from '../../Title/Title';
import Question from './Question/Question';
import QuestionAccordion from './QuestionAccordion/QuestionAccordion';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import img_ray from '../../../public/point_1.png';
import icon_star from '../../../public/Star_1.svg';
import icon_question from '../../../public/qustion.svg';
import style from './AskedPart.module.css';

const AskedPart: FC = () => {

  const images = [ 
    {id: 1, image: icon_star?.src, width: 20, height: 20, alt:'star', top: 620, left: 250, right: 0, bottom: 0}, 
    {id: 2, image: icon_star?.src, width: 14, height: 14, alt:'star', top: 720, left: 1250, right: 0, bottom: 0},  
    {id: 3, image: img_ray?.src, width: 550, height: 450, alt:'ray', top: 500, left: 100, right: 0, bottom: 0}, 
    {id: 4, image: icon_question?.src, width: 1850, height: 1850, alt:'ray', top: -500, left: -300, right: 0, bottom: 0}, 
  ];

  return (
    <Wrapper wrapperStyle={style.wrapper}>
      {images.map((image) => <OnContainerImg key={image.id} props={image}/>)}
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