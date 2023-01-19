import { SLIDER_VALUE, ProjectActionTypes, StoreState } from '../types/types';

const initialState: StoreState  = {
    sliderValue: 1,
};

const sliderReducer = (state = initialState, action: ProjectActionTypes) : StoreState => {
    switch (action.type) {
        case SLIDER_VALUE:
            return {
                ...state,
                sliderValue: action.sliderValue
            };
        default:
            return state;
    }
};


export default sliderReducer;
