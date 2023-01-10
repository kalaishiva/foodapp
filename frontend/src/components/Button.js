import React from 'react'


const Button = ({buttonText, btnColor}) => {
  
  return (
    <div>
    <button type="button"  className={`${btnColor}  inline-block mx-8  text-white font-medium px-[3.4rem] py-[12px] text-2xl leading-tight  rounded-[70px] shadow-md   active:shadow-lg transition duration-150 ease-in-out`}>{buttonText}</button>
    </div>
  )
}

export default Button