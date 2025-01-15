"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {

  const handleDownload = () => {
    // Construct the path to your PDF in the public directory
    const pdfPath = process.env.PUBLIC_URL + '14-1-25.pdf';

    // Create an anchor element
    const anchor = document.createElement('a');

    // Set the href attribute to the PDF path
    anchor.href = pdfPath;

    // Set the download attribute with the desired file name
    anchor.download = 'RahulResume.pdf';

    // Trigger a click on the anchor element to start the download
    document.body.appendChild(anchor);
    anchor.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(anchor);
  };


  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "RAHUL R",
                1000,
                // "Web Developer",
                // 1000,
                "Developer",
                1000,
                // "Student",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I am a highly motivated and self-driven individual, with a strong interest in software development and web development. Always eager to learn new technologies and solve challenging problems. Additionally I am a team player who enjoy working with others to achieve common goals.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-red-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-red-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" onClick={handleDownload}>
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#f6bd60] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="./images/profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
