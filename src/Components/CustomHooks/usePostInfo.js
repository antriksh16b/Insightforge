import { useEffect, useState } from "react";
import databaseService from "../../appwrite/database";
import { Query } from "appwrite";

function usePostInfo({userId,page}){
    let [data,setData]=useState([]);
    let [complete,setComplete]=useState(false);
    useEffect(()=>{
        let getPosts=async()=>{
            let queries=[];
            console.log("Namaste "+ page);
            if(page===1){
                setData([]);
                queries=[Query.equal("userId",[userId]),Query.limit(9)];
            }
            else{

                if(data.length>0){
                queries=[Query.equal("userId",[userId]),Query.limit(9),Query.cursorAfter(data[data.length-1].$id)];
                }
            }
            try{
            let response= await databaseService.getAllPosts({queries:queries});
            if(response.documents.length===0){
                 setComplete(true);
            }
            if(response!=null){
                setData((prev)=>[...prev,...response.documents]);
            }
            }
            catch(error){
                throw error;
            }
            
        }

        getPosts();
    },[page,userId])
    return ({data,complete})
}

export default usePostInfo;
