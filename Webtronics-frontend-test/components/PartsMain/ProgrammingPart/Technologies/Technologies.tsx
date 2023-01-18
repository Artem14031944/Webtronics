import { FC } from 'react';
import Container from '../../../Container/Container';
import CardProgramming from './CardProgramming/CardProgramming';
import icon_angular from '../../../../public/angular.svg';
import icon_react from '../../../../public/react.svg';
import icon_vue from '../../../../public/vue.svg';
import icon_js from '../../../../public/js.svg';
import style from './Technologies.module.css';

const Technologies: FC = () => {

  const technologies = [
    {id: 1, name: 'Angular', image: icon_angular.src},
    {id: 2, name: 'React', image: icon_react.src},
    {id: 3, name: 'Vue.js', image: icon_vue.src},
    {id: 4, name: 'JavaScript', image: icon_js.src},
  ];

  return (
    <Container containerStyle={style.container}>
        {technologies?.map((technologi) => <CardProgramming key={technologi.id} props={technologi}/>)}
    </Container>
  )
}

export default Technologies;