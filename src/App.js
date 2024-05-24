import Header from "./Components/Header";

import {Outlet} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeContext"
import { useState,useEffect} from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login,logout } from "./features/authSlice";

function App() {
   let [themeMode,setThemeMode]=useState("light");
   let [loading,setLoading]=useState(true);
   let dispatch=useDispatch();
   function lightTheme(){
      setThemeMode("light");
   }
   function darkTheme(){
      setThemeMode("dark");
   }
   useEffect(()=>{
      let getUser=async ()=>{
         try{
           let session=await authService.getSession('current');
           if(session){
           let response=await authService.getCurrentUser();
           if(response){
              dispatch(login(response));
           }
         }
           else{
              dispatch(logout());
           }
         }
         finally{
           setLoading(false);
         }
      }
      getUser();
   },[dispatch])
   useEffect(()=>{
      document.querySelector("html").classList.remove("light","dark");
      document.querySelector("html").classList.add(themeMode);
   },[themeMode])
   return loading ?
           (
            <div className="w-full h-lvh flex justify-center items-center">
            <h1 className="animate-bounce text-blue-400 text-4xl font-bold">
              Loading ...
            </h1>
            </div>
         ) :
         (<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
          <div className={`flex flex-col dark:bg-slate-800 ${themeMode==="dark" && "text-white"}`}>
          <Header></Header>
          <Outlet></Outlet>
          </div>
         </ThemeProvider>
         );
   }

export default App;
