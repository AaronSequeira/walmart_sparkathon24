'use client'
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
      if (videoRef.current) {
          if (videoRef.current.paused) {
              videoRef.current.play();
          } else {
              videoRef.current.pause();
          }
      }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative grid place-items-center w-fit h-fit rounded-full">           
        {/* <div className="absolute rounded-full size-[100px] custom-shadow z-1"/> */}
        <video
          ref={videoRef}
          src="/voice _assistant1.mp4"
          muted
          onClick={handleVideoClick} 
          className="cursor-pointer size-[300px] rounded-full"
          loop
          controls={false}
        />
      </div>
    </main>
  );
}
