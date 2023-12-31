import React from 'react'
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});



const about = () => {
  return (
    <div className={montserrat.className}>
      <section class="about text-gray-600 body-font">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <h1 class="title-font sm:text-2xl text-2xl mb-6 font-medium ">YOUNGLA'S STORY</h1>
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/1775/6429/files/YLA_Group_Photo-6_600x600.jpg?v=1651596188" />
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium ">OUR STORY</h1>
            <p class="mb-8 leading-relaxed">YOUNGLA IS A LIFESTYLE CLOTHING BRAND HEADQUARTERED IN THE HEART OF LOS ANGELES, CA. WE BEGAN AS A SMALL BUSINESS BETWEEN TWO BROTHERS WHO AIMED TO CREATE AN AFFORDABLE, YET UP-TO-DATE FITNESS BRAND THAT IS ALSO COMFORTABLE. A COUPLE OF YEARS LATER WE HAVE NOW GROWN INTO A 150+ PERSON TEAM, EACH PERSON TAKING PRIDE IN THEIR WORK AND OUR CUSTOMERS SATISFACTION. WITH CUSTOMER SATISFACTION BEING OUR NUMBER ONE PRIORITY, WE MAKE UNIQUE AND ONE-OF-A-KIND PRODUCTS THAT OUR CUSTOMERS CAN WEAR WITH CONFIDENCE. WE PRIDE OURSELVES ON DESIGNING AND CREATING CLOTHING THAT ARE PREMIUM QUALITY BUT ALSO AT A FRACTION OF THE COST FROM TYPICAL FITNESS CLOTHING BRANDS. FROM START TO FINISH, EACH PRODUCT IS DESIGNED WITH OUR CUSTOMERS AND QUALITY IN MIND.</p>
          </div>
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium ">OUR MISSION</h1>
            <p class="mb-8 leading-relaxed">BEFORE STARTING YOUNGLA, WE FOUND OURSELVES SEARCHING FOR THE PERFECT FITNESS WEAR AT AN AFFORDABLE PRICE. HOWEVER, IT DIDN’T EXIST, SO WE DECIDED THAT IN ORDER TO ADDRESS THE ISSUE OF MIXING AFFORDABILITY WITH COMFORT, WE NEEDED TO CREATE OUR OWN BRAND. OUR GOAL IS TO CREATE AN AFFORDABLE, YET LUXURIOUS BRAND, THE FITNESS CLOTHING INDUSTRY WILL CHANGE TO ADDRESS CUSTOMER SATISFACTION OVER MAKING A LARGE PROFIT. AT YOUNGLA, WE ULTIMATELY BELIEVE THAT LUXURY DOESN’T HAVE TO BE EXPENSIVE, NOR SHOULD YOU HAVE TO PAY MORE TO GET BETTER QUALITY APPAREL.
              WE TAKE A MUCH DIFFERENT APPROACH TO OUR PRODUCTS THAN OTHERS SINCE OUR GOAL IS TO MAKE PRODUCTS THAT ARE PREMIUM QUALITY AT AN AFFORDABLE PRICE. OUR PROCESS STARTS WITH AN IDEA AND TRANSFORMS INTO A PRODUCT THAT GOES THROUGH SEVERAL QUALITY CHECKS INCLUDING US WEARING AND TESTING IT OURSELVES FOR A LONG PERIOD OF TIME. WE WOULD NOT SELL SOMETHING THAT WE WOULDN’T WEAR OURSELVES!
              .</p>
          </div>
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium ">OUR COMMITMENT</h1>
            <p class="mb-8 leading-relaxed">OUR COMMITMENT TO OUR CUSTOMERS BEGINS BEFORE OUR PRODUCT HITS THE MARKET. SINCE WE PRIORITIZE CUSTOMER SATISFACTION, WE SPEND AT LEAST TWO MONTHS TESTING THE CLOTHING BEFORE RELEASING IT. OUR AIM IS TO CREATE LONG LASTING RELATIONSHIPS WITH OUR CUSTOMERS, KEEPING OUR CUSTOMERS FULFILLED AND HAPPY IS OUR BIGGEST COMMITMENT AND WE TAKE PRIDE IN GIVING THE BEST SERVICE POSSIBLE.</p>
          </div>
        </div>
      </section></div>
  )
}

export default about