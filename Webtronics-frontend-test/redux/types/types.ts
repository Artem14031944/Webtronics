export const SLIDER_VALUE = "SLIDER_VALUE";
export const SLIDER_DATA = "SLIDER_DATA";


export interface IsliderValue {
    type: typeof SLIDER_VALUE
    sliderValue: number
};

export interface IsliderData {
    type: typeof SLIDER_DATA
    sliderData: []
};

export interface IitemSliderData {
    id: number;
    imgBig: string;
    imgSmall: string;
    title: string;
    text: string;
}


export interface StoreState {
    sliderValue: number;
    sliderData: IitemSliderData[];
};


export type ProjectActionTypes =
  | IsliderValue
  | IsliderData
 