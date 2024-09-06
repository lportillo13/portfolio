// src/components/About.tsx

import React, { FC } from 'react';
import BoxReveal from "./magicui/box-reveal";
import { MarqueeDemoVertical } from './about_logos';
import NumberTicker from "./magicui/number-ticker";
import ShineBorder from "./magicui/shine-border";

const About: FC = () => {
  return (
    <section id="about" className="h-screen container flex items-center my-16 text-white mt-[5rem] mb-[15rem]">
      <div className="flex items-center">
        <div className="flex-1 basis-1/2 p-4 m-2">
          <BoxReveal boxColor={"#39ff14"} duration={0.5}>
            <h2 className="text-[3.5rem] font-semibold">
              About Me<span className="text-[#39ff14]">.</span>
            </h2>
          </BoxReveal>
    
          <BoxReveal boxColor={"#39ff14"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>I'm a web developer based in Florida with a strong focus on front-end technologies. For the past few years, I’ve specialized in creating exceptional user and developer experiences using WordPress, React.js, TypeScript, Bootstrap, and Tailwind CSS. I particularly enjoy building WordPress themes and plugins from scratch, crafting custom solutions that perfectly fit the needs of my projects.</p>
              <p className='mt-4'>My interest in technology and food has been a lifelong passion. As a teenager, I was deeply engrossed in computers, always exploring and experimenting. That same enthusiasm continues to drive me today.</p>
            </div>
          </BoxReveal>

          <div className='flex'>          
            <ShineBorder
            className="relative flex h-full w-full mt-16 flex-col items-center p-0 me-5 justify-center overflow-hidden bg-background md:shadow-xl "
            color={["#39ff14", "#FE8FB5", "#FFBE7B"]}
            >  
              <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-white text-center py-6 numbers-track">
                <NumberTicker value={10} />+                  
                <p className="text-2xl"><span>Years Web Dev</span></p>
              </p>  
            </ShineBorder>     
            <ShineBorder
            className="relative flex h-full w-full mt-16 flex-col items-center p-0 me-5 justify-center overflow-hidden bg-background md:shadow-xl "
            color={["#39ff14", "#FE8FB5", "#FFBE7B"]}
            >  
              <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-white text-center py-6 numbers-track">
                <NumberTicker value={50} />+                  
                <p className="text-2xl">Finished Projects</p>
              </p>  
            </ShineBorder>    
            <ShineBorder
            className="relative flex h-full w-full mt-16 flex-col items-center p-0 justify-center overflow-hidden bg-background md:shadow-xl "
            color={["#39ff14", "#FE8FB5", "#FFBE7B"]}
            >  
              <p className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-white text-center py-6 numbers-track">
                <NumberTicker value={3000} />+                  
                <p className="text-2xl">Commits</p>
              </p>  
            </ShineBorder>   
          </div>               
        </div>
        <div className="flex-1 basis-1/2 p-4 m-2">
          <MarqueeDemoVertical />          
        </div>
      </div> 
    </section>
    
  );
};

export default About;
