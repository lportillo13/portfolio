// src/components/Home.tsx

import React, { FC } from 'react';
import { useEffect, useState } from "react";
import Particles from "./magicui/particles";
import ShimmerButton from "./magicui/shimmer-button";
import ShineBorder from "./magicui/shine-border";

const Home: FC = () => {
    const [color, setColor] = useState("#000000"); 
    useEffect(() => {
        setColor("#fff");
    }, []);

  return (
    
    <section id="home" className="h-screen flex items-center justify-center fade-in">
        <div className="relative flex w-full flex-col h-full md:h-screen p-10 md:p-0 items-center justify-center md:justify-end overflow-hidden bg-background md:shadow-xl">
            <Particles
                className="absolute inset-0"
                quantity={500}
                ease={80}
                color={color}
                refresh
            />
            <p className='suse-regular text-white text-center pb-5 uppercase md:w-2/6'>Welcome to my site</p>
            <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br dark:from-white from-white from-30% dark:to-white/40 to-black/40 bg-clip-text text-center text-4xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            I'm Leonardo Portillo, <br></br>a Front-End Developer.
            </h1>
            <p className='suse-regular text-white text-center pt-5 md:w-2/6'>I'm passionate about coding that pushes the limits—building high-performance websites, automating API integrations, creating custom dev tools, and designing stunning user experiences that make you say Wow!.</p>
            
            <div className="share-regular z-10 flex min-h-[8rem] items-center justify-center">                
                <a href='/RobinCV.pdf' target='_blank'>
                    <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Download CV
                            </span>
                    </ShimmerButton>
                </a>
            </div>
            <div className='absolute bottom-0 md:relative rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-1 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#39ff14,#39ff14,transparent_40%)] before:animate-image-glow'>
                <ShineBorder
                className="relative flex md:h-[200px] xl:h-[300px] md:w-[1000px] flex-col items-center p-0 justify-center overflow-hidden bg-background md:shadow-xl "
                color={["#39ff14", "#FE8FB5", "#FFBE7B"]}
                >    
                <img
                    src="https://code.visualstudio.com/assets/docs/languages/javascript/overview.png"
                    alt="JavaScript Overview"
                    className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                </ShineBorder>
            </div>
        </div>
    </section>
  );
};

export default Home;