import {MongoClient,ServerApiVersion} from "mongodb";

class MongoDBService{
    client=new MongoClient("process.env.MONGODB_URI",{
        serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});

    async connectDB(){
        try{
             const connectionInstance= await this.client.connect();
             await this.client.db("Blogapp").command({ping:1});
             console.log("MongoDb Connected");
             console.log(connectionInstance);
        }
        catch(error){
             console.log("MONGODB connection failed ",error)
        }
    }
}

const MongoDb=new MongoDBService();

export default MongoDb;
