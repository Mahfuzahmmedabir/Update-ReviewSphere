import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
const Footer = () => {
  return (
    <div>
      <footer className=" lg:flex gap-8 bg-neutral text-neutral-content p-10">
        <nav className="lg:w-5/12">
          <h6 className="footer-title">Services</h6>
          <p className=" font-semibold text-[16px]">
            The Service Review Application System is a user-friendly platform
            designed to connect users with trusted reviews of various services.
            It empowers individuals to share their experiences, rate services,
            and make informed decisions. Whether you’re looking for the best
            local businesses, comparing service providers, or sharing your
            feedback, this application ensures transparency and reliability in
            every review.
          </p>
        </nav>

        <nav className="lg:ml-20 lg:w-96 ">
          <h6 className="footer-title">Legal</h6>
          <div className="flex flex-col">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
        {/* usefull link */}
        <nav>
          <h6 className="font-bold footer  text-2xl text-white">Wstream</h6>
          <p className="text-xl lg:w-96">
            The best and most professional theme for to build a website about
            series and movies.
          </p>

          <div className=" flex gap-5">
            <Link
              to={'https://www.facebook.com/'}
              className="text-2xl bg-slate-700 rounded-md font-bold text-slate-100 py-2 px-3 hover:bg-[#316FF6]"
            >
              <FaFacebook />
            </Link>
            <button className="text-2xl bg-slate-700 rounded-md font-bold text-slate-100 py-2 px-3 hover:bg-white hover:text-black">
              <RiTwitterXLine />
            </button>
            <Link
              to={'https://github.com/Mahfuzahmmedabir'}
              className="text-2xl bg-slate-700 rounded-md font-bold text-slate-100 py-2 px-3 hover:bg-black"
            >
              <FaGithub />
            </Link>
            <button className="text-2xl bg-slate-700 rounded-md font-bold text-slate-100 py-2 px-3 hover:bg-red-600">
              <IoLogoYoutube />
            </button>
          </div>
        </nav>
      </footer>

      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="font-semibold ">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
