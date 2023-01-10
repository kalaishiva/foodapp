import React from 'react'
import FamilyPic from '../images/family1.jpeg'

const OurStory = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="
 lg:flex-grow md:w-1/2 lg:px-24 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#542B0E]">Our Story
      </h1>
      <p class=" 
 mb-8 leading-relaxed mt-3 text-[#394E38] text-[28px]">I am Sharanya Raghuraman from Aglasterhausen.<br/>

I am a mother of two kids and wife of a very supportive gentleman. I lovvve to cook and baking is my therapy. And i love my family more than anything ❤.
<br/>
 We provide customized cakes and Vegetarian food for your special</p>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={FamilyPic} />
    </div>
  </div>
</section>
    </div>
  )
}

export default OurStory