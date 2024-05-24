import {useEffect,useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
function Protected({children,authentication=true}){
    let status=useSelector((state)=>(state.status));
    let navigate=useNavigate();
    let [loader,setLoader]=useState(true);
    useEffect(()=>{  
        if(authentication && status!==authentication){
            
            navigate('/login');
        }
        else if(!authentication && status!== authentication){
            
            navigate('/Insightforge');
        }
        setLoader(false);
    },[authentication,status,navigate]);
    return(
        loader ? (<h1>loading...</h1>) : (<>{children}</>)
    )
}

export default Protected;