import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite";        //client side code

class AuthService {
    client= new Client();
    account;
     
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
              const userAccount=await this.account.create(ID.unique(),email,password,name);
              if(userAccount){
                   return userAccount;
              }
              else{
                   throw new Error();
              }
        }
        catch(error){
            return error;
        }
    }

    async login({email,password}){
        try{
            const userLoggedIn=await this.account.createEmailPasswordSession(email,password);
            if(userLoggedIn){
                return userLoggedIn;
            }
            else{
                throw new Error("Email and password not correct");
            }
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async accountVerification(){
             
    }

    async getCurrentUser(){
        try{
            const currentUser=await this.account.get();
            console.log(currentUser);
            return currentUser;
        }
        catch(error){
            
        }
        return null;
    }
    
    async logout(session){
        try{
            return await this.account.deleteSession(session);
        }
        catch(error){
            return error;
        }
    }

    async getSession(session="current"){
        try{
             return await this.account.getSession(session);
        }
        catch(error){
             
        }
        return null;
    }

}

const authService=new AuthService();
export default authService;