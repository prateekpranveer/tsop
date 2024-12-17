import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">SEE MORE</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-white">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-12">
        <p className="font-circular-web font-general text-2xl text-black tracking-widest">
          SERVICES THAT WE OFFER
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          
        </p>
      </div>

      <BentoTilt className="border-hsla bg-black relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src=""
          title={
            <>
              WEDDING
            </>
          }
          description="Comprehensive wedding photography, from pre-wedding to post-wedding, capturing candid, traditional, and destination moments with elegance."
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 bg-black row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src=""
            title={
              <>
                Event & Specialized Photography
              </>
            }
            description="Capturing engagements, milestones, corporate events, and festive gatherings, alongside maternity, family, lifestyle, and product shoots."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 bg-black row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src=""
            title={
              <>
                Videography Services
              </>
            }
            description="From cinematic wedding films to drone coverage, we bring your moments to life with creativity and precision."
            
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 bg-black me-14 md:col-span-1 md:me-0">
          <BentoCard
            src=""
            title={
              <>
                Custom Features
              </>
            }
            description="Personalized albums, digital galleries, same-day edits, and themed shoots tailored to your unique vision."
            
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 bg-black">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              
           Travel Shoots
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 bg-black">
          <video
            src=""
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
