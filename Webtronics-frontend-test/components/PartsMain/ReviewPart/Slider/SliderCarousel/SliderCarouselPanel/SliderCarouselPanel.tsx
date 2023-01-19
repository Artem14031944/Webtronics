import { FC } from 'react';
import Image from 'next/image';
import icon_arrow_right from '../../../../../../public/arrowSliderRight.svg';
import icon_arrow_left from '../../../../../../public/arrowSliderLeft.svg';
import style from './SliderCarouselPanel.module.css';

const SliderCarouselPanel: FC = () => {
  return (
    <div className={style.slider}>
      <div className={style.header}>
        <p className={style.current}>1/3</p>
        <div className={style.buttons}>
          <button className={style.button}>
            <Image
              src={icon_arrow_left}
              alt="left"
              width={40}
              height={40}
            />
          </button>
            <button className={style.button}>
              <Image
                src={icon_arrow_right}
                alt="left"
                width={40}
                height={40}
              />
            </button>
        </div>
      </div>
    </div>
  )
};

export default SliderCarouselPanel;