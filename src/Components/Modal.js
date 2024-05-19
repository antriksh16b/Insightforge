import { NavLink } from "react-router-dom"; 
import useTheme from "../context/ThemeContext";
import Button from "./Button";
function Modal({text,...props}){
    let {themeMode}=useTheme();
    return(
    <div className={`w-full flex text-black justify-center bg-blue-100 p-4 ${themeMode==="dark" && " bg-transparent"}`}>
          <div className="flex max-w-lg w-full flex-col shadow-md rounded-lg p-10 gap-1 items-center bg-white">
              <h1 className="text-blue-500">{props.fetcherror && props.fetcherror}</h1>
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>
              <h1 className="font-bold text-lg sm:text-2xl">{text.h1}</h1>
              <NavLink to={text.to} className="hover:bg-blue-100 rounded-lg">{text.link}</NavLink>
              <form onSubmit={props.handleSubmit} className="flex flex-col w-full mt-5">
                 {props.children}
                 <Button type="submit">{text.button}</Button>
              </form>
          </div>
    </div>
    );
}
export default Modal;