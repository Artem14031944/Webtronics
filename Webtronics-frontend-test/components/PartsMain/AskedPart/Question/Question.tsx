import { FC } from 'react';
import Image from 'next/image';
import icon_question from '../../../../public/qustion.svg';
import style from './Question.module.css';

const Question: FC = () => {
  return (
    <div className={style.questionBlock}>
      <p className={style.text}>
        Do you have any kind of questions?<br/> 
        We are here to help.
      </p>
        <Image
          src={icon_question}
          alt={'question'}
          width={344}
          height={405}
        />
    </div>
  )
};

export default Question;