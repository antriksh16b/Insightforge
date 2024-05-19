function Button({
         children,
         type='button',
         bgColor='bg-blue-400',
         className='',
         ...props}){
      return(
        <button 
        type={type} 
        className={`${bgColor} ${className} p-2 rounded-lg hover:bg-blue-200 ${props}`}
        >{children}</button>
      )
}
export default Button;