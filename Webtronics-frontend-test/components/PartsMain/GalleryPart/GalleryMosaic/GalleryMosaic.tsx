import { FC } from 'react';
import GalleryMosaicOne from './GalleryMosaicOne/GalleryMosaicOne';
import GalleryMosaicTwo from './GalleryMosaicTwo/GalleryMosaicTwo';
import style from './GalleryMosaic.module.css';

const GalleryMosaic: FC = () => {
  return (
    <div className={style.container}>
      <GalleryMosaicOne/>
      <GalleryMosaicTwo/>
    </div>
  )
};

export default GalleryMosaic