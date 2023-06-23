import { Link } from "react-router-dom";

const PricingBill = () => {
  return (
    <>
      <div className="wrapper md:gap-8 gap-6 sm:flex-row flex-col justify-center xl:!mb-36 lg:!mb-16 !mb-12 !items-stretch">
      <div className="bg-[#1F1E25] rounded-[20px] text-white lg:p-8 p-6 text-center max-w-[592px] w-full">
        <h3 className="md:text-2xl text-xl font-medium md:pb-6 pb-3">Monthly billing</h3>    
        <h2 className="lg:text-6xl md:text-5xl text-4xl font-semibold pb-3">$69</h2>
        <p className="text-base font-medium mdpb-8">per person, per month</p>
        <Link to="https://app.yarta.ai/sign-up" target="_blank">
        <button className="md:text-xl text-lg font-medium mt-8 mb-4 p-4 bg-[#5E5BF9] w-full rounded-xl">Try It Free</button>
        </Link>
        <p className="text-base font-medium">7-day free trial. No credit card needed.</p>
      </div>
      <div className="bg-[#1F1E25] rounded-[20px] text-white lg:p-8 p-6 text-center max-w-[592px] w-full">
        <h3 className="md:text-2xl text-xl font-medium md:pb-6 pb-3">Annual billing <span className="text-[#F0AEFD]">(2 months free)</span></h3>    
        <h2 className="lg:text-6xl md:text-5xl text-4xl font-semibold pb-3">$699</h2>
        <p className="text-base font-medium mdpb-8">per person, per annum</p>
        <Link to="https://app.yarta.ai/sign-up" target="_blank">
        <button className="md:text-xl text-lg font-medium mt-8 mb-4 p-4 bg-[#5E5BF9] w-full rounded-xl">Try It Free</button>
        </Link>
        <p className="text-base font-medium">7-day free trial. No credit card needed.</p>
      </div>
      </div>
    </>
  );
};

export default PricingBill;
