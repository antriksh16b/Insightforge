import useTheme from "../context/ThemeContext";

function Footer(){
     let {themeMode}=useTheme();
    return(
        <footer className={`small flex flex-wrap sm:flex-nowrap overflow-hidden w-full ${themeMode==="dark" && "text-white"} justify-between items-center shadow-inner border-t px-1 sm:px-10 py-7`}>
             <h1 className="text-blue-400 text-lg sm:text-4xl flex items-center mr-2">
             <svg className="h-5 w-5 sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="stroke-white stroke-[12px]" d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>
             Logo</h1>
             <div className={`flex gap-2 ${themeMode==="dark" && "text-white textwhite"} sm:gap-10`}>
                 <div className="flex flex-col">
                      <h1 className="text-blue-950 mb-7 font-medium">Company</h1>
                      <p>Features</p>
                      <p>Pricing</p>
                      <p>Affiliate program</p>
                      <p>Press kit</p>
                 </div>
                 <div className="flex flex-col">
                      <h1 className="text-blue-950 mb-7 font-medium">Support</h1>
                      <p>Account</p>
                      <p>Help</p>
                      <p>Contact us</p>
                      <p>Customer Support</p>
                 </div>
                 <div className="flex flex-col ">
                      <h1 className="text-blue-950 mb-7 font-medium">Legal</h1>
                      <p>Terms & Conditions</p>
                      <p>Privacy Policy</p>
                      <p>Licensing</p>
                 </div>
             </div>
        </footer>
    )
}
export default Footer;