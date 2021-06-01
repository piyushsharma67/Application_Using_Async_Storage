import { ActionSheetIOS } from 'react-native'
import {AuthInitialState} from './initialState'

export const AuthReducer=(state=AuthInitialState,action)=>{
    console.log("action.payload",action.payload)
    switch(action.type){
        case "SIGNUP":
            return {...state,name:action.payload.name,email:action.payload.email,password:action.payload.password,phone:action.payload.phone,isSignedUp:true}
        case "LOGIN":
            return {...state,isLoggedIn:true}
        case "HARD_RESET":
            return {state}
        default :
            return {state}
    }
}

