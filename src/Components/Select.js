import { forwardRef, useId } from "react";
function Select({
       options,
       label,
       className="",
       ...props
    },ref){
    let id=useId();
    return(
           <div className="w-1/2 flex flex-col">
            {label && <label htmlFor={id} className="">{label}</label>}
            <select 
            {...props}
            id={id}
            ref={ref}
            className={`${className} w-full`}>
              {options.map((currentValue)=>(                    //?. operator check options are not null then apply map
                  <option className="p-2 rounded-md" key={currentValue} value={currentValue}>
                        {currentValue}
                  </option>
              ))}
            </select>
        </div>
    );          
}

export default forwardRef(Select);