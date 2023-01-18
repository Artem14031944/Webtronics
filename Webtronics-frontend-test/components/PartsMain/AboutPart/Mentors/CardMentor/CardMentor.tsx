import { FC } from 'react';
import Image from 'next/image';
import style from './CardMentor.module.css';

interface IcardMentor {
  id?: number;
  img: string;
  name: string;
  about: string;
}

const CardMentor: FC<IcardMentor> = ({ id, img, name, about}) => {
  return (
    <div className={ id === 2 ? style.cardTop : style.card}>
      <div className={style.img}>
        <Image
          src={img}
          alt={name}
          width={184}
          height={184}
        />
      </div>
       <div className={style.info}>
          <h4 className={style.name}>{name}</h4>
          <p className={style.about}>{about}</p>
       </div>
    </div>
  )
};

export default CardMentor;