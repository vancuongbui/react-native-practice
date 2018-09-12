import { 
    GET_TEXT_INPUT, 
    CREATE_DATA_ARRAY, 
    DELETE_ITEM,
    SELECTED_ITEM,
    UN_SELECTED_ITEM,
} from './actionTypes';

export const getInputData = (text) => {
    return {
        type: GET_TEXT_INPUT,
        textInput: text,
    };
};

export const addDataToArray = (data) => {   //adding data, so we need arguement = data
    return {
        type: CREATE_DATA_ARRAY,
        text: data,                     // payload will be passed to reducer in this case for update state
    };
};

export const deleteItemAction = () => {   //we dont need arguement for delete, we used selectedItem
    return {
        type: DELETE_ITEM,
        // no payload since reducer will just need to delete the selectedItem.
    }
}

export const selectedItemAction = (Key) => {    //
    return {
        type: SELECTED_ITEM,
        selectedKey: Key,   //selected key is a state, so it has to be passed to reducer.
    };
};

export const deselectedItemAction = () => {
    return {
        type: UN_SELECTED_ITEM, 
        // no payload since the reducer is just set it to null
    }
}