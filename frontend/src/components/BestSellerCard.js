import React from 'react';
import Cake from '../images/cake3.jpeg';

const BestSellerCard = () => {
  return (
        <div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
            
            <div className="card w-96   bg-white shadow-xl rounded-[59px] h-[411px] w-[386px]">
    
              <figure><img src={Cake} alt="panipuri" className='h-[287px] w-[386px] object-cover rounded-[59px] rounded-b-none' /></figure>
         <div className="card-body mx-[14px]">
           <div className='text-left  px-6 py-3 '>
           <div className=' flex justify-evenly px-2'>
        <h2 className=" flex text-2xl text-[#394E38] font-bold  my-2 ">
      Cake
      <div className='text-right  ml-[70px]'>
     
      <i class="fa-sharp fa-solid fa-cart-shopping px-4"></i>
      </div>
          </h2>
          </div>
    
    </div>
    
    </div>
    </div>
    </div>
        </div>
      )
    }
    
   

export default BestSellerCard