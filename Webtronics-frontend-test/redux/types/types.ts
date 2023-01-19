export const SLIDER_VALUE = "SLIDER_VALUE";


export interface IsliderValue {
    type: typeof SLIDER_VALUE
    sliderValue: number
};

export interface StoreState {
    sliderValue: number;
};

export type ProjectActionTypes =
  | IsliderValue
 