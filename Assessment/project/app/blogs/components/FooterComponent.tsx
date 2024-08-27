import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-8 border-2 border-gray-200 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Image src="/footer-icon.svg" alt="Icon" width={200} height={200} />
          <div className="ml-4">
            <p className="text-gray-800 font-bold">
              Get involved in improving tech education in Africa!
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">
              Support Us
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-0 w-full md:w-auto">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h4 className="font-bold text-gray-800">Links</h4>
            <ul className="flex flex-col gap-4 mt-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-8">
            <h4 className="font-bold text-gray-800">Teams</h4>
            <ul className="flex flex-col gap-4 mt-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Board Members
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Advisors/Mentors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Executives
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Staff
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Blogs</h4>
            <ul className="flex flex-col gap-4 mt-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Recent Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  New Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; 2020 Africa to Silicon Valley, Inc. All rights reserved.
          </p>
          <div className="flex mt-6 md:mt-0">
            <a href="#" className="mr-4">
              <Image
                src="/twitter-icon.svg"
                alt="Twitter"
                width={25}
                height={25}
              />
            </a>
            <a href="#" className="mr-4">
              <Image
                src="/facebook-icon.svg"
                alt="Facebook"
                width={25}
                height={25}
              />
            </a>
            <a href="#" className="mr-4">
              <Image
                src="/youtube-icon.svg"
                alt="YouTube"
                width={25}
                height={25}
              />
            </a>
            <a href="#" className="mr-4">
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <Image
                src="/instagram-icon.svg"
                alt="Instagram"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
