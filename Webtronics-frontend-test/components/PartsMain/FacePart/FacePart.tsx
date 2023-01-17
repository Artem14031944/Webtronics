import React from 'react'; 
import img_ray from '../../../public/point_1.png';
import OnContainerImg from '../../OnContainerImg/OnContainerImg';
import TitleOne from './TitleOne/TitleOne';
import TitleTwo from './TitleTwo/TitleTwo';
import style from './FacePart.module.css';

const FacePart = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
          <OnContainerImg
            image={img_ray?.src}
            width={250}
            height={300}
            alt="ray"
            top={400}
            left={1180}
            right={0}
            bottom={0}
          />
           <OnContainerImg
            image={img_ray?.src}
            width={450}
            height={450}
            alt="ray"
            top={310}
            left={150}
            right={0}
            bottom={0}
          />
          <TitleOne/>
          <TitleTwo/>
          <p className={style.text}>Courses</p>
      </div>
    <div className={style.blur}/>
  </div>
  )
};

export default FacePart;