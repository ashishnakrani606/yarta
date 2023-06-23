import HubspotForm from 'react-hubspot-form'

const QuantitativeResearcher = () => {
  return (
    <div className="bg-black-darkest lg:pt-20 pt-10 md:pb-28 pb-16">
      <div className="wrapper xl:px-20 lg:px-20 flex-col items-center lg:items-start">
        <div className="max-w-[800px] text-white m-auto bg-black-darkest border-2 border-[#1c1d21] p-6 rounded-lg">
          <div className="mt-[18px] mb-10">
            <h1 className="text-[28px] text-white font-bold">Quantitative Researcher</h1>
            <p className="text-[#999] font-bold text-base">Remote</p>
          </div>
          <p className="text-white font-bold text-base my-4">About Yarta</p>
          <p className="my-4">
            Yarta is a new kind of commodity trading platform that provides traders of physical agricultural commodities with a streamlined, reliable, and enhanced trading experience. 
          </p>
          <p className="my-4">
            Working at Yarta, you will have a chance to work on and shape the future of the global agriculture industry. We’re a small, tight-knit, and ambitious team. We value personal growth and aim to achieve big things together.
          </p>
          <p className="my-4">
            We’re a fully distributed, remote-first, fast-growing startup. Our team is spread across North America, Asia, and Europe. We rely heavily on our written communication skills in order to make it work. 
          </p>
          <p className="my-4">
            We believe in giving our engineers agency and control over their schedules. There are no core working hours, but pride ourselves on making an outsized impact. 
          </p>
          <p>
            We just ask our team to communicate clearly about their schedules and be considerate to their coworkers if plans change. You will occasionally need to be flexible in order to meet synchronously with colleagues in different time zones.
          </p>
          <p className="text-center pt-12 pb-8">**********</p>
          <p className="text-white font-bold text-base my-4">About the Role</p>
          <p>
            We are looking for a quantitative researcher to join our team and help us build quantitative strategies focused on global commodity markets. Our ideal candidate will have a strong background in statistics, mathematics, and programming. You will work closely with our team of developers, traders, and data scientists to develop and implement trading algorithms using big data and AI.
          </p>
          <p className="text-white font-bold text-base my-4">Responsibilities</p>
          <ul className="pl-10 my-4 pattern-set">
            <li className="my-4">
                Conduct research on quantitative trading strategies and algorithms
            </li>
            <li className="my-4">
                Develop and implement new trading algorithms and models
            </li>
            <li className="my-4">
                Collaborate with the development team to integrate trading algorithms into our platform
            </li>
            <li className="my-4">
                Monitor and optimize existing trading algorithms to ensure their effectiveness
            </li>
            <li className="my-4">
                Stay up-to-date with the latest trends and advancements in quantitative trading
            </li>
          </ul>
          <p className="text-white font-bold text-base my-4">Qualifications</p>
          <ul className="pl-10 my-4 pattern-set">
            <li className="my-4">
                Masters, or a Ph.D. in CS, ML, Math, Statistics, Physics, Engineering, Quant, or relevant industry experience.
            </li>
            <li className="my-4">
                4+ years of relevant industry experience
            </li>
            <li className="my-4">
                Broad experience developing software for quantitative investment workflows 
            </li>
            <li className="my-4">
                Proficiency in modern programming languages such as Python, C++, or Java
            </li>
            <li className="my-4">
                Knowledge of financial markets and experience with commodity trading is a plus
            </li>
            <li className="my-4">
                Strong problem-solving and critical-thinking skills
            </li>
            <li className="my-4">
                Excellent written and verbal communication skills
            </li>
          </ul>
          <p className="text-white font-bold text-base my-4">Compensation and Benefits</p>
          <ul className="pl-10 my-4 pattern-set">
            <li className="my-4">
                We want you to feel like an owner and that should be reflected in your salary and equity.
            </li>
            <li className="my-4">
                A good work-life balance: we do our best work when we regularly can step away from it and live our lives.
            </li>
            <li className="my-4">
                Flexible vacation and work hours. We don’t adopt conventional work practices that are meaningless for the type of work we do.
            </li>
            <li className="my-4">
                Great colleagues: we value a culture of authenticity, humility, and excellence. We want you to make a footprint on our culture.
            </li>
          </ul>
          <p >If you are passionate about quantitative trading and have the qualifications we are looking for, please apply with your resume and a cover letter explaining why you are the perfect fit for this role. We look forward to hearing from you!</p>
          <p className="text-center pt-12 pb-8">**********</p>
          <div className='max-w-[500px] m-auto'>
            <div className='flex items-center justify-between mt-[50px] mb-[20px]' >
              <h2 className="text-lg">Apply for this Job</h2>
              <p className='text-xs'>
                <span className='text-red'>*</span>
                Required
              </p>
            </div>
            <HubspotForm
              portalId='21451866'
              formId='076ceca3-97f7-41df-a8a7-a7714f5ccdab'
              onSubmit={() => console.log('Submit!')}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantitativeResearcher;
