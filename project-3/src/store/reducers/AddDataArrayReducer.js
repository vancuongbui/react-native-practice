import { 
    CREATE_DATA_ARRAY, 
    SELECT_ITEM_OF_ARRAY,
    SELECTED_ITEM,
    DELETE_ITEM,
    UN_SELECTED_ITEM
 } from '../actions/actionTypes';

const INIT_STATE = {
    dataArray: [],
    // text: '',
    // key: '1',
    // status: 'play',
    selectedItem: null,
};

export default (state=INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_DATA_ARRAY:
            return {
                ...state,
                dataArray: state.dataArray.concat({
                    text: action.text,
                    key: (Math.floor(Math.random()*10000)).toString(),
                    status: 'play',
                }),
            }
        case DELETE_ITEM:
            return {
                ...state,   //load previous state, then update new state by deleting one, selected item
                dataArray: state.dataArray.filter(item => {
                    return item.key !== state.selectedItem.key;
                    //filter out the item with the key match with selected key, return the rest of the array.
                }),
                selectedItem: null  //this state was deleted above, so it will be null now
            };
        
        case SELECTED_ITEM:
            return {
                ...state,
                selectedItem: state.dataArray.find(item => {
                    return item.key === action.selectedKey;
                }),
            };
        case UN_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: null,
            }
        default:
            return state;
    }
}