import DropdownTree from "../../components/DropdownTree";
import { useState } from "react";
import { Link } from "react-router-dom";
import Closed from "../../assets/Icons/Closed";
import Hamburger from "../../assets/Icons/Hamburger";
import Logo from "../../assets/Icons/YartLogo";
import { NavLinks } from "../../utils/content";

function Header() {
  const [hoveredLink, setHoveredLink] = useState(-1);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const showLinkHandler = (i: number) => {
    setHoveredLink(i);
  };

  const hideLinkHandler = () => {
    setHoveredLink(-1);
  };

  const handleHamburgerToggle = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="box-border top-0 w-full 2xl:h-24 py-6 bg-black-darkest header">
      <div className="flex items-center justify-between">
        <a
          href="https://yarta.ai/"
          rel="noreferrer"
          className="xl:w-auto lg:w-24"
        >
          <Logo width={97} height={30} />
        </a>
        <div onClick={handleHamburgerToggle} className="text-white lg:hidden">
          <Hamburger />
        </div>
        {isHamburgerOpen && (
          <>
            <div className="fixed top-0 bottom-0 left-0 z-[50] w-full pt-20 bg-black-dark h-screen overflow-auto">
              <div
                onClick={handleHamburgerToggle}
                className="text-white lg:hidden relative z-[99] flex justify-end mt-[-50px] right-[15px]"
              >
                {isHamburgerOpen ? <Closed /> : <Hamburger />}
              </div>
              {NavLinks.map((link, i) => (
                <DropdownTree
                  links={link.subcategories}
                  header={link.title}
                  headerlink={link.url}
                  key={i}
                  handleHamburgerToggle={handleHamburgerToggle}
                />
              ))}
            </div>
          </>
        )}
        <div className="items-center hidden lg:flex flex-nowrap menu-wrapper">
          {NavLinks.map((link, i) => (
            <>
              {(link.title == "Affiliates") || (link.title == "Get in touch") || (link.title == "Pricing") ? (
                <>
                  <Link
                    to={link.url ? link.url : ""}
                    target={link.target ? link.target : ""}
                    className="relative menu-items block py-12px 2xl:mx-2 xl:mx-1 mx-0 cursor-pointer
                  2xl:px-4 xl:px-3 px-2 rounded-md text-white/70 hover:text-white/100 navlink hover:bg-black-dark header-contact"
                  >
                    {link.title}
                  </Link>
                </>
              ) : (
                <>
                  <div
                    onMouseEnter={() => showLinkHandler(i)}
                    onMouseLeave={hideLinkHandler}
                    className="relative menu-items py-12px 2xl:mx-2 xl:mx-1 mx-0 cursor-pointer
                  2xl:px-4 xl:px-3 px-2 rounded-md text-white/70 hover:text-white/100 navlink hover:bg-black-dark header-contact"
                    key={i}
                  >
                    {link.title}
                    {hoveredLink === i && (
                      <div
                        className={`dropdown-set rounded-lg absolute left-0 top-[46px]  
                        ${
                          link.subcategories
                            ? "!z-100 shadow-custom bg-black-dark w-72 border-black-border border-2"
                            : "!z-100 bg-black-dark w-72 top-12"
                        }
                      `}
                      >
                        {link.subcategories?.map((category, key) => {
                          if (category.externalLink) {
                            return (
                              <div className="p-4 rounded-md hover:bg-black-darkest flex items-center">
                                <Link
                                  key={key}
                                  to={
                                    category.externalLink
                                      ? category.externalLink
                                      : ""
                                  }
                                  target="_blank"
                                >
                                  <p className="font-bold text-white flex text-ellipsis">
                                    <span className="mr-3">
                                      {category.icon ? <category.icon /> : ""}
                                    </span>
                                    {category.title}
                                  </p>
                                  <p className="text-white-sixty text-s">
                                    {category.subtitle}
                                  </p>
                                </Link>
                              </div>
                            );
                          } else {
                            return (
                              <div
                                key={key}
                                className="text-teams p-4 rounded-md hover:bg-black-darkest  flex items-center"
                              >
                                <Link to={category.link ? category.link : ""}>
                                  <p className="dsf font-bold text-white flex text-ellipsis">
                                    <span className="mr-3">
                                      {category.icon ? <category.icon /> : ""}
                                    </span>
                                    {category.title}
                                  </p>
                                  <p className="text-white-sixty text-s">
                                    {category.subtitle}
                                  </p>
                                </Link>
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          ))}
          <a
            href="https://app.yarta.ai/sign-in"
            target="_blank"
            className="hidden rounded-[12px] items-center 
            justify-center tracking-wide leading-[28px] 2xl:ml-8 xl:ml-4 ml-1 lgm:px-8 md:px-4 py-1.5 px-2 text-purple font-bold
            lg:flex  border border-purple "
            rel="noreferrer"
          >
            Login
          </a>
          <Link
            to="https://app.yarta.ai/sign-up"
            target="_blank"
            className="hidden rounded-[12px] items-center 
            justify-center tracking-wide leading-[28px] xl:ml-3 ml-1 lgm:px-8 md:px-4 py-1.5 px-2 text-white font-bold
            lg:flex bg-purple hover:bg-purple-hover"
            rel="noreferrer"
          >
            Try Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
