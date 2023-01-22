import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from  '../../../../../../redux/store';
import { IitemSliderData } from '../../../../../../redux/types/types';
import Image from 'next/dist/client/image';
import style from './SliderPhoto.module.css'

const SliderPhoto: FC = () => {
  
  const { sliderValue, sliderData } = useSelector((data: RootState) => data.sliderReducer);

  return (
    <div className={style.container}>
      {sliderData
      ?.filter((item: IitemSliderData) => item.id === sliderValue)
      ?.map((item: IitemSliderData) => (
        <div className={style.img_big} key={item.id}>
          <Image 
            src={item.imgBig}
            alt={'person'}
            width={392}
            height={422}
          /> 
        </div>       
      ))}
      {sliderData
      ?.filter((item: IitemSliderData) => item.id !== sliderValue)
      ?.map((item: IitemSliderData) => (
        <div className={style.img_small} key={item.id}>
          <Image 
            src={item.imgSmall}
            alt={'person'}
            width={182}
            height={422}
          /> 
        </div>       
      ))}
    </div>
  )
};

export default SliderPhoto;