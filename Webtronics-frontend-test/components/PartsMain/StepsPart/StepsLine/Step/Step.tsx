import { FC } from 'react';
import style from './Step.module.css';

interface Istep {
  props: {
    id: number;
    step: string;
    title: string;
    text: string;
  }
}

const Step: FC<Istep> = ({ props }) => {
  return (
    <div className={props.id  % 2 ?  style.stepLeft : style.stepRight}>
      <div className={props.id  % 2 ?  style.outBorderRight : style.outBorderLeft}>
        <div className={style.inBorder}>
          <div className={style.content}>
            <div className={style.step}>{props.step}</div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.text}>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Step;