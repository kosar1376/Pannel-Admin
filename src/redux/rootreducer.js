import {combineReducers} from 'redux'
import usersRedecer from './Users/Usersreducer';

const RootReducer=combineReducers({
   
    usersdata:usersRedecer

});



export default RootReducer;