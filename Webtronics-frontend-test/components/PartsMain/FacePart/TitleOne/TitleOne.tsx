import { FC } from 'react';
import style from './TitleOne.module.css';

const TitleOne: FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Front-End</h2>
      <p className={style.text}>
        Make UIs and websites beautiful, functional, and fast. 
        Cover all the topics that expensive bootcamps teach (and more). 
      </p>
    </div>
  )
};

export default TitleOne;