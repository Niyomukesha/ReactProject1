import React from 'react';
import logo from '../images/looog.jpg';
import background from '../images/imag.jpg';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen text-white" style={{ backgroundImage: `url(${background})` }}>
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between flex-wrap">
          <img src={logo} alt="Logo" className="w-24 h-24" />
          <ul className="flex space-x-10">
            <li><a href="/about.html" className="text-2xl">About</a></li>
            <li><a href="/resume.html" className="text-2xl">Resume</a></li>
            <li><a href="/portfolio.html" className="text-2xl">Portfolio</a></li>
            <li><a href="/blog.html" className="text-2xl">Blog</a></li>
            <li><a href="/contact.html" className="text-2xl">Contact</a></li>
          </ul>
        </nav>
        <div className="text-center pt-48">
          <h1 className="text-6xl mb-4">Florence Niyomukesha</h1>
          <p className="text-4xl text-white opacity-50">I'm a web developer</p>
        </div>
        <div className="flex justify-center space-x-10 mt-20">
          <FaTwitter className="text-4xl" />
          <FaFacebookF className="text-4xl" />
          <FaLinkedinIn className="text-4xl" />
          <FaGithub className="text-4xl" />
          <FaInstagram className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
