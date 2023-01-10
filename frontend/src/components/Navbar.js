import React from 'react';
import Logo from '../images/logo.jpeg';


const Navbar = () => {
  return (
    <div className='bg-[#fec4a466] pt-3'>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap  py-[0.25rem] flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
  <img src={Logo} alt="Logo" style={{width:'70px', height: '70px' }} />
      

      <span class="ml-[2.5rem]  text-4xl text-[#394E38]">Desi Veggie</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-8  text-[#542B0E] font-semibold text-3xl hover:text-gray-900">Home</a>
      <a class=" text-[#542B0E] font-semibold text-3xl hover:text-gray-900">About Us</a>
    </nav>

<div className=''>
    <i class="fa-solid fa-magnifying-glass fa-2x " style={{color:"#542B0E", paddingRight:"45px"}}></i>
        <button class="inline-flex items-center text-[#542B0E] font-semibold text-[1.5rem]  border-2 border-stone-600 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact
      
    </button>
    </div>
  </div>
</header>
    </div>
    
  )
}

export default Navbar