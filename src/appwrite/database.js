import conf from "../conf/conf";
import { Client,ID,Databases, Query } from "appwrite";

class DatabaseService{
    client=new Client();
    databases;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
        this.databases=new Databases(this.client);
    }
  
    //create document meaning adding anew record to database collection
    async addPost({title,content,featuredImageId,status,userId}){
         try{
            const response=this.databases.createDocument(
                conf.databaseId,conf.collectionId,ID.unique(),{
                    title,
                    content,
                    featuredImageId,
                    status,
                    userId
            });
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

    async getPost(id){
        try{
            const response=await this.databases.getDocument(conf.databaseId,conf.collectionId,id);
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
    
    async getAllPosts({queries}){
        try{
           return await this.databases.listDocuments(conf.databaseId,conf.collectionId,queries);
        }
        catch(error){
           console.log(error);
        }
        return null;
    }
    async updatePost({title,content,featuredImage,status,userId},id){
        try{
            return await this.databases.updateDocument(conf.databaseId,conf.collectionId,id,{
                title,
                content,
                featuredImage,
                status,
                userId
            });
        }
        catch(error){
            console.log(error);
        }
        return null;
    }

    async deletePost(id){
         try{
            return await this.databases.deleteDocument(conf.databaseId,conf.collectionId,id)
         }
         catch(error){
            console.log(error);
         }
         return null;
    }

}

const databaseService=new DatabaseService();
export default databaseService;