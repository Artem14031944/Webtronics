import { 
    SLIDER_VALUE, 
    SLIDER_DATA,
    ProjectActionTypes, 
    StoreState
} from '../types/types';

const initialState: StoreState  = {
    sliderValue: 1,
    sliderData: [],
};

const sliderReducer = (state = initialState, action: ProjectActionTypes) : StoreState => {
    switch (action.type) {
        case SLIDER_VALUE:
            return {
                ...state,
                sliderValue: action.sliderValue
            };
        case SLIDER_DATA:
            return {
                ...state,
                sliderData: action.sliderData
            };
        default:
            return state;
    }
};


export default sliderReducer;
