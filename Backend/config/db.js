import {MongoClient,ServerApiVersion} from "mongodb";

class MongoDBService{
    client=new MongoClient("mongodb+srv://antriksh16b:XdgqtaRt6TxVoqxd@cluster0.t66owvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
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