import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../store/user/user';
import {AppDispatch, AppThunk} from '../store';

export const initialState = {
    loading: false,
    hasErrors: false,
    users: []
}

const usersSlice = createSlice({
name : "users",
initialState,
reducers: {
    addUser: (state, action) =>{
        state.users.unshift(action.payload);
    },
    startLoading: (state) =>{
        state.loading = true;
    },
    getUserSucess: (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.hasErrors = false;
    },
    getUserFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
    }
}
})


// Actions generated from the slice
const {
    addUser,
    startLoading,
    getUsersFailure,
    getUsersSuccess,
} = usersSlice.actions;

// export user selector to get the slice in any component
export const userSelector = (state) => state.users;
//export the reducer
const userReducer = usersSlice.reducer;
//Actions
export default fetchUsers = () => async(dispatch) => {
    try {
        dispatch(startLoading());
        const response = await fetch('api/fetchusers');
        const data = await response.json();
        dispatch(getUsersSuccess(data));
    }
    catch(error){
        dispatch(getUsersFailure());
    }
    };
    export const createUser = (user) => async (dispatch) => {
        try {
          dispatch(addUser(user));
        } catch (error) {
          dispatch(getUsersFailure());
        }
      };