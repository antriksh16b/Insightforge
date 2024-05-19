import React, { useState } from 'react';
import Modal from './Modal';
import Input from './Input';
import {login as authLogin} from "../features/authSlice";
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";

export default function Login() {
  let navigate=useNavigate();
  let dispatch=useDispatch();
  let [fetchError,setFetchError]=useState("");
  let {register,handleSubmit}=useForm();
  async function login(data){
        console.log(data);
        let userData=await authService.login(data);
        if(userData){
          dispatch(authLogin(userData));
          navigate("/");
        }
  }
  return (
    <Modal text={{
      h1:"Sign in to your account",
      link:"Don't have an account? Sign up",
      button:"Sign in",
      to:"/signup"
      }}
      handleSubmit={handleSubmit(login)}
      fetchError={fetchError}
      >

        <Input type="email" label="Email" {...register("email")}/>
        <Input type="password" label="Password" {...register("password")}/>
    </Modal>
  )
}
