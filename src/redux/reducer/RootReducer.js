import { combineReducers } from "redux";
import DataReducer from './DataReducer'
import BtnReducer from './BtnReducer'
import SingleUserDataReducer from './SingleUserDataReducer'
import DisplayReducer from './DisplayReducer'



const RootReducer = combineReducers({
    DataReducer : DataReducer,
    BtnReducer : BtnReducer,
    SingleUserDataReducer : SingleUserDataReducer,
    DisplayReducer: DisplayReducer
})


export default RootReducer;