import { useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate,useParams} from "react-router";

function Post(){
    let [post,setPost]=useState(null);
    let userData=useSelector((state)=>(state.userData));
    let navigate=useNavigate();
    let isAuthor= post && userData ? post.userId===userData.$id:false;
    useEffect(()=>{
        if(slug){
            
        }
    })
    return(
        <div className="">
            <img
            src={}></img>
        </div>
    )
}