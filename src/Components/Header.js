import {Link,NavLink} from "react-router-dom";
import { useState,useEffect } from "react";
import useTheme from "../context/ThemeContext";
import {useSelector} from "react-redux";
import LogoutButton from "./LogoutButton";
import { Svg } from "../svgs/Svg";
import Button from "./Button";

function Header(){
    let [upScroll,setUpScroll]=useState(false);
    let [prevScroll,setPrevScroll]=useState(0);
    let {themeMode,lightTheme,darkTheme}=useTheme();
    let status=useSelector((state)=>(state.status));
    let arrayOfItems=[
        {
            name:"Home",
            slug:"/",
            authStatus:status,
            svg:Svg.Home
        },
        {
            name:"Profile",
            slug:"/profile",
            authStatus:!status,
            svg:Svg.Profile
        },
        {
            name:"All Posts",
            slug:"/allposts",
            authStatus:!status,
            svg:Svg.AllPosts
        },
        {
            name:"Create Post",
            slug:"/createpost",
            authStatus:!status,
            svg:Svg.CreatePost
        }
    ]
    function handleThemeMode(){
        if(themeMode==="light"){
            darkTheme();
        }
        else{
            lightTheme();
        }
    }
    useEffect(()=>{
        function handleScroll(){
        let currentScroll=window.scrollY;
        if(currentScroll>prevScroll && currentScroll>40){
            setUpScroll(true);
        }

        else{
            setUpScroll(false)
        }
        setPrevScroll(currentScroll);
    }
        window.addEventListener("scroll",handleScroll);
    return()=>{
        window.removeEventListener("scroll",handleScroll);
    }

},[prevScroll])
    return(
        <div className={`border p-4 bg-white border-white border-b sticky top-0 justify-between flex items-center z-50 py-5  ${themeMode==="dark" ? "text-white bg-slate-800":""}`}>
            <Link to="/" 
            className={`sm:text-4xl text-lg flex items-center text-blue-400 `}>
                <svg className="h-7 w-7 stroke-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="stroke-white" d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>
                <h1 className=" text-blue-950 font-semibold m-2">Insightsforge</h1>
            </Link>
            <div className="flex gap-12">
            <div className={`flex sm:gap-10 items-center`}>
              {arrayOfItems.map((currentValue)=>
                  (currentValue.authStatus===false && 
                  <NavLink key={currentValue.slug} to={currentValue.slug} 
                    className={({isActive,isPending})=>`p-2 px-3 rounded-full ${isActive ? "bg-blue-200":"bg-white"}`}>
                    {currentValue.name}
                  </NavLink>)
              )}
            </div>
            {status ?(<LogoutButton></LogoutButton>) :
               (<div><NavLink to="/login">
                <button 
                className="border-2 order-1 rounded-full border-transparent m-1 px-8 py-2 duration-150 active:border-blue-500 active:border-2 text-white bg-blue-950"
                >Login</button>
               </NavLink>
               <NavLink to="/signup">
                <button 
                className="border-2 order-1 rounded-full border-transparent m-1 px-8 py-2 duration-150 active:border-blue-500 active:border-2 text-white bg-blue-950"
                >Signup</button>
               </NavLink></div>)}
               </div>
        </div>
    )
}
export default Header;