import React from 'react';
import Profilepic from '../images/profilepic1.jpeg';

const Hero = () => {
  return (
    <div>
<section className="h-[390px]
 dark:bg-[#fec4a466] dark:text-gray-100">
	<div className="container flex flex-col justify-center px-6 py-2 mx-auto sm:py-8 lg:py-8 lg:flex-row lg:justify-around">
		
        <div className="  flex flex-col  items-center p-4 text-center rounded-sm w-[32rem] h-[365px] justify-center	  lg:max-w-md xl:max-w-lg lg:text-left">
			
            <h1 className="text-[47px] font-bold leading-none text-center text-[#542B0E] sm:text-[47px]">Authenticated Dishes
				</h1>
			<p className="mt-3 text-[#542B0E] text-[28px] sm:mb-1">The perfect dish everytime specially for you. From our kitchen to your door.</p>
           
			
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#542B0E] dark:text-white mt-2 rounded-[70px]">Order Now</a>
			</div>
		</div>

		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={Profilepic} alt="" className="object-contain h-[27rem] rounded-[70px] sm:h-80 lg:h-[27rem] xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>

    </div>
  )
}

export default Hero