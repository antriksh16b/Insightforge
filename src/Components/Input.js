import {useId,forwardRef} from "react";
const Input=forwardRef(function Input({
    type="text",
    label,
    name,
    className,
    ...props
    },ref){
    const id=useId();
    return(
        <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <input type={type} name={name} className={` p-2 shadow rounded-lg mb-3 ${className}`} id={id} placeholder={label} ref={ref} {...props}></input>
        </div>
    )
})
export default Input;