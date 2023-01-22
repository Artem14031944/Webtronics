import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from  '../../../../../redux/store';
import { IitemSliderData } from '../../../../../redux/types/types';
import style from './SliderText.module.css';


const SliderText: FC = () => {

  const { sliderValue, sliderData } = useSelector((data: RootState) => data.sliderReducer);
 
  return (
    <div className={style.container}>
      {sliderData
      ?.filter((item: IitemSliderData) => item.id === sliderValue)
      ?.map((item: IitemSliderData) => (
        <div key={item.id}>
          <h3 className={style.title}>{item.title}</h3>
          <p className={style.text}>{item.text}</p>
        </div>
      ))}
    </div>
  )
};

export default SliderText;