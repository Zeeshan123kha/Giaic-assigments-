import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 px-10 text-gray-800 flex justify-around">
       <div className="mt-10 mb-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <h3 className="text-xl font-bold mb-4">Core Courses</h3>
            <ul className="space-y-2 text-lg">
                
                <Link href="#"><li className="py-1">Programming Fundamentals</li></Link>
                <Link href="#"><li className="py-1"> Web2 Using NextJS</li></Link>
                <Link href="#"><li className="py-1"> Earn as You Learn</li></Link>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-4">Advance Courses</h3>
            <ul className="space-y-2 text-lg">
                <Link href="#"><li className="py-1" >Web3 and Metaverse</li></Link>
                <Link href="#"><li className="py-1">Cloud-Native Computing</li></Link>
                <Link href="#"><li className="py-1">Artificial Intelligence (AI) and Deep Learning</li></Link>
                <Link href="#"><li className="py-1">Ambient Computing and IoT</li></Link>
                <Link href="#"><li className="py-1">Genomics and Bioinformatics</li></Link>
                <Link href="#"><li className="py-1">Netwrok Programmability And Automation</li></Link>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-4">Social Links</h3>
            <div className="flex space-x-4 mb-4 py-1">
                <Link href="#"><FaFacebook className="text-white w-6 h-6 rounded-full bg-blue-800 pt-1 pb-1" /></Link>
                <Link href="#"><IoLogoYoutube className="text-white w-6 h-6 rounded-full bg-red-600 pt-1 pb-1" /></Link>
                <Link href="#"><FaTwitter className="text-white w-6 h-6 rounded-full bg-blue-400 pt-1 pb-1" /></Link>
                <Link href="#"><FaInstagram className="instagram text-white w-6 h-6 rounded-full  pt-1 pb-1" /></Link>
                <Link href="#"><RiTiktokLine className="text-white w-6 h-6 rounded-full bg-black pt-1 pb-1" /></Link>
            </div>
           
            <Link href="mailto:education@governorsindh.com" target="_blank" className="text-blue-800 underline flex items-center gap-3">
            <MdEmail className="size-6" />
            education@governorsindh.com</Link>
            
        </div>

       </div>
      </footer>      
    </div>
  );
}

export default Footer;
