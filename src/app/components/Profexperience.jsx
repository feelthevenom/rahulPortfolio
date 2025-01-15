import React from "react";

const Experience = () => {
    return (
        <section className="text-white" id="experience">
            <h2 className="text-center text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <div className="container mx-auto p-4">
                <div className="p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Water Treatment Plant Monitoring System (OT Cybersecurity)</h3>
                    <p className="text-gray-400 mb-2">December 2023 – January 2025</p>
                    <p className="text-gray-400 mb-4">Chennai</p>
                    <p className="text-gray-400 mb-4">Role: Software Engineer</p>

                    <p className="mb-4">
                        Developed a comprehensive monitoring system for water treatment plants, integrating real-time monitoring, advanced cybersecurity, and machine learning to optimize operations and safeguard against unauthorized access.
                    </p>

                    <h4 className="text-xl font-semibold mb-2">Key Responsibilities and Achievements</h4>
                    <ul className="list-disc list-inside mb-4">
                        <li>Developed frontend and backend services for real-time monitoring, improving system efficiency by 30%.</li>
                        <li>Implemented secure user authentication with token management, reducing unauthorized access by 95%.</li>
                        <li>Utilized Docker for microservices architecture, reducing deployment time by 25%.</li>
                        <li>Created an MLOps pipeline for real-time production, enhancing model accuracy by 95%.</li>
                        <li>Achieved 98% accuracy in text recognition using OCR for image processing tasks.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
                    <p className="text-gray-400">React.js, Python Flask, MySQL, Docker, TensorFlow, OpenCV, OCR, Git</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
