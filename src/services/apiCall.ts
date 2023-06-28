import { Start , loginSuccess ,Failure,logout } from "../store/userRedux";
import {baseurl} from "../config";
import { Dispatch } from "redux";
import { AppDispatch , useAppDispatch} from '../store/store'

type user = { 
   _id?:number
    username: string
    email?: string
    password:string
    accessToken?:string
}


export const login = async (dispatch:AppDispatch, user:user)=>{
    dispatch(Start());
    try{
        const res = await baseurl.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(Failure());
    }
};
export const registerUser = async (dispatch:Dispatch, user:user)=>{
    dispatch(Start());
    try{
        const res = await baseurl.post("/auth/register",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(Failure());
    }
};

export const Delete = async (dispatch:Dispatch, user:user)=>{
    
    try{
        const res = await baseurl.delete(`/user/`+user._id, {
            headers: {
                "Authorization" : `Bearer ${user.accessToken}`
            }
          });
          dispatch(logout());
        
    }catch(err){
        dispatch(Failure());  
    }
    
};


export const LogOut =  (dispatch:Dispatch)=>{
    dispatch(logout());
};