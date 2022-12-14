import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { noteCreateReducer, noteListReducer,noteUpdateReducer } from "./reducers/notesReducers";
const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    noteList:noteListReducer,
    noteCreate:noteCreateReducer,
    noteUpdate:noteUpdateReducer,
});


const userInfoFromStorage=localStorage.getItem('userInfo')
                          ?JSON.parse(localStorage.getItem('userInfo'))
                            :null;

if(userInfoFromStorage){ console.log(userInfoFromStorage)}
else { console.log("Not found userInfo")}
const initialState={
  userLogin:{userInfo:userInfoFromStorage}
};
const middleware=[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;