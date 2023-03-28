import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";

const USER_INITIAL_STATE = {
    userData : [] ,
    loading : false ,
    error : null
}
export const getUserData = createAsyncThunk("userData/getData" , async()=>{
   
    return  fetch('https://reqres.in/api/users?page=1')
    .then(res => res.json())
    .then(user => user.data)
    
})


const userSlice = createSlice({
    name : 'userData' ,
    initialState: USER_INITIAL_STATE ,
    extraReducers :{
        [getUserData.pending] : (state , action) =>{
         state.loading = true ;
        } ,
        [getUserData.fulfilled] : (state , action) =>{
         state.loading = false ;
         state.userData = action.payload
        } ,
        [getUserData.rejected] : (state , action) =>{
         state.loading = false ;
         state.error = action.payload
        }
        
    }

})

export const userReducer = userSlice.reducer ;