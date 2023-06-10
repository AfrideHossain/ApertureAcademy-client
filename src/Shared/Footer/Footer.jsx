import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import aperture_academy from "../../assets/Aperture Academy-logos_transparent.png";
const Footer = () => {
  return (
    <footer className="footer footer-center mt-10 p-10 bg-blue-500 text-primary-content">
      <div>
        <img src={aperture_academy} alt="Logo" className="w-28" />
        <p className="font-bold text-2xl">Aperture Academy</p>
        <p>
          Level 2, Afrede{"'"}s House, Pangsha, Rajbari, 7720 <br />
          afredehossain@gmail.com
        </p>
        <p className="mt-5">Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <BsFacebook />
          </a>
          <a>
            <BsYoutube />
          </a>
          <a>
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
