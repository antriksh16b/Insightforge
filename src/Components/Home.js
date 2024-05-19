import {useSelector} from "react-redux";
import bg from '../svgs/bg.svg';
import Button from "./Button";
function Home(){
    let status=useSelector((state)=>(state.status))
    return(
        <div className="flex items-center justify-around p-4">
           <div>
            <h1 className="hover:text-blue-200 text-3xl sm:text-5xl font-bold flex flex-col mb-5">
            {status ? "Logged In" : "Login to read Blog"}</h1>
            {!status && <Button className="bg-blue-950 hover:bg-blue-950 text-white text-xl px-4 py-2 border-white m-1 border-4 active:border-blue-200">Get started</Button>}
            </div>
            <img src={bg} className="w-2/6"></img>
        </div>
    ); 
}
export default Home;