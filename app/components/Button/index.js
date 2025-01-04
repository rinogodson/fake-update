import React from "react";
import { forwardRef } from "react";

const Button = forwardRef(function index(props, ref){
  
    return (
        <button onClick={()=>{props.click(); }} ref={ref} className="button" >
          <img src={props.image} />
          <span>{props.text}</span>
        </button>
      );
})
export default Button;
