import {createSlice} from "@reduxjs/toolkit"


const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLogin:null,
        msg:"",
        user:null
    },
    reducers:{
        authProcess:function(state,action) // action for payloads/user input
        {
            const dbEmail="admin@gmail.com"
            const dbPassword="admin@123"
            const {email,password}=action.payload
            if(dbEmail===email.trim() && dbPassword===password.trim())
            {
                state.isLogin=true
                state.msg="Login Successfull"
                state.user={email,password}
            }
            else
                {
                    state.isLogin=false
                    state.msg="Login Failed"
                    state.user=null
            }
           
            
        },
        register:function(state,action)
        {

        },
        logout:function(state,action)
        {
                    state.isLogin=false
                    state.msg="logout successfull"
                    state.user=null
        }
    }
})


export const {authProcess,register,logout}=authSlice.actions
export default authSlice.reducer  // reducer export 