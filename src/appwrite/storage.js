import conf from "../conf/conf";
import { Client,ID,Storage } from "appwrite";

class StorageService{
     client=new Client();
     storage;

     constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
        this.storage=new Storage(this.client);
     }

     async uploadImage(file){
        try{
            const response = await this.storage.createFile("662165af7a3fa1e39459" ,ID.unique(),file)
            if(response){
                return response;
            }
        }
        catch(error){
            console.log(error);
        }
    }
    

     async getImage(id){
        try{
            const response=await this.storage.getFile(conf.bucketId,id);
            if(response){
                return response;
            }
            else{
                
            }
        }
        catch(error){
            console.log(error);
        }
     }

     async getList(){
        try{
            const response=await this.storage.get();
            return response;
        }
        catch(error){
            return error;
        }
    }

     async updateImage(){
         const response=await this.storage.updateFile()
         return response;
     }
     
    async getFilePreview({fileId,height,width}){
        return await this.storage.getFilePreview("662165af7a3fa1e39459",fileId,width,height,'center');
     }
}
let storageService=new StorageService();
export default storageService;