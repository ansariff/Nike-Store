import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export const Footer = () => {
  return (
    <footer className="max-containe">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className=" flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 font-montserrat text-white-400 sm:w-sm">
            get shoes ready, greb them before it's too late
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center h-12 w-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-20 flex-wrap">
          {footerLinks.map((footer) => (
            <div key={footer}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-8">
                {footer.title}
              </h4>
              <ul>
                {footer.links.map((foot) => (
                  <li className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor:pointer" key={foot.name}>
                    <a href={foot.link}>{foot.name} </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
      <div className="flex flex-1 font-montserrat justify-start items-center gap-2 cursor-pointer ">
        <img src={copyrightSign} alt='copyrightSignature' width={20} height={20} className="rounded-full m-0" />
        <p className="font-montserrat cursor-pointer ">All Rights Reserved </p>
      </div>
      
      <p className="font-montserrat cursor-pointer"> Terms & conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
