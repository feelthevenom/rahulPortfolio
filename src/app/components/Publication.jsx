import React from "react";

const Publications = () => {
    return (
        <section className="text-white" id="publications">
            <h2 className="text-center text-4xl font-bold text-white mb-8">Publications</h2>
            <div className="container mx-auto p-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <a href="https://ieeexplore.ieee.org/document/10580151" target="_blank" rel="noopener noreferrer" className="block bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                        <h3 className="text-lg font-semibold mb-2">BMSU-NET: BUILDING EXTRACTION FROM AERIAL IMAGERY</h3>
                        <p className="text-gray-400 mb-2">IEEE Conference</p>
                        <p className="text-gray-400">Proposed model for high accuracy building segmentation from aerial images by modifying UNet Model.</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Publications;
