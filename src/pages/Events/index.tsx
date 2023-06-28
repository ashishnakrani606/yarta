import Suggestdemo from './../../components/suggest/Suggestdemo'
const Events = () => {
  return (
    <>
      <div className='bg-black-darkest w-full text-white'>
        <div className='relative py-16 lg:py-32 xl:py-56 xl:pt-40'>
          <div className=' flex flex-col items-center justify-center text-center'>
            <div className='absolute inset-0 z-0 bg-black pointer-events-none'>
              <div className='bg-gradient w-full h-full bg-gradient-animation'></div>
              <div className='absolute inset-0 w-full bg-gradient-to-b from-black'></div>
              <div className='absolute inset-0 w-full bg-gradient-to-b from-black'></div>
            </div>
            <div className='relative wrapper flex-col'>
              <h1 className='text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
                Top Agricultural and Trading Conferences in 2023
              </h1>
              <p className='text-white md:text-xl text-lg md:my-5 mt-5 mb-3'>
                Upcoming conferences and events for farmers, commodity
                <br className='xl:block hidden' />
                trading, and agriculture professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* marketing-world-start */}
      <div>
        <div className='bg-black'>
          <div className='text-center pt-5 max-w-[820px] w-full mx-auto px-3 pb-8'>
            <nav className='flex justify-between items-center text-purple'>
              <ul className='flex flex-wrap text-lg mb-5 mt-[20px]'>
                <li>
                  <a href='#September 2022' className='mr-4'>
                    July 2023
                  </a>
                </li>
                <li>
                  <a href='#October 2022' className='mr-4'>
                    August 2023
                  </a>
                </li>
                <li>
                  <a href='#November 2022' className='mr-4'>
                    September 2023
                  </a>
                </li>
              </ul>
            </nav>
            <div className='flex items-center justify-start md:flex-nowrap flex-wrap'>
              <label className='form-label text-white mr-5 text-lg md:w-auto w-full text-left'>
                Filter by
              </label>
              <select
                className='mr-5 rounded-md border-purple bg-black text-white md:mt-0 mt-3 focus:ring-0 
              focus:border-purple capitalize'
              >
                <option value='Agronomy'>Agronomy</option>
                <option value='Trading'>
                  Trading
                </option>
                <option value='Agtech'>
                 Agtech
                </option>
                <option value='Other'>
                  Other
                </option>
              </select>
              <select
                className='rounded-md bg-black text-white md:mt-0 mt-3 focus:ring-0 
              focus:border-purple border-purple capitalize'
              >
                <option value='in-person'>
                  In-person
                </option>
                <option value='hybrid'>
                  Hybrid
                </option>
                <option value='virtual'>
                  Virtual
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='text-white pt-14 pb-14 text-left  max-w-[820px] w-full mx-auto px-3'>
            <h3 className='text-[25px] font-bold mb-4'>April 2023</h3>
            <div className=''>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://cumul.us/?utm_campaign=Launch%20Campaign&utm_source=Partner%20-%20AgriTech%20Tomorrow&utm_medium=Event%20Listing' target="_blank">
                  Cumulus
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>April 17-19, 2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Las Vegas, NV, USA</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                Cumulus is designed for those at the forefront of the agtech and foodtech ecosystems, including:Industry Executives, Founders and Investors
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  In-person
                </span>              
              </div>
            </div> 
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://www.aginstitute.com.au/eventdetails/16105/agsmart-expo-2023' target="_blank">
                  AgSmart Expo 2023
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>April 20-21, 2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Bendigo, Australia</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                AgSmart is the nation’s pre-eminent agri-tech exposition showcasing the latest innovations, education, research and developments in Australian agriculture.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  In-person
                </span>              
              </div>
            </div> 
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://www.foodandfarmingtechnology.com/event/foodex-2023' target="_blank">
                  Foodex 2023
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>April 24-26, 2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>London, UK</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                Foodex will form part of The UK Food & Drink Shows uniting food development, grocery, manufacturing, specialist retail, wholesale and foodservice. 
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  In-person 
                </span>              
              </div>
            </div> 
          </div>
        </div>
        <div className='bg-black'>
          <div className='text-white pt-14 pb-14 text-left  max-w-[820px] w-full mx-auto px-3'>
            <h3 className='text-[25px] font-bold mb-4'>May 2023</h3>
            <div className=''>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://aapevents.eventsair.com/2023-northern-australia-food-futures-conference/sponsors' target="_blank">
                  Northern Australia Food Futures
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>May 22-25,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Darwin, Australia</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                Northern Australia Food Futures conferences provide access to the leaders and drivers of northern agricultural development. 
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px] inline-block 
                mr-3  sm:mt-0 mt-3'>
                  In-Person
                </span>              
              </div>
            </div>
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://www.fanext.com/event-info/' target="_blank">
                  F & A NEXT
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>May 24-25,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Wageningen, Netherlands</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                F&A Next is about thought leadership and connecting promising startups and scale-ups to dedicated Food & Agtech investors and leading corporates. It includes two days of networking, pitching and debating the dynamics in food and agriculture.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px] inline-block 
                mr-3  sm:mt-0 mt-3'>
                  In-Person
                </span>              
              </div>
            </div> 
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://foodtechcongress.com/' target="_blank">
                  Fostering the food tech innovation
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>May 31–June 1,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Warsaw, Poland</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                  More than 1000 investors, government leaders, innovators and entrepreneurs from around the globe are coming together in Warsaw to spotlight technologies and partnerships to build healthier and more sustainable food systems From food as medicine to alternative proteins, food waste and agritech 5.0, the two-day event will draw you in and drive you forward.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px] inline-block 
                mr-3  sm:mt-0 mt-3'>
                  In-person
                </span>              
              </div>
            </div> 
          </div>
        </div>
        <div className=''>
          <div className='text-white pt-14 pb-14 text-left  max-w-[820px] w-full mx-auto px-3'>
            <h3 className='text-[25px] font-bold mb-4'>June 2023</h3>
            <div className=''>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://download.indooragtechnyc.com/delegate-info-2022' target="_blank">
                  Indoor AgTech Innovation Summit
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>June 23-24, 2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>New York City, USA</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                There will be a discussion of critical issues with thought-leaders from every part of the value chain. You’ll also experience a plethora of innovation first-hand, from sampling delicious indoor grown produce, to discovering disruptive technologies and visiting one of New York’s newest urban far
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  Hybrid
                </span>              
              </div>
            </div> 
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://download.worldagritechsaopaulo.com/register-your-interest-for-2023' target="_blank">
                  World Agri-Tech South America Summit
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>June 26-27, 2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Sao Paolo, Brazil</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                This will be a meeting place for influential growers, agribusinesses, food corporates, investors government agencies and disruptive start-ups to come together to celebrate South America’s growing agri-food innovation ecosystem, and build the partnerships needed to fast-track solutions to the field.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  Hybrid
                </span>              
              </div>
            </div> 
          </div>
        </div>
        <div className='bg-black'>
          <div className='text-white pt-14 pb-14 text-left  max-w-[820px] w-full mx-auto px-3'>
            <h3 className='text-[25px] font-bold mb-4'>June 2023</h3>
            <div>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://www.cultivateevent.org/' target="_blank">
                  Cultivate 2023
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>July 16-19,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Columbus, USA</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                Cultivate is the green-industry must-attend event. Join us to learn best practices and foster business connections so you and your business perform better, grow faster than ever and are prepared for the future.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px] inline-block 
                mr-3  sm:mt-0 mt-3'>
                  In-person
                </span>              
              </div>
            </div> 
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://conferenceindex.org/event/international-conference-on-research-in-chemical-biological-environmental-sciences-rcbes-2023-july-montreal-ca' target="_blank">
                  International Conference on Research in Chemical, Biological & Environmental Sciences
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>July 20-21,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Montreal, Canada</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                This conference provides opportunities for the delegates to share new ideas and application experiences face to face, to establish business or research relations and to find global partners for future collaboration.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px] inline-block 
                mr-3  sm:mt-0 mt-3'>
                  In-person
                </span>              
              </div>
            </div>
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://techhublive.com/' target="_blank">
                  Tech Hub Live Conference and Expo
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>July 23-26,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Des Moines,USA</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                The leading event for the data-driven digital agriculture industry. Tech Hub LIVE, produced by CropLife Media Group is the premier event for ag retailers, dealers, advisers, distributors; and solution facilitators and providers to come together to improve the way agriculture accelerates business opportunities, operations, and growth by utilizing data and technology.  Get tangible and actionable solutions that can be implemented this growing season.  
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px] inline-block 
                mr-3  sm:mt-0 mt-3'>
                  In-person
                </span>              
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='text-white pt-14 pb-14 text-left  max-w-[820px] w-full mx-auto px-3'>
            <h3 className='text-[25px] font-bold mb-4'>August 2023</h3>
            <div className=''>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://www.informa.com.au/event/conference/agtech-summit/' target="_blank">
                  AgTech Summit
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>August 23-24,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>TBA</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                The AgTech Summit will bring together key stakeholders, to discuss on the key issues facing the sector and the growing demand for technological advancement in agriculture.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  In-person 
                </span>              
              </div>
            </div> 
          </div>
        </div>
        <div className='bg-black'>
          <div className='text-white pt-14 pb-14 text-left  max-w-[820px] w-full mx-auto px-3'>
            <h3 className='text-[25px] font-bold mb-4'>September 2023</h3>
            <div className=''>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://agronomyconference.com/' target="_blank">
                  The Australian Agronomy Conference
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>September 18-22,2023 </h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>Toowoomba, Australia</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                The 20th Australian Agronomy Conference will feature leading international and national speakers addressing issues such as the need to foster soil biology for enduring profitability, carbon sequestration, herbicide resistance, and the interwoven relationships between food production, energy and the environment.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  In-person
                </span>              
              </div>
            </div> 
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://rpg.theiet.org/?gclid=EAIaIQobChMI0aXSrIGU-gIVQ7eWCh2QNw4XEAAYASAAEgIIwvD_BwE' target="_blank">
                  Renewable Power Generation (RPG 2022)
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>September 22-23,2022</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>London, United Kingdom</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                Brings together the topics of renewable energy technology, power generation and systems integration, with techno-economic issues. All renewable energy generation technologies are within the scope of the conference.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                 In-person
                </span>              
              </div>
            </div> 
          </div>
        </div>
        <div className=''>
          <div className='text-white pt-14 pb-14 text-left  max-w-[820px] w-full mx-auto px-3'>
            <h3 className='text-[25px] font-bold mb-4'>November 2023</h3>
            <div className=''>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://www.foodandfarmingtechnology.com/event/agritechnica-2023' target="_blank">
                  Agritechnica 2023
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>November 12-18,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>London, United Kingdom</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                For seven days, AGRITECHNICA will set the stage for 2,800 exhibitors and will lift the curtain for you on the future of crop production.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  In-person 
                </span>              
              </div>
            </div> 
            <div className='mt-6'>
              <h3 className='md:text-xl text-xl font-bold text-purple mb-2'>
                {' '}
                <a href='https://worldagritechinnovation.com/' target="_blank">
                  World Agri-Tech Innovation Summit
                </a>{' '}
              </h3>
              <div className='flex md:text-lg text-base'>
                <h3>Start date:</h3>
                <h4 className='pl-2'>November 12-18,2023</h4>
              </div>
              <div className='flex md:text-lg text-base'>
                <h3>Location:</h3>
                <h4 className='pl-2'>London, United Kingdom</h4>
              </div>
              <p className='md:text-lg text-base pt-2'>
                World Agri-Tech brought together 880 international top-level agri-food professionals in London over two days of panel discussions and networking to accelerate the transition to sustainable and resilient agri-food systems.
              </p>
              <div className='text-sm mt-5'>
                <span className=' rounded-pill uppercase rounded-2xl bg-purple px-[9px] py-[2px]
                inline-block  mr-3  sm:mt-0 mt-3'>
                  In-person 
                </span>              
              </div>
            </div> 
          </div>
        </div>
        <div>         
        </div>        
      </div>
      {/* marketing-world-end */}
      <Suggestdemo
        title='See something missing?'
        button='Suggest an event'
        link='/suggest_events'
      />
      
    </>
  );
};
export default Events;
