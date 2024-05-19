import { logout } from "../features/authSlice";
import authService from "../appwrite/auth";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
function LogoutButton(){
    let dispatch=useDispatch();
    let userData=useSelector(state=>state.userData);
    function handleLogout(){
            authService.logout('current').then(()=>{
            dispatch(logout());              //logout after the authService logout is successful
        })
    }
    return(
        <Link to="/" onClick={handleLogout}
            className="hover:bg-blue-200 re p-2 px-1 sm:px-3 rounded-lg active:animate-bounce border border-blue-300 text-white bg-blue-950">
                Logout
        </Link>
    )
}

export default LogoutButton;