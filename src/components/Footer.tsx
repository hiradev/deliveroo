import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-4">
        <div className="bg-gray-800 p-4 rounded mb-4 md:mb-0">
          <h3 className="text-white font-bold mb-4">Discover Deliveroo</h3>
          <ul className="list-none text-sm p-0 m-0 text-white">
            <li>Investors</li>
            <li>About us</li>
            <li>Takeaway</li>
            <li>More</li>
            <li>Newsroom</li>
            <li>Engineering blog</li>
            <li>Design blog</li>
            <li>Gift Cards</li>
            <li>Deliveroo Students</li>
            <li>Careers</li>
            <li>Restaurant signup</li>
            <li>Become a rider</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded mb-4 md:mb-0">
          <h3 className="text-white font-bold mb-4">Legal</h3>
          <ul className="list-none p-0 m-0 text-white text-sm">
            <li>Terms and conditions</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Modern Slavery Statement</li>
            <li>Tax Strategy</li>
            <li>Section 172 Statement</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded mb-4 md:mb-0">
          <h3 className="text-white font-bold mb-4">Help</h3>
          <ul className="list-none p-0 m-0 text-white text-sm">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Cuisines</li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-white font-bold mb-4">Take Deliveroo with you</h3>
          <div className="flex justify-between">
            <Image src="/apple.png" alt="apple" width={130} height={130} />
            <Image src="/android.png" alt="android" width={130} height={130} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
