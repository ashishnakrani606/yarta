import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  link?: string;
  header: string;
  headerlink:any;
  handleHamburgerToggle : () => void;
  links?: {
    title: string;
    subtitle: string;
    link?: string;
    externalLink?: string;
  }[];
};

const DropdownTree: FC<Props> = ({ header, links, headerlink,  handleHamburgerToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div
        className="mx-6 cursor-pointer border-b border-black-border text-white py-3 navlink "
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <Link to={headerlink} >{header}</Link>
        </div>
      </div>
      {isOpen && (
        <div className="!z-20 mx-6 w-72 rounded-lg ">
          {links?.map((link, key) => {
            if (link.externalLink) {
              return (
                <a href={link.externalLink} key={key} 
                  target='_blank'
                  className="p-4" rel="noreferrer">
                  <p onClick={handleHamburgerToggle} className="text-white text-ellipsis">{link.title}</p>
                </a>
              )
            } else {
              return (
                <Link to={link.link ? link.link : ''} key={key}
                  className="p-4">
                  <p onClick={handleHamburgerToggle} className="text-white text-ellipsis">{link.title}</p>
                </Link>
              )
            }
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownTree;
