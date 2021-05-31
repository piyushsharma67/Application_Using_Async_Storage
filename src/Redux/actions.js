const signUp=(data)=>{
    return {
        type:"SIGNUP",
        payload:data
    }
}


export const SignUpDetails=(signUpDetails)=>{
    return (dispatch)=>{
        dispatch(signUp(signUpDetails))
    }
}


const login=(data)=>{
    return {
        type:"LOGIN",
    }
}

export const UserLoggedIn=()=>{
    return (dispatch)=>{
        dispatch(login())
    }
}

const reset=()=>{
    return {
        type:"HARD_RESET",
    }
}

export const ResetFunc=()=>{
    return (dispatch)=>{
        dispatch(reset())
    }
}