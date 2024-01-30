"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C Programming</li>
        <li>Python</li>
        <li>Java Script</li>
        <li>MERN Stack</li>
        <li>Image Processing</li>
        <li>Generative AI</li>
        <li>IoT</li>
        <li>PowerBI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>St. Joseph's College of Engineering, B.E in Electronics and Communication Engineering, </b> <br/>2021 - 2024 | Chennai, India 7.89 CGPA (till 7th sem)</li>
        <li><b>PSB Polytechnic College, Diploma in ECE,</b> <br/>2018 - 2021 | Chennai, India 87%</li>
        <li><b>Sri Sankara Vidyashramam Mat.Hr. Sec School, </b> <br/>10th SSLC 2017 - 2018| Chennai, India 65%</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><b>C programming</b> -(Infosys Springboard)</li>
        <li><b>PyTorch for Deep Learning</b> -(Udemy)</li>
        <li><b>Full Stack Web Development</b> -(Udemy)</li>
        <li><b>Python</b> -(Udemy)</li>
        <li><b>DBMS </b>-(NPTEL)</li>
        <li><b>PowerBI</b> -(EY Micro-Skilling)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/pc.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello! I am an Electronics and Communication Engineering (ECE) student who discovered a profound interest in Information Technology (IT) after initially pursuing my core studies. Passionate about the dynamic world of technology, I made the decision to align my career with IT to explore and contribute to this rapidly evolving field. Currently seeking job opportunities that allow me to leverage my existing skills while remaining open to training in new technologies as a dedicated trainee. Eager to embark on a fulfilling professional journey and contribute my enthusiasm for IT to innovative projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
