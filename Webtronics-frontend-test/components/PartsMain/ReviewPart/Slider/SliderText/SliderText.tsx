import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from  '../../../../../redux/store'
import style from './SliderText.module.css';



const SliderText: FC = () => {

  const { sliderValue } = useSelector((data: RootState) => data.sliderReducer);

  console.log(sliderValue, 'sliderValue')

  return (
    <div>SliderText</div>
  )
}

export default SliderText;