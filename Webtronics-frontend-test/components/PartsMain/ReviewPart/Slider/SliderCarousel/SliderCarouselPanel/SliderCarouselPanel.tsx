import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSliderValueAC } from '../../../../../../redux/actions/sliderActions';
import { RootState } from  '../../../../../../redux/store';
import Image from 'next/image';
import icon_arrow_right from '../../../../../../public/arrowSliderRight.svg';
import icon_arrow_left from '../../../../../../public/arrowSliderLeft.svg';
import style from './SliderCarouselPanel.module.css';

const SliderCarouselPanel: FC = () => {
  const dispatch = useDispatch();
  const { sliderValue, sliderData } = useSelector((data: RootState) => data.sliderReducer);

  useEffect(() => {
    if(sliderValue > 3) {
      dispatch(changeSliderValueAC(1));
    } else if (sliderValue < 1) {
      dispatch(changeSliderValueAC(3));
    }
  }, [sliderValue]);


  const prevSlider = () => {
    dispatch(changeSliderValueAC(sliderValue - 1))
  };

  const nextSlider = () => {
    dispatch(changeSliderValueAC(sliderValue + 1))
  };

  return (
    <div className={style.slider}>
      <div className={style.header}>
        <p className={style.current}>{sliderValue}/<sup> {sliderData.length}</sup></p>
        <div className={style.buttons}>
          <button
            onClick={prevSlider} 
            className={style.button}
          >
            <Image
              src={icon_arrow_left}
              alt="left"
              width={40}
              height={40}
            />
          </button>
          <button 
            className={style.button}
            onClick={nextSlider} 
          >
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