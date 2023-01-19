import { FC } from 'react';
import SliderText from './SliderText/SliderText';
import SliderCarousel from './SliderCarousel/SliderCarousel';
import style from './Slider.module.css';

const Slider: FC = () => {
  return (
    <div className={style.container}>
      <SliderText/>
      <SliderCarousel/>
    </div>
  )
};

export default Slider;