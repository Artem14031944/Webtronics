import { FC } from 'react';
import OnContainerImg, { Iprops } from '../../../../OnContainerImg/OnContainerImg';
import icon_arrow_left from '../../../../../public/lineLeftStep.svg';
import icon_arrow_right from '../../../../../public/lineRightStep.svg';
import style from './Line.module.css';

const Line: FC = () => {

  const points = [
    {id: 1, image: icon_arrow_right?.src, width: 100, height: 24, alt:'point', top: -5, left: 0, right: 0, bottom: 0},
    {id: 2, image: icon_arrow_left?.src, width: 100, height: 24, alt:'point', top: 140, left: 78, right: 0, bottom: 0},
    {id: 3, image: icon_arrow_right?.src, width: 100, height: 24, alt:'point', top: 360, left: 0, right: 0, bottom: 0},
    {id: 4, image: icon_arrow_left?.src, width: 100, height: 24, alt:'point', top: 505, left: 78, right: 0, bottom: 0}, 
    {id: 5, image: icon_arrow_right?.src, width: 100, height: 24, alt:'point', top: 725, left: 0, right: 0, bottom: 0},  
    {id: 6, image: icon_arrow_left?.src, width: 100, height: 24, alt:'point', top: 870, left: 78, right: 0, bottom: 0},  
  ];
  return (
    <div className={style.line}>
      {points?.map((point) => <OnContainerImg key={point.id} props={point}/>)}
    </div>
  )
};

export default Line;