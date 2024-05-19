import Input from "./Input";
import Modal from "./Modal";
import authService from "../appwrite/auth";
import { useState } from "react";
import {useDispatch} from "react-redux";
function Signup(){
    let [fetcherror,setFetchError]=useState("");
    let dispatch=useDispatch();
    async function handleSubmit(event){
        event.preventDefault();
        let response=await authService.createAccount({
            email:event.target.elements.email.value,
            password:event.target.elements.password.value,
            name:event.target.elements.fullname.value
        })
        switch(response.code || response.status){
            case 400: setFetchError("Invalid request");
                       break;
            case 409: setFetchError("User Already existed");
                       break;
            default : setFetchError("");
        }
        };
    return(
        <Modal text={{ 
               h1:"Sign up to create account",
               link:"Already have an account? Sign in",
               button:"Create account",
               to:"/login"
              }} 
               handleSubmit={handleSubmit}
               fetcherror={fetcherror}>
            <Input type="text" label="Full Name" name="fullname"></Input>
            <Input type="email" label="Email" name="email"></Input>
            <Input type="password" label="Password" name="password"></Input>
         </Modal>
    )
}
export default Signup;