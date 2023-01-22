import { FC } from 'react';
import Image from 'next/image';
import img_developer from '../../../../../public/mosaicOneBig.svg'
import style from './GalleryMosaicOne.module.css';

const GalleryMosaicOne: FC = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>
        By the end of this course, you will be able to develop and 
        publish your very own Google Chrome extension! 
        In this course we will focus on coding exercises and projects. 
      </p>
      <Image
        alt='developer'
        src={img_developer}
        width={288}
        height={434}
      />
    </div>
  )
};

export default GalleryMosaicOne;