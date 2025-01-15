"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Implemented semantic segmentation for plant disease detection using pre-trained U-Net with ResNet50 backbone.Achieved an IoU Score of 0.8797 and a Dice Loss of 0.0715 and developed comprehensive documentation and analysis in Jupyter Notebook, published on Kaggle.",
    image: "/images/projects/leaf_segmentation.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.kaggle.com/code/feelthevenom/leaf-disease-segmentation-using-unet-model",
    previewUrl: "/",
  },

  {
    
    id: 1,
    title: "Fleet Managment",
    description: "During SIH, we built a Fleet Management Website integrating hardware with cloud services. Our solution optimizes real-time tracking and monitoring of vehicle fleets, showcasing skills in software and hardware integration.",
    image: "/images/projects/SIH.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Farmer Web Site using React JS",
    description: "A Farmer-friendly website which helps farmers to plant crops, trees for particular season using ReactJS and JSON API (Bootstrap for a responsive outlook)",
    image: "/images/projects/kisaan.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Autometic Irigration System",
    description: "Simple Water pouring system using pump by sensing soil moisture.",
    image: "/images/projects/IoT.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Bakery Search App",
    description: "An Ecommerce Website using Java Script with static data.",
    image: "/images/projects/bakery.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Building Extraction From Aerial Image, (Final Year project)",
    description: "Developing a novel deep learning model to automatically segment buildings from aerial imagery and estimate their total solar energy potential.",
    image: "/images/projects/roof.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
