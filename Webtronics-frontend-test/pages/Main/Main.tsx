import { FC } from 'react';
import FacePart from '../../components/PartsMain/FacePart/FacePart';
import AboutPart from '../../components/PartsMain/AboutPart/AboutPart';
import style from './Main.module.css';

const Main: FC = () => {
  return (
    <div className={style.main}>
      <FacePart/>
      <AboutPart/>
    </div>
  )
};

export default Main;