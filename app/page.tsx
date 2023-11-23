"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gradient } from "@/components/Animation/Gradient";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.canvas
        initial={{
          filter: "blur(20px)",
        }}
        animate={{
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.075, 0.82, 0.965, 1],
        }}
        style={{}}
        id="gradient-canvas"
        data-transition-in
        className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
      ></motion.canvas>
    </main>
  );
}
