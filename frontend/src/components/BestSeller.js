import React from 'react';
import BestSellerCard from './BestSellerCard';

const BestSeller = () => {
  return (
    <div>
        <div className='bg-[#d7eeea] pb-5 '>
      <section class="text-gray-600 body-font">
      <div class="container px-5 py-[10px] mx-auto ">
    <div class="flex flex-col text-center w-full my-3  align-middle ">
    <h1 className="text-[47px] font-bold leading-none text-center text-[#394E38] sm:text-[47px]">Our Best Sellers
				</h1>      <p class="mt-3 text-[#394E38] text-[28px] sm:mb-1">These items are our top selling items.<br/> Customers demand for these items are increasing day by day.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
    
      
    </div>
  </div>
</section>
    

{/* card */}
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-3 mx-auto">
   
    <div class="flex flex-wrap -m-3 justify-around">
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />

           </div>
        </div>
       </section>
    </div>
    </div>
    </div>
  )
}

export default BestSeller