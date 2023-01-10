import React from 'react'
import Button from './Button'
import Panipuri from '../images/panipuri2.jpeg';

const Card = () => {
  return (
    <div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
        
        <div className="card w-96   bg-[#fec4a466] shadow-xl rounded-[59px] h-[511px] w-[386px]">

          <figure><img src={Panipuri} alt="panipuri" className='h-[287px] w-[386px] object-cover rounded-[59px] rounded-b-none' /></figure>
     <div className="card-body mx-[14px]">
       <div className='text-left  px-6 py-3 '>
       <div className=' flex '>
    <h2 className=" flex text-2xl text-[#542B0E] font-bold  my-2">
  PaniPuri
  <div className='text-right  ml-[70px]'>
  <i class="fa-solid fa-heart px-4"></i>
  <i class="fa-sharp fa-solid fa-cart-shopping px-4"></i>
  </div>
      </h2>
      </div>

<p className='text-lg font-semibold text-slate-700 my-2'>Enriched with dhal, chat masala, aloo etc.</p>
</div>

<Button buttonText="Order now" btnColor="brownBtn" />
</div>
</div>
</div>
    </div>
  )
}

export default Card