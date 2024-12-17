import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen py-12 mt-24 bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          THE PERSONS BEHIND
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="MEET THE TEAM"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

        <div className="flex flex-wrap w-full space-x-6 mt-12 justify-center">
          <div className="flex-col flex items-center space-y-6"><img className="w-64" src="img/1.svg" alt="" /><p className="text-xl">Founder & Candid Specialist</p><p className="w-[250px]">A visionary storyteller with years of experience in capturing timeless moments, specializing in weddings, events, and lifestyle photography.</p></div>
          <div className="flex-col flex items-center space-y-6"><img className="w-64" src="img/2.svg" alt="" /><p className="text-xl">Lead Photographer</p><p className="w-[250px]">The artistic eye behind our unique compositions, ensuring every shot reflects emotion and elegance</p></div>
          <div className="flex-col flex items-center space-y-6"><img className="w-64" src="img/3.svg" alt="" /><p className="text-xl">Lead Editor & Videography Head</p><p className="w-[250px]">A master of cinematic storytelling, creating stunning films with a perfect blend of creativity and technology.</p></div>
        </div>
        
         
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
