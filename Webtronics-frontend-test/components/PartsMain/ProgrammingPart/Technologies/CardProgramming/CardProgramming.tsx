import { FC } from 'react';
import Image from 'next/image';
import style from './CardProgramming.module.css';

interface Iprops{
  props: {
    id?: number;
    image: string;
    name: string;
  }
}

const CardProgramming: FC<Iprops> = ({ props }) => {
  return (
    <div>
      <div className={style.card}>
        <Image
          src={props.image}
          alt={props.name}
          width={162}
          height={136}
        />
        <h3 className={style.title}>{props.name}</h3>
      </div>
      <div className={style.downCard}></div>
    </div>
  )
};

export default CardProgramming;