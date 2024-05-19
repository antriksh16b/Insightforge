import {useForm} from "react-hook-form";
import { useEffect,useCallback } from "react";
import { useSelector } from "react-redux";
import {Input,Button,RealTimeEditor,Select} from "../index";
import storageService from "../../appwrite/storage";
import databaseService from "../../appwrite/database";
import {useNavigate} from "react-router";

function PostForm({post}){
    const userData=useSelector(state=>(state.userData));
    const navigate=useNavigate();
    const {register,handleSubmit,watch,control,setValue,getValue}=useForm({
        defaultValues:{
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active",
        }  
    })
    
    async function submit(data){
            if(post){
                  const file=data.featuredImage[0] ? await storageService.uploadImage("data.image"): null
                  if(file){
                        databaseService.deletePost(post.featuredImage);
                  }
                  const dbPost=await databaseService.updatePost(post.$id,{
                    ...data,featuredImage:file ? file.$id:undefined
                  })
                  if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                  }
            }
            else{
                const file=data.image[0] ? await storageService.uploadImage(data.image[0]): null;
                if(file){
                      const fileId=file.$id;
                      data.featuredImageId=fileId;
                }
                const dbPost=databaseService.addPost({
                    ...data,
                    userId:userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
    }

    let slugTransform=useCallback((value)=>{
            if(value && typeof value  === 'string'){
                 return value
                     .trim()
                     .toLowerCase()
                     .replace(/[\s]+/g,"-")
            }
    },[]);

    useEffect(()=>{
        let subscription=watch((value,{name})=>{
            if(name==='title'){
                setValue('slug',slugTransform(value.title),{shouldValidate:true});
            }
        })
        return ()=>{
            subscription.unsubscribe();
        }
    },[watch,slugTransform,setValue])

    return(
        <div className="flex flex-col items-center p-4 w-full">
        <h1 className="text-5xl font-bold">Create Post</h1>
        <form onSubmit={handleSubmit(submit)} className="w-full flex-col justify-between p-12">
        <div className="flex">
        <div className="w-full max-w-4xl flex flex-col gap-5">
            <Input type="text" name="title" label="Title" className="shadow-none font-medium mx-3 max-w-sm border-b-2 border-blue-500 rounded-none outline-none" {...register('title',{ required:true})}
            ></Input>
            <Input type="text" onInput={(e)=>{setValue('slug',slugTransform(e.currentTarget.value),{shouldValidate:true})}} name="slug" label="Slug" className="shadow-none font-medium mx-3 max-w-sm border-b-2 border-blue-500 rounded-none outline-none" {...register('slug')}
            ></Input>
        </div>
        <div className="flex flex-col gap-5 border-2 p-5 h-fit">
            <Input type="file" name="image" label="Featured Image" accept="image/png,image/jpg,image/jpeg,image/gif" className="shadow-none font-medium w-full max-w-sm border-b-2 border-blue-500 rounded-none outline-none" {...register('image')}
            ></Input>
            {post && <div className="">
                <img src={storageService.getFilePreview(post.featuredImage)}
                alt={post.title}></img>
            </div>}
            <Select options={["active","inactive"]} label="Status" className="shadow-none mt-3 font-medium mb-10 w-full max-w-sm border-b-2 border-blue-500 rounded-none outline-none" {...register('status')}
            ></Select>
            <Button type="submit" className="font-medium">Publish</Button>
        </div>
        </div>
        <RealTimeEditor label="Content" name="text" control={control}></RealTimeEditor>
        </form>
        </div>
    )
}
export default PostForm;