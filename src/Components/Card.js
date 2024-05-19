import storageService from "../appwrite/storage";
import { useEffect,useState } from "react";
import {Link} from "react-router-dom";
function Card({data}){
    let [imageSrc,setImageSrc]=useState("");
    let [time,setTime]=useState({unit:"",value:""});
    useEffect(()=>{
        storageService.getFilePreview({fileId:data.featuredImageId,height:"230",width:"0"})
        .then((response)=>{
            setImageSrc(response);
        })
        .catch((error)=>{
            setImageSrc(null);
        })

    },[data])
    useEffect(()=>{
        let currentTime=new Date();
        let prev=new Date(data.$createdAt);
        let seconds=(Math.floor((currentTime-prev)/1000));
        let minutes=(Math.floor((seconds)/60));
        let hours=(Math.floor((minutes)/60));

        if(seconds>0 && seconds<60){
            setTime({unit:"seconds",value:seconds})
        }
        else if(minutes>0 && minutes<60){
            setTime({unit:"minutes",value:minutes})
        }
        else if(hours<=24){
            setTime({unit:"hours",value:hours})
        }
        else{
            setTime({unit:"days",value:Math.floor(hours/24)})
        }
        
        
    },[data])
    return(
            <Link to={`/post/${data.$id}`} className="w-fit h-fit duration-200 active:bg-slate-900/5 m-5">
             <div className="h-60 w-96 border-2 ease-in-out duration-100 hover:rounded-none overflow-hidden flex justify-center items-center rounded-xl">
              {data.featuredImageId ? 
                <img className="" src={imageSrc} alt="preview"></img> :
                <div className="h-full w-full bg-gray-200"></div>
                }
             </div>
                <h1 className="text-xl pb-1 pt-2 px-3">{data.title[0].toUpperCase()+data.title.slice(1)}</h1>
                <div className="flex justify-start items-center gap-5 px-3">
                   <h1 className="">Views</h1>
                   <h1 className="">{time.value} {time.unit} ago</h1>
                </div>
            </Link>
    )
}
export default Card;