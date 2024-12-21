import React from 'react';
import Image from "next/image"; 
import solo1 from "../../../public/imageWebsite.jpg";
import solo2 from "../../../public/imageWebsite2.jpg";
import solo3 from "../../../public/imageWebsite3.jpg";
import Slider from "../Slider"
const Text = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-10 border-b border-zinc-300 pb-10">
        <h1 className="text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem]  text-main font-extrabold m-auto md:w-[95%]">Certified Cloud Applied Generative AI Enginer (GenEng) and Solopreneur Developing</h1>
        <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.25rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">The pace of technology change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are wining by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus praying the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employess or other team members.</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0">
            <Image src={solo1} alt="solo1" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
            <Image src={solo2} alt="solo2" className="shadow-2xl shadow-black rounded-lg h-[300px] w-full" />
            <Image src={solo3} alt="solo3" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
        </div>

      <Slider  />
    </div>
  )
}

export default Text;
