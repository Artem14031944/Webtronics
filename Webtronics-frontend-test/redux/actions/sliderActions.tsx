import { 
    SLIDER_VALUE, 
    SLIDER_DATA, 
    IitemSliderData  
} from '../types/types';


export const changeSliderValueAC = (sliderValue: number) => {
    return {type: SLIDER_VALUE, sliderValue}
};

export const changeSliderDataAC = (sliderData: IitemSliderData[]) => {
    return {type: SLIDER_DATA, sliderData}
};
