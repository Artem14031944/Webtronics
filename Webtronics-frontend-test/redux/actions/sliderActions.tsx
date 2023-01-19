import { SLIDER_VALUE  } from '../types/types';


export const changeSliderValueAC = (sliderValue: number) => {
    return {type: SLIDER_VALUE, sliderValue}
};
