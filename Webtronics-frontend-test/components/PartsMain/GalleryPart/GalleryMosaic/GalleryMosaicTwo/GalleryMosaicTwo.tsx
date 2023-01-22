import { FC } from 'react';
import GalleryMosaicTwoPhoto from './GalleryMosaicTwoPhoto/GalleryMosaicTwoPhoto';
import style from './GalleryMosaicTwo.module.css';

const GalleryMosaicTwo: FC = () => {
  return (
    <div className={style.container}>
      <GalleryMosaicTwoPhoto/>
      <p className={style.text}>
        If you would like to learn web development and get a job in the tech industry, 
        you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and
        more with over 15 hours of HD video tutorials! This course was designed to be 
        extremely beginner friendly. We will begin with the very basics of HTML and build
        a simple web page.
      </p>
    </div>
  )
};

export default GalleryMosaicTwo;