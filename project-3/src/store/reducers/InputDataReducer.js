import { GET_TEXT_INPUT } from '../actions/actionTypes';

const INIT_STATE = {
    textInput: '',
};

export default (state=INIT_STATE, action) => {
    switch (action.type) {
        case GET_TEXT_INPUT:
            return {
                ...state, 
                textInput: action.textInput,
            };
        default:
            return state;
    }
}