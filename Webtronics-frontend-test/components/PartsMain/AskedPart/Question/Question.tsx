import { FC } from 'react';
import style from './Question.module.css';

const Question: FC = () => {
  return (
    <div className={style.questionBlock}>
      <p className={style.text}>
        Do you have any kind of questions?<br/> 
        We are here to help.
      </p>
    </div>
  )
};

export default Question;