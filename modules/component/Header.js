// import {useState} from " react"
import { useState } from "react";
const header =({handleOpenModal})=>{
   
    return(
        <>
  <div className="w-full  border flex flex-row md:justify-between h-12 bg-cyan-500"> 
        <div className="text-base  h-12 "> Hire Easy</div>  
        {/* <button  onClick={handleOpenModal}> Login/singup */}
        <button  onClick={()=>{handleOpenModal()}}> Login/singup 
        </button>
        </div>
       
        </>
        
    )
}
export default header;