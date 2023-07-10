import Logo from '../../assets/Icons/YartLogo';
import { useEffect  } from 'react';
import { Content } from '../../utils/content';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';


const Footer = () => {
  const { footer, footerLinks } = Content;
  const control = useAnimation();
  const [ref, inView] = useInView();
  
  const variant = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: 20, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  },
  [control, inView]);
  
  return (
    <footer
      className=" w-full bg-black-darkest
     text-white flex box-border flex-col"
    >
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={control}
        className="wrapper flex-col py-10 lg:pt-20 wrapper-footer-main justify-between !items-start md:pb-7"
      >
        <div className="wrapper-footer-left">
          <div className="flex justify-center lg:justify-start flex-col">
            <Logo color="#fff"/>
          </div>
            <p className="tracking-wider pt-2">
              trade on your terms
            </p>
          <h2 className="text-white text-left font-bold my-5 md:text-3xl text-2xl">
            {footer.title}
          </h2>
          <p className="text-white-sixty mb-4 md:max-w-[215px] w-full lg:mr-0 sm:mr-3 mr-0">
            {footer.subtitle}
            <Link to='/contact'>{footer.subtitlespan}</Link>
            <span>{footer.subtitle2}</span>
          </p>
        </div>
        <div className="md:text-xl text-base flex wrapper-footer-right">
          <div className="w-full wrapper-footer">
            <div className='pt-4 md:pt-0 w-full wrapper-footer-inner'>
              <p className="text-white text-ellipsis">
                Platforms
              </p>
              {footerLinks.Platforms.map((FooterLinks, i) => (
                <a
                  href={FooterLinks.link}
                  key={i}
                  className="text-white-forty block cursor-pointer my-4  text-base"
                >
                  {FooterLinks.title}
                </a>
              ))}
            </div>
            <div className='pt-4 md:pt-0 wrapper-footer-inner1'>
              <p className="text-white text-ellipsis">
                Company
              </p>
              {footerLinks.Company.map((FooterLinks, i) => (
                <a
                  href={FooterLinks.link}
                  key={i}
                  className="text-white-forty block cursor-pointer my-4 text-base"
                >
                  {FooterLinks.title}
                </a>
              ))}
            </div>
            <div className='pt-4 md:pt-0 wrapper-footer-inner resources-main'>
              <p className="text-white text-ellipsis">
                Resources
              </p>
              <div className='grid grid-cols-2 resources-wrapper'>
                {footerLinks.Resources.map((FooterLinks, i) => (
                  <a
                    href={FooterLinks.link}
                    key={i}
                    className="text-white-forty block cursor-pointer mt-4 w-full text-base">
                    {FooterLinks.title}
                  </a>
                ))}
              </div>              
            </div>
            <div className='pt-4 md:pt-0 wrapper-footer-inner md:pl-3 pr-0'>
              <p className="text-white text-ellipsis">
                Contact
              </p>
              {footerLinks.Contact.map((FooterLinks, i) => (
                <a
                  href={FooterLinks.link}
                  key={i}
                  className="text-white-forty block cursor-pointer my-4 text-base"
                >
                  {FooterLinks.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className='block flex-wrap md:flex justify-between border-t border-black-border pt-5 wrapper'>
        <div className='flex md:flex-row flex-col !items-baseline'>
          <p className="text-white-sixty mb-4">&copy;{footer.copy}</p>
          <a  target="_blank" href={require('../../assets/Images/Yarta-Privacy-Policy.pdf')} 
            rel="noreferrer"
            className="text-white-sixty cursor-pointer hover:text-white md:mx-5  mb-4">
            Privacy Policy
          </a>
          <a target="_blank" href={require('../../assets/Images/YartaT&Cs.pdf')} 
            rel="noreferrer" 
            className="text-white-sixty cursor-pointer hover:text-white mb-4">
            Terms of Conditions
          </a>
        </div>
        <div>
          <ul>
            <li className='inline-block mr-3 footer-logo'>
              <a href="https://www.linkedin.com/company/yarta">               
                  <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </li>
            <li className='inline-block footer-logo'>
              <a href="https://twitter.com/Yarta_ai">                
                  <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                   <path fill="#fff" d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"/>
                  </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
